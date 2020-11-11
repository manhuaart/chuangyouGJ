<template>
<!-- 树木图文 -->
  <div class="app-container">
  <el-form>
      <el-form style="width:100%;display: flex;">
        <el-form-item style="margin-left:8px;">
            <el-select v-model="project" placeholder="请选择"  clearable>
                <el-option  v-for="item in projects" :key="item.value" :label="item.label" :value="item.value" >
                </el-option>
            </el-select>
        </el-form-item>          
        <div class="block" style="margin-left:8px;">
          <el-date-picker  v-model="timenode" 
              placeholder="选择日期"
              type="date" 
              align="right" >
          </el-date-picker>
        </div>
        <el-form-item>
        <el-button type="primary" icon="el-icon-search"  size="mini" @click="handleQuery"  style="margin-left:8px;">查询</el-button>        
      </el-form-item>
      </el-form>
    </el-form>
     <el-table :data="showData"  
               row-key='id'
               :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
               @row-click="rowClick"
               max-height="650">
          <el-table-column  align="center"/>       
          <el-table-column label="员工id" align="center" prop="pid"/>  
          <el-table-column label="员工" align="center" prop="name"/>
          <el-table-column label="项目" align="center">
               <template> {{ this.project }}</template>
          </el-table-column>
          <el-table-column label="平台" align="center" prop="platforms" />          
          <el-table-column label="数量" align="center" prop="num" />
          <el-table-column label="时间" align="center" prop="time_node" />                       
    </el-table>
    <!---------------------------------------------------------------------------------------------- -->  
<!-- 查看平台数量 -->
    <el-dialog  :title="title"  :visible.sync="open" width="50%">
    <el-table v-loading="loading" :data="showData"  max-height="450">
          <el-table-column label="员工id" align="center" prop="pid"/>  
          <el-table-column label="员工" align="center" prop="name"/> 
    </el-table>           
    </el-dialog>
<!---------------------------------------------------------------------------------------------- -->  
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
           title:'',
            open:false,
            hasChildren:true,
            data_type:'first',
            children:'',
            timenode: '',
            url: 'http://192.168.1.110',
            project:undefined,
            platformList: [], 
            worksList: [],
            platform: [],
            work: [],
            dateList:undefined,
            startData:undefined,
            endDate:undefined,
            // 按钮状态
            loadType: true,
            disaType: true,
            selectType: true,
            tableTpye: true,
            taskType: '',
            // 数据
            showData: [],
            dataLenght: 0,
            data_num_check:0,
            typeP:undefined,
            //选中数组
            ids:[],
            // 非多个禁用
            multiple: true,
            // 二级下拉菜单
            projects: [
                {
                value: 'shumu',
                label: '树木视频',
                }, 
                {
                value: 'tw',
                label: '树木图文',
                },   
                {
                value: 'tv',
                label: '广电项目',
                },                              
            ],
//-----------------------------------------------------------------------------------------------------------------
      // 遮罩层
      loading: true,
      // 总条数
      total: 0,
      // 总条数
      total2: 0,
      // 查询参数
      queryParams: {
        id:undefined,
        pageNum: 1,
        pageSize: 10,
      }
    };
  },
  created() { },              
  mounted(){},
//------------------------------新--------------------------------------
  watch:{
      //监听项目选择框选中数据
      project: function () {
          for (let index in this.projects) {
              if (this.projects[index].value == this.project) {
                  this.project = this.projects[index].value
                  console.log(this.project)
              }
          }
      },
      timenode: function(){
            var date = new Date(this.timenode)
            var y = date.getFullYear()
            var m = date.getMonth() + 1
            m = m < 10 ? ('0' + m) : m
            var d = date.getDate()
            d = d < 10 ? ('0' + d) : d
            const time = y + '-' + m + '-' + d
            this.timenode =time
      }
  },
  //----------------------------end---------------------------------
  methods: {
      rowClick(row, column, event) {
            //遍历整个table数据
            this.showData.forEach((item) => {
              //判断该行是否有子节点
              if ("children" in item) {
                //遍历子节点
                item.children.forEach((item2) => {
                      // console.log(item2);//输出全部子节点
                  // //判断该节点是否为我点击的节点
                  if (item2 == row) {
                      console.log(row);//输出子节点
                        axios.get(this.url+'/data_Manipulation/search_staff_num/', 
                         { headers: {"token": sessionStorage.getItem('token')} }, 
                         {
                            dataType: 'text',
                            params: {
                                 'data_type': 'tdata',
                                 'project': this.project,
                                 'time_node': row.time_node,
                                 'user_id':item.pid,
                                 'plat': row.platforms,
                            }
                        }).then(res => {
                            this.open=true
                           console.log(res.data.items)
                          //  this.project=res.data.project
                          //   this.showData = res.data.items
                        }).catch(error => {
                            console.log(error);
                            this.$message({
                                message: '请求出错，请联系管理员',
                                type: 'error',
                                duration: 2000
                            });
                        });                      
                  }
                });
              }
            });
          },    
//----------------------------------
    handleSelectionChange(val) {
        this.tableData2Excel = val;
    },
    handleCheckedCitiesChange(value) {
      console.log(value)

      console.log(value.toString())
      var vueStr = value.toString().split(",")
      console.log(vueStr)
      this.mealIds = value.toString()
      this.form.merchantContract.mealIds = value.toString()
      console.log(this.form.merchantContract.mealIds)
    },
    
    //确定
    oks(){
        console.log(this.cityCode);
        this.form.merchantContract.cityCode=this.cityCode
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        merchant: {
          id: undefined,
          parentId: undefined,
          merchantType: 2, //商户类型
          companyName: undefined,
          blisNo: undefined,
        },
        merchantContract:{
          underwriterNumber:undefined, //目前承销商人数
          agencyFee:undefined,
          contractType:undefined,
        },
        approvalStatus:undefined, //审核状态
        approvalRecord: undefined,//审核记录
          // updateTime: undefined
      }
      this.resetForm("form");
    },
    /** 查询按钮按钮操作 */
    handleQuery() {
    //----------------/start/----------------------
      this.$message({
          message: '正在请求数据',
          type: 'success',
          duration: 2000
      });
      this.showData = [] // 初始化展示数据

      // 开始请求数据    
      axios.get(this.url+'/data_Manipulation/search_staff_num/',
      { headers: {"token": sessionStorage.getItem('token')}  },
      {
          dataType: 'text',
          params: {
               'project': this.project,
               'time_node': this.timenode,
               'data_type': this.data_type,
               'user_id':this.id,
               'plat': this.platform,
          }
      }).then(res => {
         console.log(res.data.items)
         this.project=res.data.project
          this.showData = res.data.items
      }).catch(error => {
          console.log(error);
          this.$message({
              message: '请求出错，请联系管理员',
              type: 'error',
              duration: 2000
          });
      });
      this.selectType = true
      this.loadType = true
    //----------------/end/--------------------
    }
  }
};
</script>
<style scoped>
 span{
     font-size:20px;
     color:#D9001B;
  }
 .sp2{
     font-size:12px;
     color:black;
  }
  input{
     width:10%;
     height:36px;
     border:1px solid #e5e7ec;
     border-radius:5.5px;
     /*text-align:center;*/
    padding-left: 16px;
    box-sizing: border-box;
  }
  input[disabled]{
    color:black;
    background-color: white;
  }
  .avatar-uploader{
    width:190px;
    height:110px;
    /*background:pink;*/
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 25px;
    color: #8c939d;
    width:190px;
    height:110px;
    line-height: 40px;
    /*margin-left: 5px;*/
    text-align: center;
  }
  .avatar {
     width:190px;
     height:110px;
     display: block;
  }
  .img{
    width:190px;
    height:110px;
  }
  select[disabled]{
     width:10%;
     height:36px;
     border:1px solid #e5e7ec;
     border-radius:5.5px;
  }
  .pic{
     /* background: pink; */
     margin-top: 30px;
      width: 100%;
      display:flex;
      flex-wrap:wrap;

  }
  .pic2{
     /* background: pink; */
     display: flex;
     margin-left:35px;
  }
    .pic3{
     /* background: pink; */
     display: flex;
     /* margin-left:35px; */
  }
  .boxvity{
    display: flex;
    align-items: center;
    margin-bottom: 26px;
  }
  .boxvity font{
    font-size: 14px;
    font-weight: 700;
    width: 140px;
    text-align: right;
    padding-right: 12px;
  }
  .boxvity font i{
    color: #ff4949;
    margin-right: 5px;
  }
  .distpicker-address-wrapper select{
    outline: none!important;
  }
  .boxvity select {
    height: 36px;
    border-color: #e2e2e2;
    border-radius: 4px;
    margin-right: 10px;
    padding: 0 15px;
  }
  .zongji{
    font-size: 12px;
    color: #409EFF;
    margin-left:10px;
  }
  .el-table {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    padding-left:15px;
    padding-right:15px;
  }

  a:active, a:hover, a {
    color: rgba(var(--vs-primary), 1);
}
a:visited { 
color:red; 
text-decoration:none; 
} 
</style>
