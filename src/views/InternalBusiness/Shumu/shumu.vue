<template>
  <div class="app-container">
  <el-form>
      <el-form style="width:100%;display: flex;">
        <el-form-item style="margin-left:8px;">
            <el-select v-model="project" placeholder="请选择" clearable>
                <el-option v-for="item in projects" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

        </el-form-item>     
        <el-form-item  style="margin-left:8px;">
              <el-select v-model="platform" placeholder="请选择" clearable>
                  <el-option v-for="item in platformList" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
              </el-select>
          </el-form-item>
        <el-form-item  style="margin-left:8px;">
                <el-select v-model="work" placeholder="请选择" clearable>
                    <el-option v-for="item in worksList" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
          </el-form-item>       
          <el-date-picker  v-model="dateList" 
              type="datetimerange" 
             :picker-options="pickerOptions"
             range-separator="至"
             start-placeholder="开始日期" 
             end-placeholder="结束日期" 
             align="right" style="margin-left:8px;">
          </el-date-picker>
      </el-form>
      <el-form-item>
       <div class="letf-items" style="float: left;">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDeleteAll"
        >删除</el-button>
        <el-tag  size="medium" class="zongji">总计：{{ dataLenght }}</el-tag>
        <el-button type="success" v-if="tableTpye==true"  style="margin-left:10px;"  size="mini"   @click="showTortData">查看侵权数据：{{ tableData2Excel.length }}</el-button>
        <el-button type="success" v-else style="margin-left:10px;"  size="mini"  @click="fanhui()">切换全部数据</el-button>
        <el-button  icon="el-icon-search"  size="mini" @click="handleQuery('tdata','1')" style="margin-left:8px;background: rgba(var(--vs-primary), 1) !important; color:#fafafa;border:none">查询</el-button>
        </div>
        <div class="right-items" style="float: right;">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          v-if="tableTpye==true"
          @click="handleQuery('tdata','all')">
        导出所有数据</el-button> 
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          v-else          
          @click="export2Excel(tableData2Excel)">
        导出侵权数据</el-button>                    
        </div>
      </el-form-item>
    </el-form>
    <!-- ----------if-------------- -->
     <el-table v-if="tableTpye" :data="showData"  @selection-change="handleSelection" max-height="650"  height="650"  v-loading="loading" style="width: 100%">
          <el-table-column type="selection" width="55"  align="center" />
          <el-table-column label="编号"  type="index"  align="center" :index="indexMethod"/>
          <el-table-column label="样本标题" align="center" prop="sample_title">  
              <template slot-scope="scope">
                  {{ scope.row.sample_title }}
              </template>
          </el-table-column>
          <el-table-column label="样本链接" align="center" prop="sample_url"  show-overflow-tooltip>
               <template slot-scope="scope">
                   <a :href="scope.row.sample_url" target="_blank">{{ scope.row.sample_url }}</a>
               </template>            
          </el-table-column>  
          <el-table-column label="作品名称" align="center" prop="sample_key" />
          <el-table-column label="样本发布时间" align="center" prop="sample_date" />
          <el-table-column label="侵权标题" align="center" prop="tort_title" />
          <el-table-column label="侵权链接" align="center" prop="address" show-overflow-tooltip>
              <template slot-scope="scope">
                  <a :href="scope.row.tort_url" target="_blank">{{ scope.row.tort_url }}</a>
              </template>
          </el-table-column>              
          <el-table-column label="侵权时长" align="center" prop="tort_duration" />
          <el-table-column label="是否整片" align="center" prop="tort_check" />
          <el-table-column label="侵权发布者" align="center" prop="tort_author" />
          <el-table-column label="侵权发布时间" align="center" prop="tort_putdate" />
          <el-table-column label="播放次数" align="center" prop="tort_plays" />
          <el-table-column label="爬取时间" align="center" prop="detection_time" />        
      <!--<el-table-column label="开通日期" align="center" prop="updateTime" :formatter='updateTimeFormat'/> -->
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width" fixed="right">
        <template slot-scope="scope">
           <el-button
            size="mini"
            type="text"
            @click.native.prevent="addRow(scope.$index, showData)"
          >确认</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, showData)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
   <!-- --------------else------------------ -->
     <el-table v-else  :data="tableData2Excel"  @selection-change="handleSelection" max-height="650"  height="650" v-loading="loading" style="width: 100%">
      <el-table-column type="selection" width="55" align="center" />
          <el-table-column label="编号"  type="index"  align="center" :index="indexMethod"/>
          <el-table-column label="样本标题" align="center" prop="sample_title">  
              <template slot-scope="scope">
                  {{ scope.row.sample_title }}
              </template>
          </el-table-column>
          <el-table-column label="样本链接" align="center" prop="sample_url"  show-overflow-tooltip>
               <template slot-scope="scope">
                   <a :href="scope.row.sample_url" target="_blank">{{ scope.row.sample_url }}</a>
               </template>            
          </el-table-column>  
          <el-table-column label="作品名称" align="center" prop="sample_key" />
          <el-table-column label="样本发布时间" align="center" prop="sample_date" />
          <el-table-column label="侵权标题" align="center" prop="tort_title" />
          <el-table-column label="侵权链接" align="center" prop="address" show-overflow-tooltip>
              <template slot-scope="scope">
                  <a :href="scope.row.tort_url" target="_blank">{{ scope.row.tort_url }}</a>
              </template>
          </el-table-column>              
          <el-table-column label="侵权时长" align="center" prop="tort_duration" />
          <el-table-column label="是否整片" align="center" prop="tort_check" />
          <el-table-column label="侵权发布者" align="center" prop="tort_author" />
          <el-table-column label="侵权发布时间" align="center" prop="tort_putdate" />
          <el-table-column label="播放次数" align="center" prop="tort_plays" />
          <el-table-column label="爬取时间" align="center" prop="detection_time" />        
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width" fixed="right">
        <template slot-scope="scope">
           <el-button
            size="mini"
            type="text"
            @click.native.prevent="addRoww(scope.$index, showData)"
          >确认</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDeletew(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from 'axios'
import { getSelectPlat } from "@/api/InternalBusiness.js";
// 引入导出Excel表格依赖
//import XLSX from './xlsx.core.min.js'
 import FileSaver from 'file-saver'
 import XLSX from 'xlsx'
export default {
  data() {
    return {
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
            downTortType: true,
            downAllType: true,
           // 遮罩层
            loading: false,
            tableTpye: true,
            taskType: '',
            // 数据
            showData: [],
            tableData2Excel: [],
            dataLenght: 0,
            data_num_check:0,
            typeP:undefined,
            //选中数组
            ids:[],
            // 非多个禁用
            multiple: true,
            // 日期选择器
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            // 二级下拉菜单
            projects: [{
                value: 'shumu',
                label: '树木视频',
                works: [
                    {
                        value: '潇湘新闻',
                        label: '潇湘新闻',
                    },
                    {
                        value: '动境',
                        label: '动境',
                    },
                    {
                        value: '辣油视频',
                        label: '辣油视频',
                    },
                    {
                        value: '海岱新闻',
                        label: '海岱新闻',
                    },
                    {
                        value: '红星深度',
                        label: '红星深度',
                    },
                    {
                        value: '爱台犀利帮',
                        label: '爱台犀利帮',
                    },
                    {
                        value: '胡锡进',
                        label: '胡锡进',
                    },
                    {
                        value: '封芒',
                        label: '封芒',
                    },
                    {
                        value: '纪录湃',
                        label: '纪录湃',
                    },
                    {
                        value: '澎湃眼界',
                        label: '澎湃眼界',
                    },
                    {
                        value: '大河看见',
                        label: '大河看见',
                    },
                    {
                        value: '大河零距离',
                        label: '大河零距离',
                    },
                    {
                        value: '今报传媒',
                        label: '今报传媒',
                    },
                    {
                        value: '豫视频',
                        label: '豫视频',
                    },
                    {
                        value: '我是记者Vlog',
                        label: '我是记者Vlog',
                    },
                    {
                        value: '面孔',
                        label: '面孔',
                    },
                    {
                        value: '大河报洛阳新闻',
                        label: '大河报洛阳新闻',
                    },
                    {
                        value: '大河人物',
                        label: '大河人物',
                    }
                ],
                platforms:[]
            }],
//-----------------------------------------------------------------------------------------------------------------
      mealIds: '',
      checkedCities: [],//选中值
      options: [],
      // 总条数
      total: 0,
      // 总条数
      total2: 0,
      // 查询参数
      queryParams: {
        id:undefined,
        pageNum: 1,
        pageSize: 10,
        merchantType: 2,//商户类型
        companyName: undefined,
      }
    };
  },
  components: { 
    
  },
  created() {
    // this.getDicts("approval_status").then(response => {
    //      this.approvalStatus = response.data;
    // })
  },
  mounted(){
    var that=this
  },
//------------------------------新--------------------------------------
  watch:{
      project: function () {
          for (let index in this.projects) {
              if (this.projects[index].value == this.project) {
                  var pro=this.projects[index].platforms
                  console.log(pro.length)
                  if(this.projects[index].platforms.length<1){
                      // 开始请求数据    
                      getSelectPlat().then(res => {  
                            console.log(this.projects[index].platforms)  
                            console.log(res.data)  
                            let array=res.data;
                            array.forEach(index => {
                                    pro.push(index)
                                
                            });
                     }) 
                     
                  } 
                  this.platformList = this.projects[index].platforms
                  this.worksList = this.projects[index].works
              }
          }
          this.platform = ''
      },
      platform: function () {
          if (this.project && this.platform) {
              this.selectType = false
              this.loadType = false
              if (this.startData && this.endDate) {
                  this.downAllType = false
              }
          } else {
              this.selectType = true
              this.loadType = true
          }
      },
      dateList: function () {
          this.selectType = false
          this.loadType = false
          this.downAllType = false
          if (this.dateList) {
              this.startData = Date.parse(this.dateList[0]) / 1000
              this.endDate = Date.parse(this.dateList[1]) / 1000 + 86400
          } else {
              this.startData = ''
              this.endDate = ''
          }
      }
  },
  //----------------------------end---------------------------------
  methods: {
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
              this.handleDelete(i, this.showData);
        }
    },

    //删除按钮操作
    handleDelete(index, rows) {
        // const items = rows[index];
        // console.log(items)
        console.log("漫画"+index)  //下标
        let data = new FormData();
        data.append('project', this.project);
        data.append('plat', this.platform);
        data.append('tort_url', rows[index].tort_url);
        data.append('tort_title', rows[index].tort_title);
        data.append('tort_author', rows[index].tort_author);
        data.append('is_check', 'del');
        console.log(data)
        axios.post(this.url+'/data_Manipulation/data_operation/', data,
               {   
          headers: { 
              "token": localStorage.getItem('token')
           },
       },
        ).then((response) => {
            // then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)
            console.log(response)
            if (response.data.status === 'ok') {
                        rows.splice(index, 1);                     
                        this.$message({
                          showClose: true,
                          message: '删除成功提醒',
                          type: 'success',
                          offset:92,
                          duration: 2000
                        }); 
                               
            } else {
                        this.$message({
                          showClose: true,
                          message: '删除失败提醒',
                          type: 'error',
                          offset:92,
                          duration: 2000
                        });
            }
            // 
        }).catch((error) => {
            // catch 指请求出错的处理
             console.log(error);
        })
    },
    //点击确定按钮将数据传入 侵权数据
     addRow(index, rows) {
        const items = rows[index];
        console.log(items)
        let formData = new FormData();
        for (let i in items) {
            console.log(i); //字段名称   //item[i]  字段对应的数据
            formData.append(i, items[i])
        }
        formData.append('project', this.project);
        formData.append('plat', this.platform);
        formData.append('item', items);
        formData.append('is_check', 'add');
        axios.post(this.url+'/data_Manipulation/data_operation/', formData,
               {   
          headers: { 
              "token": localStorage.getItem('token')
           },
       },
        ).then((response) => {
             // then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)
             console.log(response.data)
             if (response.data.status === 'ok') {
                //  this.downTortType = false;
                 this.tableData2Excel.push(items);
                 this.showData.splice(index, 1);
                 console.log(this.tableData2Excel)
             } else {
                 alert('失败')
             }
         }).catch((error) => {
             // catch 指请求出错的处理
             console.log(error);
         })


     },
    //自定义索引 编号
    indexMethod(index) { return index+1 },
    //点击查看侵权数据按钮
		showTortData() {
			this.tableTpye = !this.tableTpye
		},
    fanhui(){this.tableTpye = !this.tableTpye},
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
    handleQuery(type, page, check) {
      this.typeP=type;
    //----------------/start/----------------------
      this.$message({
          message: '正在请求数据',
          type: 'success',
          duration: 2000
      });
      this.taskType = type // 保存查询类型 用于分页
      this.loading = true // 加载中....
      this.loadType = true
      this.selectType = true // 查询按钮为禁止
      this.showData = [] // 初始化展示数据
      this.downTortType = true // 下载excel按钮为禁止

      // 开始请求数据
      axios.get(this.url+'/data_Manipulation/search_data/', 
        {
            dataType: 'text',
            params: {
                'type': type,
                'project': this.project,
                'plat': this.platform,
                'starttime': this.startData,
                'endtime': this.endDate,
                'work': this.work,
                'page': page,
                'is_check': check
            }
        },
             {   
          headers: { 
              "token": localStorage.getItem('token')
           },
       },
       ).then(res => {
         console.log(res.data)
          if(this.typeP=="check"){
               this.tableTpye =false;
               this.dataLenght == 0;
          }else{
              this.tableTpye =true;
              this.data_num_check == 0;
          }
          this.dataLenght = res.data.data_num
          this.data_num_check = res.data.data_num_check
          this.currentPageNum = res.data.page_number
          if (page == 1) {
              if (this.dataLenght) {
                 this.loading = false
                  this.$message({
                      message: '当前时间段内数据量为：' + this.dataLenght,
                      type: 'success',
                      duration: 2000
                  });
              } else {
                  this.$message({
                      message: '抱歉，当前时间段内数据量为：0，请联系管理员',
                      type: 'error',
                      duration: 2000
                  });
              }
          }
          //  this.project = ''
          // this.platform = ''
          // this.work = ''
          // this.dateList = ''
          // this.project =''
          for (const index in res.data.content) {
              if (this.project == "tv") {
                  res.data.content[index].sample_title = ""
                  res.data.content[index].sample_date = ""
                  res.data.content[index].sample_key = res.data.content[index].works
                  res.data.content[index].sample_url = ""
              }
              if (res.data.content[index].tort_plays == null) {
                  res.data.content[index].tort_plays = 1
              }
              // res.data.content[index].id = index
              var timestamp4 = new Date(res.data.content[index].detection_time * 1000);
              res.data.content[index].detection_time = timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8)
          }
          // 设置展示数据和导出数据
          if (page == 'all') {
              this.export2Excel(res.data.content)
              this.downAllType = true
          } else {
              this.tableData2Excel = [] // 将侵权数据清空
              this.showData = res.data.content;
              // 处理数据
          }
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
      this.loading = false
    //----------------/end/--------------------
    },
    formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
    },
//--------------导出数据-------------------
    openDownloadDialog(url, saveName) {
      let self = this;
      if (typeof url == 'object' && url instanceof Blob) {
          url = URL.createObjectURL(url); // 创建blob地址
      }
      let aLink = document.createElement('a');
      aLink.href = url;
      aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
      let event;
      if (window.MouseEvent) event = new MouseEvent('click')
      else {
          event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      }
      aLink.dispatchEvent(event);
    },
    sheet2blob(sheet, sheetName) {
      sheetName = sheetName || 'sheet1';
      let workbook = {
          SheetNames: [sheetName],
          Sheets: {}
      };
      workbook.Sheets[sheetName] = sheet; // 生成excel的配置项

      let wopts = {
          bookType: 'xlsx', // 要生成的文件类型
          bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
          type: 'binary'
      };
      let wbout = XLSX.write(workbook, wopts);
      let blob = new Blob([s2ab(wbout)], {
          type: "application/octet-stream"
      }); // 字符串转ArrayBuffer
      function s2ab(s) {
          let buf = new ArrayBuffer(s.length);
          let view = new Uint8Array(buf);
          for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
          return buf;
      }
      return blob;
    },
//------------------------------
    //导出数据
   export2Excel(dataList) {
       const now = new Date();
       const fileName = this.project + '_' + this.platform + '_' + now.toLocaleDateString();
       //头
       const tHeader = ['样本标题', '样本链接', '作品名称', '样本发布时间', '侵权标题', '侵权链接', '侵权时长', '是否整片', '侵权发布者', '侵权发布时间',
           '播放次数',
           '爬取时间'
       ]
       //对应的标签
       const filterVal = ['sample_title', 'sample_url', 'sample_key', 'sample_date', 'tort_title', 'tort_url',
           'tort_duration', 'tort_check', 'tort_author', 'tort_putdate', 'tort_plays', 'detection_time'
       ]
       //标签对应的内容  是一个数组结构
        let self = this;
       const list = dataList;
       const data = this.formatJson(filterVal, list);
       const sheet = XLSX.utils.json_to_sheet(data)
       //----------------------
       this.openDownloadDialog(this.sheet2blob(sheet), fileName + '.xlsx')
       this.tableData2Excel = []
       this.downTortType = true
   },

    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    activationTimeFormat(row,column){
      if(row.activationTime == '' || row.activationTime == null){
        return ''
      }
      var testTime = DateUtils.utc2beijing(row.activationTime);
      var date1 = DateUtils.formatTimeToStr(testTime,"yyyy-MM-dd hh:mm:ss");
      return date1;
    },
    updateTimeFormat(row,column){
      if(row.updateTime == '' || row.updateTime == null){
        return ''
      }
      var testTime = row.updateTime;
      var date1 = DateUtils.formatTimeToStr(testTime,"yyyy-MM-dd");
      return date1;
    },
  }
};
</script>
<style scoped>
  body {
    margin: 0;
  }
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

  a:active, a:hover, a {
    color: rgba(var(--vs-primary), 1);
}
a:visited { 
color:red; 
text-decoration:none; 
} 
</style>
