<template>
<!-- 角色等级管理 -->
  <div class="app-container">
  <el-form>   
      <el-form-item>
        <div class="letf-items" style="float: left;">
          <el-button
            v-if="$acl.get[0]='p0'"
            type="primary"
            icon="el-icon-plus"
            size="mini"
            @click="handleAdd"
          >新增</el-button>     
          <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDeleteAll"
        >删除</el-button>  
          <el-button
          type="warning"
          size="mini"
          @click="findNumber"
        >查看平台数量</el-button> 
        </div>
      </el-form-item>      
    </el-form>
    <!-- <el-table v-loading="loading" :data="merchantList" @selection-change="handleSelectionChange"> -->
    <el-table v-if='merchantList' v-loading="loading" :data="merchantList"  @selection-change="handleSelection" max-height="600">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="员工id" align="center" prop="user_id" />
      <el-table-column label="员工姓名" align="center" prop="user_name" />
      <el-table-column label="项目名称" align="center" prop="project" />
      <el-table-column label="平台名称" align="center" prop="today_platform" />  
      <el-table-column label="时间" align="center" prop="this_date" />           
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, merchantList)"
          >删除</el-button>       
        </template>
      </el-table-column>
    </el-table>
    <!--分页组件-->
    <el-pagination
      v-show="total>0"
      :total="total"
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="queryParams.pageNum"
      :page-size="queryParams.pageSize"
      style="margin-top: 8px;"
      layout="total, prev, pager, next, sizes"
    />
<!-- 新增 -->
    <el-dialog :title="title" :visible.sync="open" width="70%">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-row :gutter="40">
          <el-col :span="14">
             <el-form-item label="项目" >  
                <el-select v-model="project" placeholder="请选择" clearable  @change="change(project)">
                    <el-option  v-for="item in projects" :key="item.value" :label="item.label" :value="item.value" >
                    </el-option>
                </el-select>
             </el-form-item>
          </el-col>
          <el-col :span="14"> 
            <el-form-item label="员工">
                <el-select v-model="staff" placeholder="请选择"  clearable   @change="changeS(staff)">
                    <el-option v-for="item in staff_list" :key="item.user_id" :label="item.user_nick" :value="item.user_id"
                               :disabled="item.disabled">
                    </el-option>
                </el-select>
            </el-form-item>
          </el-col> 
          <el-col :span="14"> 
             <el-form-item label="平台">
                <el-select v-model="plat" multiple placeholder="请选择">
                    <el-option
                            v-for="item in plat_items"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value" :disabled="item.disabled"
                            >
                    </el-option>
                </el-select>
             </el-form-item>
          </el-col>
        </el-row>
        <!-- '''''''''''''''''''''''' -->   
    </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>                 
    </el-dialog>
<!---------------------------------------------------------------------------------------------- -->  
<!-- 修改 -->
    <el-dialog :title="title" :visible.sync="open2" width="70%">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-row :gutter="40">
          <el-col :span="14">
             <el-form-item label="项目" >  
                <el-select v-model="project" placeholder="请选择" clearable  @change="change(project)" disabled>
                    <el-option  v-for="item in projects" :key="item.value" :label="item.label" :value="item.value" >
                    </el-option>
                </el-select>
             </el-form-item>
          </el-col>
          <el-col :span="14"> 
            <el-form-item label="员工">
                <el-select v-model="staff" placeholder="请选择"  clearable   @change="changeS(staff)" disabled>
                    <el-option v-for="item in staff_list" :key="item.user_id" :label="item.user_nick" :value="item.user_id"
                               :disabled="item.disabled">
                    </el-option>
                </el-select>
            </el-form-item>
          </el-col> 
          <el-col :span="14"> 
             <el-form-item label="平台">
                <el-select v-model="plat" multiple placeholder="请选择">
                    <el-option
                            v-for="item in plat_items"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value" :disabled="item.disabled"
                            >
                    </el-option>
                </el-select>
             </el-form-item>
          </el-col>
        </el-row>
        <!-- '''''''''''''''''''''''' -->   
    </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm2">确 定</el-button>
        <el-button @click="cancel2">取 消</el-button>
      </div>                 
    </el-dialog>
<!---------------------------------------------------------------------------------------------- -->  
<!-- 查看平台数量 -->
    <el-dialog :title="title" :visible.sync="open3" width="50%">
    <el-table v-loading="loading" :data="merchantList"   @selection-change="handleSelection" max-height="450">
          <el-table-column label="平台" align="center" prop="user_name" />
          <el-table-column label="数量" align="center" prop="project" />     
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
  //---------------------------------
      user_id:undefined,
      plat_items:[],
      staff_list:[],
      plat:undefined,
      staff:undefined,
      timenode: '',
      timenoded:'',
      projectFind:undefined,
      project:undefined,
      url: 'http://192.168.1.110',      
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
//----------------------------------------------------------------------------------------------
      // 遮罩层
      loading:false,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 总条数
      total: 0,
      // 员工列表数据
      merchantList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false, 
      open2: false, 
      open3:false,         
      // 查询参数
      queryParams: {
        id:undefined,
        pageNum: 1,
        pageSize:10,
      },
      // 表单参数
      form: {
        merchant:{ },
      },
      // 表单校验
      rules: {    
        'this.project': [
          { required: true, message: "项目名不能为空", trigger: "blur" }
        ],                                                                                       
      }
    };
  },
  created() {
    this.getList();
  },
//------------------------------新--------------------------------------
  watch:{
      //监听项目选择框选中数据
      projectFind: function () {
          for (let index in this.projects) {
              if (this.projects[index].value == this.projectFind) {
                  this.projectFind = this.projects[index].value
              }
        }
      },
      //监听项目选择框选中数据
      project: function () {
          for (let index in this.projects) {
              if (this.projects[index].value == this.project) {
                  this.project = this.projects[index].value
              // 开始请求数据    
              axios.get(this.url+'/data_Manipulation/show_staff/',
                     {   
                           headers: { 
                               "token": localStorage.getItem('token')
                            },
              }, {
                  dataType: 'text',
                  params: {
                      'project': this.project,
                  }
              }).then(res => {
                console.log(res)
                   this.staff_list=res.data.items;
                   this.plat_items=res.data.plat_items
                }) 
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
    //每页数据的数量
    sizeChange(val){
        this.queryParams.pageSize = val
        this.getList()
    },
    //选择的页面
    currentChange(val){ 
          this.queryParams.pageNum = val
          this.getList()     
    },
    //查看平台数量
    findNumber(){
           this.open3 = true;
    },
    change(i){
      this.staff=''
    },
    changeS(i){
       console.log(i)
       this.user_id=i
    },
    /** 查询商户列表 */
    getList() {
      this.loading = true;
      axios.get(this.url+'/data_Manipulation/show_staff_plat/',
             {   
          headers: { 
              "token": localStorage.getItem('token')
           },
       },
       {
          dataType: 'text',
          params: {
              'page': this.queryParams.pageNum,
              'page_num': this.queryParams.pageSize,
              'project': this.projectFind,
              'time_node': this.timenode,
          }           
      }).then(res => {
           this.merchantList = res.data.items
           this.loading = false;
           this.total =res.data.data_num;  //总条数
          //  console.log('总条数'+this.total)
      })
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
      this.staff = '';
      this.project = ''; 
      this.plat = ''; 
    },
    // 取消按钮
    cancel2() {
      this.open2 = false;
      this.reset();
      this.staff = '';
      this.project = ''; 
      this.plat = ''; 
    },    
    // 表单重置
    reset() {
      this.form = {
        merchant: {
          id: undefined,
          user_id: undefined,
          plat_items:[],
          staff_list:[],
          plat:undefined,
          staff:undefined,
          timenode: '',
          projectFind:undefined,
          project:undefined,
        },
      }
      // this.resetForm("form");
    },
    /** 查询按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      // this.resetForm("queryForm");
      this.queryParams.pageNum = 1;
      this.projectFind=''
      this.timenode=''
      this.getList();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
       var approvalStatus=selection.map(item => item.approvalStatus)
      if(approvalStatus==1 || selection.length>1){
         this.multiple =true;
         this.single =true
      }   
      else{
         this.multiple = !selection.length  //关于删除按钮的  
         this.single = selection.length!=1   //关于修改的  
      }
    },  
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加新的";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {   
      this.reset();
      this.open2 = true;
      this.title = "修改";
      console.log(row)
       this.project=row.project
       this.timenoded=row.this_date
       this.plat_items=row.today_platform 
       this.user_id=row.user_id  
       this.staff=row.user_name       
      //  let plats = '';
      //     for (let i in this.plat) {
      //          plats += this.plat[i] + ','
      //  }
       console.log(this.plat_items)
    },  
    /** 提交按钮 */
    submitForm: function() {
        if (this.plat!='' && this.user_id!='' && this.project!='') {
          let plats = '';
          for (let i in this.plat) {
               plats += this.plat[i] + ','
          }
          let formData = new FormData();
          formData.append('project_name',this.project); //项目名称
          formData.append('user_id', this.user_id); //员工id
          formData.append('plat_name', plats);   // 平台名称
          formData.append('type', 'add');
          axios.post(this.url+'/data_Manipulation/save_staff_role/', formData, {   
                headers: {"token": localStorage.getItem('token')}  
          }).then(res => {
                     console.log(res)
                  if (res.data.Status= 'ok') {
                        this.$message({
                          showClose: true,
                          message: '新增成功',
                          type: 'success',
                          offset:92,
                          duration: 2000
                        }); 
                         this.open = false;
                         this.staff = '';
                         this.project = ''; 
                         this.plat = ''; 
                         this.getList();
                  } else {
                        this.$message({
                           showClose: true,
                           message: '新增失败',
                           type: 'error',
                           offset:92,
                           duration: 2000
                        });  
                  }
          }).catch(() => console.log('promise catch err')); //捕获异常;
       }else{
           this.$message({
                 showClose: true,
                 message: '添加数据不能为空',
                 type: 'error',
                 offset:92,
                 duration: 2000
              });           
       }
    },
    /** 提交按钮 */
    submitForm2: function() {
       if(this.plat!=''){
          let plats = '';
          for (let i in this.plat) {
               plats += this.plat[i] + ','
          }
          let formData = new FormData();
          formData.append('project_name',this.project); //项目名称
          formData.append('user_id', this.user_id); //员工id
          formData.append('plat_name', plats);   // 平台名称
          formData.append('this_date', this.timenoded);   // 平台名称   
          formData.append('type', 'update');
          axios.post(this.url+'/data_Manipulation/save_staff_role/', formData,{   
                  headers: { "token": localStorage.getItem('token')},
          }).then(res => {
                   console.log(res)
                  if (res.data.Status= 'ok') {
                        this.$message({
                          showClose: true,
                          message: '修改成功',
                          type: 'success',
                          offset:92,
                          duration: 2000
                        }); 
                         this.open2 = false;
                         this.staff = '';
                         this.project = ''; 
                         this.plat = ''; 
                         this.getList();
                  } else {
                        this.$message({
                           showClose: true,
                           message: '修改失败',
                           type: 'error',
                           offset:92,
                           duration: 2000
                        });  
                  }
          }).catch(() => console.log('promise catch err')); //捕获异常;
                }else{
                     this.$message({
                           showClose: true,
                           message: '数据不能为空',
                           type: 'error',
                           offset:92,
                           duration: 2000
                        });  
                }
    },
    // 多选框选中数据
    handleSelection(selection) {
       console.log(selection.length)
        this.ids = selection.map(item => item)
        console.log(this.ids)
        if(selection.length=0){
              this.multiple = true
        }else{
          //selection.length>0 or <0
           this.multiple = false
        }
    },
        //多选 or全选 删除按钮操作
    handleDeleteAll(){
        console.log(this.ids)
        for (let i=0;i < this.ids.length; i++) {
              console.log("画"+i)
              this.handleDelete(i, this.merchantList);
        }
    },
    /** 删除按钮操作 */
    handleDelete(index, rows) {
      const items = rows[index];
      console.log(items)
      // console.log("删除"+rows.id)
      // let ids = rows.id || this.ids;
          let plats = '';
          for (let i in this.plat) {
               plats += this.plat[i] + ','
          }  
          let formData = new FormData();
          formData.append('project_name',items.project); //项目名称
          formData.append('user_id', items.user_id); //员工id
          formData.append('plat_name',items.today_platform);   // 平台名称
          formData.append('this_date',items.this_date);
          formData.append('type', 'del');          
          axios.post(this.url+'/data_Manipulation/save_staff_role/', formData ,       {   
          headers: { 
              "token": localStorage.getItem('token')
           },
       },).then(res => {
                  console.log(res)
                  if (res.data.Status= 'ok') {
                       rows.splice(index, 1);
                        this.$message({
                          showClose: true,
                          message: '删除成功',
                          type: 'success',
                          offset:92,
                          duration: 2000
                        }); 
                  } else {
                        this.$message({
                           showClose: true,
                           message: '删除失败',
                           type: 'error',
                           offset:92,
                           duration: 2000
                        });  
                  }
          })
        // }).then(() => {
        //   this.getList();
        //   this.msgSuccess("删除成功");
        // }).catch(function() {});
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
    /* padding-right:15px; */
  }
</style>