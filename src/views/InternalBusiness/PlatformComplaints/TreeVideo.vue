<template>
<!-- 树木视频 -->
  <div id="extra-component-form-wizard-demo">
    <vx-card>
        <div class="mt-5">
            <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit"   @on-complete="formSubmitted">
                <tab-content title="选择数据" class="mb-5" :before-change="validateStep1">
                    <!-- ----------tab 1 选择数据---------- -->
                  <div class="vx-row">
                  <vx-card>
                    <el-form style="width:100%;display: flex;">
                      <el-form-item>
                          <el-select v-model="project" placeholder="请选择项目" clearable>
                              <el-option v-for="item in projects" :key="item.value" :label="item.label" :value="item.value">
                              </el-option>
                          </el-select>
                      </el-form-item>     
                      <el-form-item   style="margin-left:8px;">
                            <el-select v-model="platform" placeholder="请选择平台" clearable>
                                <el-option v-for="item in platformList" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                      </el-form-item>   
                      <el-form-item   style="margin-left:8px;">
                            <el-select v-model="data_type" placeholder="请选择数据类型" clearable>
                                  <el-option label="已发函" value="1"></el-option>
                                  <el-option label="未发函" value="0"></el-option>
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
                      <el-form-item style="margin-left:8px;">
                       <el-button  icon="el-icon-search"  size="mini" @click="handleQuery()" style="background: rgba(var(--vs-primary), 1) !important; color:#fafafa;border:none">查询</el-button>
                      </el-form-item>
                    </el-form>
                      <vs-table multiple v-model="selected" pagination max-items="8" :data="showData">
                          <template slot="thead">
                              <vs-th key="user_id" >编号</vs-th>
                              <vs-th key="sample_title">样本标题</vs-th>
                              <vs-th key="sample_url">样本链接</vs-th>
                              <vs-th key="sample_key">作品名称</vs-th>
                              <vs-th key="sample_date">样本发布时间</vs-th>
                              <vs-th key="tort_title">侵权标题</vs-th>
                              <vs-th key="tort_url">侵权链接</vs-th>
                              <vs-th key="tort_duration">侵权时长</vs-th>
                              <vs-th key="tort_check">是否整片</vs-th>
                              <vs-th key="tort_author">侵权发布者</vs-th>
                              <vs-th key="website">侵权发布时间</vs-th>
                              <vs-th key="tort_plays">播放次数</vs-th>
                              <vs-th key="detection_time">爬取时间</vs-th>
                          </template>
                          <template slot-scope="{data}">
                              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                                  <vs-td :data="data[indextr].user_id">
                                      {{data[indextr].user_id}}
                                  </vs-td>
        
                                  <vs-td :data="data[indextr].sample_title">
                                      {{data[indextr].sample_title | ellipsis}}
                                  </vs-td>
              
                                  <vs-td :data="data[indextr].sample_url">
                                       <a :href="data[indextr].sample_url" target="_blank">{{data[indextr].sample_url  | ellipsis}}</a>
                                  </vs-td>
              
                                  <vs-td :data="data[indextr].sample_key">
                                      {{data[indextr].sample_key}}
                                  </vs-td>
                                  <vs-td :data="data[indextr].sample_date">
                                      {{data[indextr].sample_date  | ellipsis}}
                                  </vs-td>
              
              
                                  <vs-td :data="data[indextr].tort_title">
                                      {{data[indextr].tort_title  | ellipsis}}
                                  </vs-td>
              
                                  <vs-td :data="data[indextr].tort_url">
                                       <a :href="data[indextr].tort_url" target="_blank">{{data[indextr].tort_url  | ellipsis}}</a>
                                      <!-- {{data[indextr].tort_url  | ellipsis}} -->
                                  </vs-td>      
                                  <vs-td :data="data[indextr].tort_duration">
                                      {{data[indextr].tort_duration}}
                                  </vs-td>
              
                                  <vs-td :data="data[indextr].tort_check">
                                      {{data[indextr].tort_check}}
                                  </vs-td>
              
                                  <vs-td :data="data[indextr].tort_author">
                                      {{data[indextr].tort_author}}
                                  </vs-td>          
                                  <vs-td :data="data[indextr].tort_putdate">
                                      {{data[indextr].tort_putdate}}
                                  </vs-td>
                                  <vs-td :data="data[indextr].tort_plays">
                                      {{data[indextr].tort_plays}}
                                  </vs-td>
                                  <vs-td :data="data[indextr].detection_time">
                                      {{data[indextr].detection_time}}
                                  </vs-td>
                              </vs-tr>
                          </template>
                      </vs-table>
                  </vx-card>
                </div>
                </tab-content>

                <!-- ----------tab 2 确认数据---------------------- -->
                <tab-content title="确认数据" class="mb-5"  :before-change="validateStep2">
                    <div class="vx-row">
                     <vx-card  :title=titles >
                      <vs-table  max-items="8" pagination :data="selected">
                          <template slot="thead">
                              <vs-th key="user_id" >编号</vs-th>
                              <vs-th key="sample_title">样本标题</vs-th>
                              <vs-th key="sample_url">样本链接</vs-th>
                              <vs-th key="sample_key">作品名称</vs-th>
                              <vs-th key="sample_date">样本发布时间</vs-th>
                              <vs-th key="tort_title">侵权标题</vs-th>
                              <vs-th key="tort_url">侵权链接</vs-th>
                              <vs-th key="tort_duration">侵权时长</vs-th>
                              <vs-th key="tort_check">是否整片</vs-th>
                              <vs-th key="tort_putdate">侵权发布者</vs-th>
                              <vs-th key="website">侵权发布时间</vs-th>
                              <vs-th key="tort_plays">播放次数</vs-th>
                              <vs-th key="detection_time">爬取时间</vs-th>
                          </template>
                          <template slot-scope="{data}">
                              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                                  <vs-td :data="data[indextr].user_id">
                                      {{data[indextr].user_id}}
                                  </vs-td>
        
                                  <vs-td :data="data[indextr].sample_title">
                                      {{data[indextr].sample_title | ellipsis}}
                                  </vs-td>
              
                                  <vs-td :data="data[indextr].sample_url">
                                       <a :href="data[indextr].sample_url" target="_blank">{{data[indextr].sample_url  | ellipsis}}</a>
                                  </vs-td>
              
                                  <vs-td :data="data[indextr].sample_key">
                                      {{data[indextr].sample_key}}
                                  </vs-td>
                                  <vs-td :data="data[indextr].sample_date">
                                      {{data[indextr].sample_date  | ellipsis}}
                                  </vs-td>
              
              
                                  <vs-td :data="data[indextr].tort_title">
                                      {{data[indextr].tort_title  | ellipsis}}
                                  </vs-td>
              
                                  <vs-td :data="data[indextr].tort_url">
                                       <a :href="data[indextr].tort_url" target="_blank">{{data[indextr].tort_url  | ellipsis}}</a>
                                      <!-- {{data[indextr].tort_url  | ellipsis}} -->
                                  </vs-td>      
                                  <vs-td :data="data[indextr].tort_duration">
                                      {{data[indextr].tort_duration}}
                                  </vs-td>
              
                                  <vs-td :data="data[indextr].tort_check">
                                      {{data[indextr].tort_check}}
                                  </vs-td>
              
                                  <vs-td :data="data[indextr].tort_author">
                                      {{data[indextr].tort_author}}
                                  </vs-td>          
                                  <vs-td :data="data[indextr].tort_putdate">
                                      {{data[indextr].tort_putdate}}
                                  </vs-td>
                                  <vs-td :data="data[indextr].tort_plays">
                                      {{data[indextr].tort_plays}}
                                  </vs-td>
                                  <vs-td :data="data[indextr].detection_time">
                                      {{data[indextr].detection_time}}
                                  </vs-td>
                              </vs-tr>
                          </template>
                      </vs-table>
                  </vx-card>                       
                    </div>
                </tab-content>

                <!-- -----------------tab 3 投递-------------- -->
                <tab-content title="投递" class="mb-5">
                    <div class="vx-row">
                <VuePerfectScrollbar class="scroll-area md:px-8 pt-4 px-6" :settings="settings">
                    <div class="fill-row">
                    <div id="div-with-loading" class="vs-con-loading__container">
                    <!-- 最新消息 -->
                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <vx-card class="px-4">
                                <!-- MAIL META ROW -->
                                <div class="vx-row w-full border-b border-l-0 border-r-0 border-t-0 d-theme-border-grey-light border-solid flex justify-between flex items-center">
                                    <div class="vx-col sm:w-4/5 w-full flex flex-wrap items-center mb-2">
                                        <div class="flex flex-col my-2">
                                            <h4 class="mb-1">{{email_info.to}}</h4>
                                            <div class="flex items-center">
                                                <span class="text-sm">{{email_info.from}}</span>

                                                <vs-dropdown vs-custom-content vs-trigger-click class="inline-flex">
                                                    <feather-icon icon="ChevronDownIcon" style="width:1rem; height:1rem" class="cursor-pointer"></feather-icon>

                                                    <vs-dropdown-menu style="z-index: 40001">
                                                        <div class="p-2">
                                                            <p class="text-sm mb-1">From: <span class="font-semibold"> {{email_info.from}} </span></p>
                                                            <p class="text-sm mb-1">To: <span class="font-semibold"> {{email_info.to}} </span></p>
                                                            <p class="text-sm mb-1">Date: <span class="font-semibold"> 2020{{ email_info.Bcc }} </span></p>
                                                        </div>
                                                    </vs-dropdown-menu>
                                                </vs-dropdown>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="vx-col sm:w-1/5 w-full flex sm:flex-col items-center sm:justify-end mb-2">
                                            <span class="flex sm:mr-0 mr-2 self-end whitespace-no-wrap">{{ time | time }}</span>
                                        <span class="flex self-end sm:mt-2 mt-0 whitespace-no-wrap"> 2020{{ email_info.Bcc }}</span>
                                    </div>
                                </div>

                                <!-- 邮件内容 -->
                                <div class="vx-row">
                                    <div class="vx-col w-full">
                                        <div class="mail__content break-words mt-8 mb-4">
                                            {{ email_info.body}}
                                        </div>
                                    </div>
                                </div>

                                <!-- 邮件附件 -->
                                <div class="vx-row">
                                    <div class="vx-col w-full border-b border-l-0 border-r-0 border-t-0 d-theme-border-grey-light border-solid mb-6 flex">
                                        <feather-icon icon="PaperclipIcon" class="mr-2" />
                                        <span class="block py-4">附件</span>
                                    </div>
                                    <div class="flex">
                                        <div class="mail__attachment">
                                            <vs-chip color="primary" class="px-4 py-2 mr-3">
                                                 <a :href="xlsx" target="_blank" style="color:white">附件.xlsx  </a>
                                            </vs-chip>
                                        </div>
                                    </div>

                                </div>
                            </vx-card>
                        </div>
                    </div>
                    </div>
                    </div>
                </VuePerfectScrollbar>
                    </div>
                </tab-content>
            </form-wizard>
        </div>
    </vx-card>
  </div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import Prism from 'vue-prism-component'
import axios from 'axios'
export default {
    components: {
        FormWizard,
        TabContent,
        Prism,
        VuePerfectScrollbar
    },
  data() {
        return {
           backgroundLoading:'primary',
           colorLoading:'#fff',
          titles:'',
          xlsx:'',
          email_info:'',
          showData: [],// 查询数据列表
          settings: {
             maxScrollbarLength: 60,
             wheelSpeed: 0.50,
          },
          message: '<p>Hi John,</p><p><br></p><p>Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.</p><p><br></p><p>Marshmallow halvah brownie cake marzipan ice cream marshmallow. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.</p><p><br></p><p>Regrads,</p><p>Kristeen Sicilia</p>',
          time:'Mon Dec 11 2018 10:55:00 GMT+0000 (GMT)',
            url: 'http://192.168.1.110',
            data_type:undefined,  //已发函 未发函
            project:undefined,
            platformList: [], 
            platform: [],
            dateList:undefined,
            startData:undefined,
            endDate:undefined,
                 loadType: true,
                 disaType: true,
                 selectType: true,
                 downTortType: true,
                 downAllType: true,
          //---------------------------------
            firstName: "",
            lastName: "",
            email: "",  
            city: "new-york",
            proposalTitle: "",
            jobTitle: "",
            textarea: "",
            eventName: "",
            eventLocation: "san-francisco",
            status: "plannning",
//------------------------------------------------
            selected: [],
            'tableList': [
                'vs-th: Component',
                'vs-tr: Component',
                'vs-td: Component',
                'thread: Slot',
                'tbody: Slot',
                'header: Slot'
            ],
            userss: [
                {
                    "id": 1,
                    "sample_title": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                },
                {
                    "id": 2,
                    "sample_title": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "website": "anastasia.net",
                },
                {
                    "id": 3,
                    "sample_title": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "website": "ramiro.info",
                },
                {
                    "id": 4,
                    "sample_title": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    "website": "kale.biz",
                },
                {
                    "id": 5,
                    "sample_title": "Chelsey Dietrich",
                    "username": "Kamren",
                    "email": "Lucio_Hettinger@annie.ca",
                    "website": "demarco.info",
                },
                {
                    "id": 6,
                    "sample_title": "Mrs. Dennis Schulist",
                    "username": "Leopoldo_Corkery",
                    "email": "Karley_Dach@jasper.info",
                    "website": "ola.org",
                },
                {
                    "id": 7,
                    "sample_title": "Kurtis Weissnat",
                    "username": "Elwyn.Skiles",
                    "email": "Telly.Hoeger@billy.biz",
                    "website": "elvis.io",
                },
                {
                    "id": 8,
                    "sample_title": "Nicholas Runolfsdottir V",
                    "username": "Maxime_Nienow",
                    "email": "Sherwood@rosamond.me",
                    "website": "jacynthe.com",
                },
                {
                    "id": 9,
                    "sample_title": "Glenna Reichert",
                    "username": "Delphine",
                    "email": "Chaim_McDermott@dana.io",
                    "website": "conrad.com",
                },
                {
                    "id": 10,
                    "sample_title": "Clementina DuBuque",
                    "username": "Moriah.Stanton",
                    "email": "Rey.Padberg@karina.biz",
                    "website": "ambrose.net",
                },
            ],
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
                platforms: [
                    {
                        value: 'tengxun',
                        label: '腾讯视频',
                    },
                    {
                        value: 'aqiyi',
                        label: '爱奇艺',
                    },
                    {
                        value: 'bilibili',
                        label: 'bilibili',
                    },
                    {
                        value: 'fenghuang',
                        label: '凤凰视频',
                    },
                    {
                        value: 'haokan',
                        label: '好看视频',
                    },
                    {
                        value: 'li',
                        label: '梨视频',
                    },
                    {
                        value: 'sohu',
                        label: '搜狐视频',
                    },
                    {
                        value: 'tudou',
                        label: '土豆',
                    },
                    {
                        value: 'weibo',
                        label: '微博',
                    },
                    {
                        value: 'youku',
                        label: '优酷',
                    },
                    {
                        value: 'wangyi',
                        label: '网易视频',
                    },
                    {
                        value: 'sina',
                        label: '新浪新闻',
                    },
                    {
                        value: 'qutt',
                        label: '趣头条',
                    },
                    {
                        value: 'kuaishou',
                        label: '快手',
                    },
                    {
                        value: 'weishi',
                        label: '微视',
                    },
                    {
                        value: 'yidian',
                        label: '一点资讯',
                    }
                ]
            }],
        }
  },
  created() { },              
  mounted(){},
  filters:{
      ellipsis(value){
        //   console.log(value)
          if(!value) return "";
          if(value.length>8){
               return value.slice(0,8) + "..."
          }
      }   
  },
  watch:{
    selected:function(){
           console.log(this.selected)
    },
    //项目
      project: function () {
          for (let index in this.projects) {
              if (this.projects[index].value == this.project) {
                  this.platformList = this.projects[index].platforms
              }
          }
          this.platform = ''
      },
    //平台
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
  methods: {
      validateStep1() {
        //   console.log(this.selected.lengt)
          if(this.selected.length<1){
               let color='rgba(var(--vs-primary), 1)';
               this.$vs.notify({title:'提示：',text:'请选中要确认的数据',color:color,position:'top-center'})
          }
          else{ 
             this.titles='项目：树木视频'+'---'+'平台：'+this.platform
              return true 
              }
      },
      validateStep2() {
           let array=JSON.stringify(this.selected);
           let formData = new FormData();
           formData.append('items',array);  
           formData.append('project', this.project);            
           formData.append('plat', this.platform);               
           axios.post(this.url+'/complaint_Opera/affirm/', formData, 
           {headers: {"token": localStorage.getItem('token')} }
            ).then(res => {
                 if(res.data.status=='ok'){
                       this.email_info=res.data.email_info
                       console.log(this.email_info)
                       this.xlsx=this.url+'/'+res.data.email_info.file_url
                 }    
              }).catch(error => {
                  console.log(error);
                  this.$message({
                      message: '请求出错，请联系管理员',
                      type: 'error',
                      duration: 2000
                  });
              });  
        //if (flag == "ok"){ return true }
         return true
      },
       //最终
        formSubmitted() {
            this.$vs.loading({
               container: '#div-with-loading',
               scale: 0.6
            })
            let formData = new FormData();
            formData.append('project', this.project);            
            formData.append('plat', this.platform);  
            axios.post(this.url+'/complaint_Opera/sd_send/', formData, 
            {headers: {"token": localStorage.getItem('token')} }
            ).then(res => {
                 if(res.data.status=='ok'){
                     console.log(res.data.status)
                    let color='rgba(var(--vs-primary), 1)';
                    this.$vs.notify({title:'提示：',text:'发送请求成功！！',color:color,position:'top-center'})
                    this.$router.replace({ path:'/dashboard/analytics' });
                 }    
              }).catch(error => {
                  console.log(error);
                  let color='rgba(var(--vs-primary), 1)';
                  this.$vs.notify({title:'提示：',text:'请求出错，请联系管理员！！',color:color,position:'top-center'})                 
              });  
               setTimeout( ()=> {
                   this.$vs.loading.close('#div-with-loading > .con-vs-loading')
              }, 3000);  
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
      axios.get(this.url+'/complaint_Opera/select_data/',
            {
          params: {
               project: this.project,//项目名称
               plat: this.platform, //广电
               data_type: this.data_type ,  //1代表已发函，0代表未发函
               start_time:this.startData,  //起始时间
               end_time:this.endDate,   //截止时间
          }
      },
      { headers: {"token": localStorage.getItem('token')}  }
      ).then(res => {
         console.log(res.data)
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
#div-with-loading{
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 3px 10px 0px rgba(0,0,0,.1)
  }
</style>
