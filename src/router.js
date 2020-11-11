import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
 
        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
                {
                    path: '/',
                    redirect: '/pages/login'
                },
                {
                    path: '/dashboard/analytics',
                    name: 'dashboardAnalytics',
                    component: () => import('./views/DashboardAnalytics.vue'),
                    meta: {
                        requireAuth: true, // 判断是否需要登录
                        rule: 'p0'
                    }
                },
                {
                    path: '/dashboard/ecommerce',
                    name: 'dashboardECommerce',
                    component: () => import('./views/DashboardECommerce.vue'),
                    meta: {
                        requireAuth: true, // 判断是否需要登录
                        rule: 'p0'
                    }
                },


        // =============================================================================
        // Application Routes
        // =============================================================================
                {
                    path: '/apps/todo',
                    name: 'todo',
                    component: () => import('./views/apps/todo/Todo.vue'),
                    meta: {
                        requireAuth: true, // 判断是否需要登录
                        rule: 'p1'
                    }
                },
                {
                    path: '/apps/chat',
                    name: 'chat',
                    component: () => import('./views/apps/chat/Chat.vue'),
                    meta: {
                        requireAuth: true, // 判断是否需要登录
                        rule: 'p1'
                    }
                },
                {
                    path: '/apps/notice',
                    name: 'email',
                    component: () => import('./views/apps/notice/Notice.vue'),
                    meta: {
                        requireAuth: true, // 判断是否需要登录
                        rule: 'p1'
                    }
                },
                {
                    path: '/apps/email',
                    name: 'email',
                    component: () => import('./views/apps/email/Email.vue'),
                    meta: {
                        requireAuth: true, // 判断是否需要登录
                        rule: 'p1'
                    }
                },
                {
                    path: '/apps/personalDataStatistics',
                    name: 'email',
                    component: () => import('./views/apps/personalDataStatistics/PersonalDataStatistics.vue'),
                    meta: {
                        requireAuth: true, // 判断是否需要登录
                        rule: 'p1'
                    }
                },                
                {
                    path: '/apps/calendar/vue-fullcalendar',
                    name: 'calendarFullCalendar',
                    component: () => import('./views/apps/calendar/FullCalendar.vue'),
                    meta: {
                        requireAuth: true, // 判断是否需要登录
                        rule: 'p1'
                    }
                },
                {
                    path: '/apps/calendar/vue-simple-calendar',
                    name: 'calendarSimpleCalendar',
                    component: () => import('./views/apps/calendar/SimpleCalendar.vue'),
                    meta: {
                        requireAuth: true, // 判断是否需要登录
                        rule: 'p1'
                    }
                },
                {
                    path: '/apps/eCommerce/shop',
                    name: 'eCommerceShop',
                    component: () => import('./views/apps/eCommerce/ECommerceShop.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'eCommerce'},
                            { title: 'Shop', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Shop',
                        rule: 'p0'
                    }
                },
                {
                    path: '/apps/eCommerce/wish-list',
                    name: 'eCommerceWishList',
                    component: () => import('./views/apps/eCommerce/ECommerceWishList.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'eCommerce', url:'/apps/eCommerce/shop'},
                            { title: 'Wish List', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Wish List',
                        rule: 'p0'
                    }
                },
                {
                    path: '/apps/eCommerce/checkout',
                    name: 'eCommerceCheckout',
                    component: () => import('./views/apps/eCommerce/ECommerceCheckout.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'eCommerce', url:'/apps/eCommerce/shop'},
                            { title: 'Checkout', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Checkout',
                        rule: 'p0'
                    }
                },
                {
                    path: '/apps/reviewToday',
                    name: 'email',
                    component: () => import('./views/apps/reviewToday/ReviewToday.vue'),
                    meta: {
                        requireAuth: true, // 判断是否需要登录
                        rule: 'p1'
                    }
                }, 
        // =============================================================================
        // 内部业务
        // =============================================================================
        //数据处理
        { 
            path: '/InternalBusiness/TextRuleFiltering',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/DataProcessing/TextRuleFiltering.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '文字规则筛选',
                rule: 'p1'
            } 
        }, 
        { 
            path: '/InternalBusiness/VideoContentFiltering',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/DataProcessing/VideoContentFiltering.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '视频内容筛选',
                rule: 'p1'
            } 
        },           
        //------------------------------------        
        
        { 
            path: '/InternalBusiness/Shumu',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/Shumu/shumu.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '树木视频核实',
                rule: 'p1'
            },
        },
        {
            path: '/InternalBusiness/Guangdian',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/Guangdian/guangdian.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '广电数据核实',
                rule: 'p1'
            },
        }, 
        {
            path: '/InternalBusiness/Tuwen',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/Tuwen/tuwen.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '树木图文核实',
                rule: 'p1'
            },
        },  
        //平台投诉
        {
            path: '/InternalBusiness/TreeVideo',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/PlatformComplaints/TreeVideo.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '树木视频',
                rule: 'p3'
            },
        },
        {
            path: '/InternalBusiness/TreePictureText',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/PlatformComplaints/TreePictureText.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '树木图文',
                rule: 'p3'
            },
        }, 
        {
            path: '/InternalBusiness/RadioTv',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/PlatformComplaints/RadioTv.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '广电',
                rule: 'p3'
            },
        },
        {
            path: '/InternalBusiness/ComplaintRecordView',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/PlatformComplaints/ComplaintRecordView.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '投诉记录查看',
                rule: 'p3'
            },
        },       
        // {
        //     path: '/InternalBusiness/DataView',
        //     name: 'DataProcessing',
        //     component: () => import('@/views/InternalBusiness/DataManage/dataView.vue'),
        //     meta: {
        //         breadcrumb: [
        //             { title: 'Home', url: '/' },
        //             { title: 'Data List'},
        //             { title: 'Data View', active: true },
        //         ],
        //         requireAuth: true, // 判断是否需要登录
        //         pageTitle: '数据查看',
        //         rule: 'p0'
        //     },
        // },  
        // {
        //     path: '/InternalBusiness/PlatformDistribute',
        //     name: 'DataProcessing',
        //     component: () => import('@/views/InternalBusiness/DataManage/platformDistribute.vue'),
        //     meta: {
        //         breadcrumb: [
        //             { title: 'Home', url: '/' },
        //             { title: 'Data List'},
        //             { title: 'Data View', active: true },
        //         ],
        //         requireAuth: true, // 判断是否需要登录
        //         pageTitle: '平台分发',
        //         rule: 'p0'
        //     },
        // }, 
//------------------------------------------
        {
            path: '/InternalBusiness/DataView',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/TaskAllocation/dataView.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data View', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '数据查看',
                rule: 'p4'
            },
        },  
        {
            path: '/InternalBusiness/PlatformDistribute',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/TaskAllocation/platformDistribute.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data View', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '平台分发',
                rule: 'p4'
            },
        },
        //数据管理
        {
            path: '/InternalBusiness/DataValidation',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/DataManage/DataValidation.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '数据检验',
                rule: 'p2'
            },
        },
        {
            path: '/InternalBusiness/SampleDataManage',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/DataManage/SampleDataManage.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '样本数据管理',
                rule: 'p2'
            },
        },
        {
            path: '/InternalBusiness/InfringeDataManage',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/DataManage/InfringeDataManage.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '侵权数据管理',
                rule: 'p2'
            },
        },
        {
            path: '/InternalBusiness/InfrAuthorsManage',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/DataManage/InfrAuthorsManage.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '侵权作者管理',
                rule: 'p2'
            },
        },        
        //--------------  end  ----------------
        {
            path: '/InternalBusiness/PerforAppraisal',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/PerforAppraisal/perforAppraisal.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data View', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '绩效考核',
                rule: 'p4'
            },
        }, 
    //  ------------------业务目标制定------------------
        {
            path: '/InternalBusiness/MonthlyTarget',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/BusObjectSetting/monthlyTarget.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data View', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '月目标',
                rule: 'p5'
            },

        }, 
        {
            path: '/InternalBusiness/WeeklyGoal',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/BusObjectSetting/weeklyGoal.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data View', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '周目标',
                rule: 'p5'
            },
        },
        {
            path: '/InternalBusiness/DailyTarget',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/BusObjectSetting/dailyTarget.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data View', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '日目标',
                rule: 'p5'
            },
        },  
        {
            path: '/InternalBusiness/CrawlingTaskManag',
            name: 'DataProcessing',
            component: () => import('@/views/InternalBusiness/CrawlingTaskManag/crawlingTaskManag.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data View', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '爬取任务管理',
                rule: 'p3'
            },
        }, 
        // 数据可视化
        // =============================================================================
        { 
            path: '/DataVisualization/RealtimeDataReport',
            name: 'DataProcessing',
            component: () => import('@/views/DataVisualization/RealtimeDataReport.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '实时数据报表',
                rule: 'p3'
            },
        },
        { 
            path: '/DataVisualization/MonthlyReport',
            name: 'DataProcessing',
            component: () => import('@/views/DataVisualization/MonthlyReport.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '日/周/月报表',
                rule: 'p3'
            },
        },
        // =============================================================================
        // 业务培训
        // =============================================================================
        { 
            path: '/BusinessTraining/Monitor',
            name: 'DataProcessing',
            component: () => import('@/views/BusinessTraining/Monitor.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '监测',
                rule: 'p4'
            },
        },
        { 
            path: '/BusinessTraining/Complaint',
            name: 'DataProcessing',
            component: () => import('@/views/BusinessTraining/Complaint.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '投诉',
                rule: 'p4'
            },
        },
        { 
            path: '/BusinessTraining/ObtainEvidence',
            name: 'DataProcessing',
            component: () => import('@/views/BusinessTraining/ObtainEvidence.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '取证',
                rule: 'p4'
            },
        },
        // =============================================================================
        // 预警系统
        // =============================================================================
        { 
            path: '/EarlyWarningSystem/DataWarning',
            name: 'DataProcessing',
            component: () => import('@/views/EarlyWarningSystem/DataWarning.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '数据预警',
                rule: 'p4'
            },
        },
        { 
            path: '/BusinessTraining/BusinessWarning',
            name: 'DataProcessing',
            component: () => import('@/views/EarlyWarningSystem/BusinessWarning.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '业务预警',
                rule: 'p4'
            },
        },
        { 
            path: '/BusinessTraining/SystemWarning',
            name: 'DataProcessing',
            component: () => import('@/views/EarlyWarningSystem/SystemWarning.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '系统预警',
                rule: 'p4'
            },
        },
        // =============================================================================
        // 系统设置
        // =============================================================================
        { 
            path: '/SystemSettings/CommonSettings',
            name: 'DataProcessing',
            component: () => import('@/views/SystemSettings/CommonSettings.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '常用设置',
                rule: 'p1'
            },
        },
        { 
            path: '/SystemSettings/AboutUs',
            name: 'DataProcessing',
            component: () => import('@/views/SystemSettings/AboutUs.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '关于我们',
                rule: 'p1'
            },
        },
        // =============================================================================
        // 信息管理
        // =============================================================================
        { 
            path: '/InforManage/StaffInforManag',
            name: 'DataProcessing',
            component: () => import('@/views/InforManage/StaffInforManag.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '员工信息管理',
                rule: 'p56'
            },
        },
        {
            path: '/InforManage/CustomerInforManag',
            name: 'DataProcessing',
            component: () => import('@/views/InforManage/CustomerInforManag.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '客户信息管理',
                rule: 'p56'
            },
        }, 
        {
            path: '/InforManage/OrganizationChart',
            name: 'DataProcessing',
            component: () => import('@/views/InforManage/OrganizationChart.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '组织结构图',
                rule: 'p56'
            },
        }, 
        {
            path: '/InforManage/RoleLevelManag',
            name: 'DataProcessing',
            component: () => import('@/views/InforManage/RoleLevelManag.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '角色等级管理',
                rule: 'p6'
            },
        }, 
//-----------------------------------------
        // 对外业务   字节跳动
        // =============================================================================
        { 
            path: '/ByteBounce/TaskManagement',
            name: 'DataProcessing',
            component: () => import('@/views/ByteBounce/TaskManagement.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '任务管理',
                rule: 'p4'
            },
        },
        {
            path: '/ByteBounce/DataSynchronization',
            name: 'DataProcessing',
            component: () => import('@/views/ByteBounce/DataSynchronization.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '数据同步',
                rule: 'p4'
            },
        }, 
        {
            path: '/ByteBounce/DataQuery',
            name: 'DataProcessing',
            component: () => import('@/views/ByteBounce/DataQuery.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '数据查询',
                rule: 'p4'
            },
        }, 
        {
            path: '/ByteBounce/SendingLetters',
            name: 'DataProcessing',
            component: () => import('@/views/ByteBounce/SendingLetters.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Data List'},
                    { title: 'Data Processing', active: true },
                ],
                requireAuth: true, // 判断是否需要登录
                pageTitle: '协助发函',
                rule: 'p4'
            },
        }, 
//-----------------------------------------
        // {
        //     path: '/ui-elements/data-list/thumb-view',
        //     name: 'dataListThumbView',
        //     component: () => import('@/views/ui-elements/data-list/thumb-view/DataListThumbView.vue'),
        //     meta: {
        //         breadcrumb: [
        //             { title: 'Home', url: '/' },
        //             { title: 'Data List'},
        //             { title: 'Thumb View', active: true },
        //         ],
        //         pageTitle: 'Thumb View',
        //         rule: 'p0'
        //     },
        // },
        // {
        //     path: '/ui-elements/grid/vuesax',
        //     name: 'gridVuesax',
        //     component: () => import('@/views/ui-elements/grid/vuesax/GridVuesax.vue'),
        //     meta: {
        //         breadcrumb: [
        //             { title: 'Home', url: '/' },
        //             { title: 'Grid'},
        //             { title: 'Vuesax', active: true },
        //         ],
        //         pageTitle: 'Grid',
        //         rule: 'p0'
        //     },
        // },
        // =============================================================================        
        // UI ELEMENTS
        // =============================================================================
                {
                    path: '/ui-elements/data-list/list-view',
                    name: 'dataListListView',
                    component: () => import('@/views/ui-elements/data-list/list-view/DataListListView.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Data List'},
                            { title: 'List View', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'List View',
                        rule: 'p0'
                    },
                },
                {
                    path: '/ui-elements/data-list/thumb-view',
                    name: 'dataListThumbView',
                    component: () => import('@/views/ui-elements/data-list/thumb-view/DataListThumbView.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Data List'},
                            { title: 'Thumb View', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Thumb View',
                        rule: 'p0'
                    },
                },
                {
                    path: '/ui-elements/grid/vuesax',
                    name: 'gridVuesax',
                    component: () => import('@/views/ui-elements/grid/vuesax/GridVuesax.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Grid'},
                            { title: 'Vuesax', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Grid',
                        rule: 'p0'
                    },
                },
                {
                    path: '/ui-elements/grid/tailwind',
                    name: 'gridTailwind',
                    component: () => import('@/views/ui-elements/grid/tailwind/GridTailwind.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Grid'},
                            { title: 'Tailwind', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Tailwind Grid',
                        rule: 'p0'
                    },
                },
                {
                    path: '/ui-elements/colors',
                    name: 'colors',
                    component: () => import('./views/ui-elements/colors/Colors.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Colors', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Colors',
                        rule: 'p0'
                    },
                },
                {
                    path: '/ui-elements/card/basic',
                    name: 'basicCards',
                    component: () => import('./views/ui-elements/card/CardBasic.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Card' },
                            { title: 'Basic Cards', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Basic Cards',
                        rule: 'p0'
                    },
                },
                {
                    path: '/ui-elements/card/statistics',
                    name: 'statisticsCards',
                    component: () => import('./views/ui-elements/card/CardStatistics.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Card' },
                            { title: 'Statistics Cards', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Statistics Card',
                        rule: 'p0'
                    },
                },
                {
                    path: '/ui-elements/card/analytics',
                    name: 'analyticsCards',
                    component: () => import('./views/ui-elements/card/CardAnalytics.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Card' },
                            { title: 'Analytics Card', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Analytics Card',
                        rule: 'p0'
                    },
                },
                {
                    path: '/ui-elements/card/card-actions',
                    name: 'cardActions',
                    component: () => import('./views/ui-elements/card/CardActions.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Card' },
                            { title: 'Card Actions', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Card Actions',
                        rule: 'p0'
                    },
                },
                {
                    path: '/ui-elements/card/card-colors',
                    name: 'cardColors',
                    component: () => import('./views/ui-elements/card/CardColors.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Card' },
                            { title: 'Card Colors', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Card Colors',
                        rule: 'p0'
                    },
                },
                {
                    path: '/ui-elements/table',
                    name: 'table',
                    component: () => import('./views/ui-elements/table/Table.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Table', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Table',
                        rule: 'p0'
                    },
                },
                {
                    path: '/ui-elements/ag-grid-table',
                    name: 'agGridTable',
                    component: () => import('./views/ui-elements/ag-grid-table/AgGridTable.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'agGrid Table', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'agGrid Table',
                        rule: 'p0'
                    },
                },

        // =============================================================================
        // COMPONENT ROUTES
        // =============================================================================
                {
                    path: '/components/alert',
                    name: 'componentAlert',
                    component: () => import('@/views/components/vuesax/alert/Alert.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Alert', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Alert',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/avatar',
                    name: 'componentAvatar',
                    component: () => import('@/views/components/vuesax/avatar/Avatar.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Avatar', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Avatar',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/breadcrumb',
                    name: 'componentBreadcrumb',
                    component: () => import('@/views/components/vuesax/breadcrumb/Breadcrumb.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Breadcrumb', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Breadcrumb',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/button',
                    name: 'componentButton',
                    component: () => import('@/views/components/vuesax/button/Button.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Button', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Button',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/button-group',
                    name: 'componentButtonGroup',
                    component: () => import('@/views/components/vuesax/button-group/ButtonGroup.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Button Group', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Button Group',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/chip',
                    name: 'componentChip',
                    component: () => import('@/views/components/vuesax/chip/Chip.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Chip', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Chip',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/collapse',
                    name: 'componentCollapse',
                    component: () => import('@/views/components/vuesax/collapse/Collapse.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Collapse', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Collapse',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/dialogs',
                    name: 'componentDialog',
                    component: () => import('@/views/components/vuesax/dialogs/Dialogs.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Dialogs', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Dialogs',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/divider',
                    name: 'componentDivider',
                    component: () => import('@/views/components/vuesax/divider/Divider.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Divider', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Divider',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/dropdown',
                    name: 'componentDropDown',
                    component: () => import('@/views/components/vuesax/dropdown/Dropdown.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Dropdown', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Dropdown',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/list',
                    name: 'componentList',
                    component: () => import('@/views/components/vuesax/list/List.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'List', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'List',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/loading',
                    name: 'componentLoading',
                    component: () => import('@/views/components/vuesax/loading/Loading.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Loading', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Loading',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/navbar',
                    name: 'componentNavbar',
                    component: () => import('@/views/components/vuesax/navbar/Navbar.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Navbar', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Navbar',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/notifications',
                    name: 'componentNotifications',
                    component: () => import('@/views/components/vuesax/notifications/Notifications.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Notifications', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Notifications',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/pagination',
                    name: 'componentPagination',
                    component: () => import('@/views/components/vuesax/pagination/Pagination.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Pagination', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Pagination',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/popup',
                    name: 'componentPopup',
                    component: () => import('@/views/components/vuesax/popup/Popup.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Popup', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Popup',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/progress',
                    name: 'componentProgress',
                    component: () => import('@/views/components/vuesax/progress/Progress.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Progress', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Progress',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/sidebar',
                    name: 'componentSidebar',
                    component: () => import('@/views/components/vuesax/sidebar/Sidebar.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Sidebar', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Sidebar',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/slider',
                    name: 'componentSlider',
                    component: () => import('@/views/components/vuesax/slider/Slider.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Slider', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Slider',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/tabs',
                    name: 'componentTabs',
                    component: () => import('@/views/components/vuesax/tabs/Tabs.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Tabs', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Tabs',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/tooltip',
                    name: 'componentTooltip',
                    component: () => import('@/views/components/vuesax/tooltip/Tooltip.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Tooltip', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Tooltip',
                        rule: 'p0'
                    },
                },
                {
                    path: '/components/upload',
                    name: 'componentUpload',
                    component: () => import('@/views/components/vuesax/upload/Upload.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Components' },
                            { title: 'Upload', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Upload',
                        rule: 'p0'
                    },
                },


        // =============================================================================
        // FORMS
        // =============================================================================
            // =============================================================================
            // FORM ELEMENTS
            // =============================================================================
                {
                    path: '/forms/form-elements/select',
                    name: 'formElementSelect',
                    component: () => import('./views/forms/form-elements/select/Select.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Form Elements' },
                            { title: 'Select', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Select',
                        rule: 'p0'
                    },
                },
                {
                    path: '/forms/form-elements/switch',
                    name: 'formElementSwitch',
                    component: () => import('./views/forms/form-elements/switch/Switch.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Form Elements' },
                            { title: 'Switch', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Switch',
                        rule: 'p0'
                    },
                },
                {
                    path: '/forms/form-elements/checkbox',
                    name: 'formElementCheckbox',
                    component: () => import('./views/forms/form-elements/checkbox/Checkbox.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Form Elements' },
                            { title: 'Checkbox', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Checkbox',
                        rule: 'p0'
                    },
                },
                {
                    path: '/forms/form-elements/radio',
                    name: 'formElementRadio',
                    component: () => import('./views/forms/form-elements/radio/Radio.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Form Elements' },
                            { title: 'Radio', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Radio',
                        rule: 'p0'
                    },
                },
                {
                    path: '/forms/form-elements/input',
                    name: 'formElementInput',
                    component: () => import('./views/forms/form-elements/input/Input.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Form Elements' },
                            { title: 'Input', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Input',
                        rule: 'p0'
                    },
                },
                {
                    path: '/forms/form-elements/number-input',
                    name: 'formElementNumberInput',
                    component: () => import('./views/forms/form-elements/number-input/NumberInput.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Form Elements' },
                            { title: 'Number Input', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Number Input',
                        rule: 'p0'
                    },
                },
                {
                    path: '/forms/form-elements/textarea',
                    name: 'formElementTextarea',
                    component: () => import('./views/forms/form-elements/textarea/Textarea.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Form Elements' },
                            { title: 'Textarea', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Textarea',
                        rule: 'p0'
                    },
                },
        // -------------------------------------------------------------------------------------------------------------------------------------------
                {
                    path: '/forms/form-layouts',
                    name: 'formsFormLayouts',
                    component: () => import('@/views/forms/FormLayouts.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Forms' },
                            { title: 'Form Layouts', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Form Layouts',
                        rule: 'p0'
                    },
                },
                {
                    path: '/forms/form-wizard',
                    name: 'extraComponentFormWizard',
                    component: () => import('@/views/forms/form-wizard/FormWizard.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extra Components' },
                            { title: 'Form Wizard', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Form Wizard',
                        rule: 'p0'
                    },
                },
                {
                    path: '/forms/form-validation',
                    name: 'extraComponentFormValidation',
                    component: () => import('@/views/forms/form-validation/FormValidation.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extra Components' },
                            { title: 'Form Validation', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Form Validation',
                        rule: 'p0'
                    },
                },
                {
                  path: '/forms/form-input-group',
                  name: 'extraComponentFormInputGroup',
                  component: () => import('@/views/forms/form-input-group/FormInputGroup.vue'),
                  meta: {
                      breadcrumb: [
                          { title: 'Home', url: '/' },
                          { title: 'Extra Components' },
                          { title: 'Form Input Group', active: true },
                      ],
                      requireAuth: true, // 判断是否需要登录
                      pageTitle: 'Form Input Group',
                      rule: 'p0'
                  },
                },

        // =============================================================================
        // Pages Routes
        // =============================================================================
                {
                    path: '/pages/profile',
                    name: 'pageProfile',
                    component: () => import('@/views/pages/Profile.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'Profile', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Profile',
                        rule: 'p0'
                    },
                },
                {
                    path: '/pages/faq',
                    name: 'pageFAQ',
                    component: () => import('@/views/pages/Faq.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'FAQ', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'FAQ',
                        rule: 'p0'
                    },
                },
                {
                    path: '/pages/knowledge-base',
                    name: 'pageKnowledgeBase',
                    component: () => import('@/views/pages/KnowledgeBase.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'KnowledgeBase', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'KnowledgeBase',
                        rule: 'p0'
                    },
                },
                {
                    path: '/pages/knowledge-base/category',
                    name: 'pageKnowledgeBaseCategory',
                    component: () => import('@/views/pages/KnowledgeBaseCategory.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'KnowledgeBase', url: '/pages/knowledge-base' },
                            { title: 'Category', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        rule: 'p0'
                    },
                },
                {
                    path: '/pages/knowledge-base/category/question',
                    name: 'pageKnowledgeBaseCategoryQuestion',
                    component: () => import('@/views/pages/KnowledgeBaseCategoryQuestion.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'KnowledgeBase', url: '/pages/knowledge-base' },
                            { title: 'Category', url: '/pages/knowledge-base/category' },
                            { title: 'Question', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        rule: 'p0'
                    },
                },
                {
                    path: '/pages/search',
                    name: 'pageSearch',
                    component: () => import('@/views/pages/Search.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'Search', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Search',
                        rule: 'p0'
                    },
                },
                {
                    path: '/pages/invoice',
                    name: 'pageInvoice',
                    component: () => import('@/views/pages/Invoice.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'Invoice', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Invoice',
                        rule: 'p0'
                    },
                },

        // =============================================================================
        // CHARTS & MAPS
        // =============================================================================
                {
                    path: '/charts-and-maps/charts/apex-charts',
                    name: 'extraComponentChartsApexCharts',
                    component: () => import('@/views/charts-and-maps/charts/apex-charts/ApexCharts.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Charts & Maps' },
                            { title: 'Apex Charts', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Apex Charts',
                        rule: 'p0'
                    },
                },
                {
                    path: '/charts-and-maps/charts/chartjs',
                    name: 'extraComponentChartsChartjs',
                    component: () => import('@/views/charts-and-maps/charts/chartjs/Chartjs.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Charts & Maps' },
                            { title: 'chartjs', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'chartjs',
                        rule: 'p0'
                    },
                },
                {
                    path: '/charts-and-maps/charts/echarts',
                    name: 'extraComponentChartsEcharts',
                    component: () => import('@/views/charts-and-maps/charts/echarts/Echarts.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Charts & Maps' },
                            { title: 'echarts', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'echarts',
                        rule: 'p0'
                    },
                },
                {
                    path: '/charts-and-maps/maps/google-map',
                    name: 'extraComponentMapsGoogleMap',
                    component: () => import('@/views/charts-and-maps/maps/google-map/GoogleMap.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Charts & Maps' },
                            { title: 'Google Map', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Google Map',
                        rule: 'p0'
                    },
                },



        // =============================================================================
        // EXTENSIONS
        // =============================================================================
                {
                    path: '/extensions/select',
                    name: 'extraComponentSelect',
                    component: () => import('@/views/components/extra-components/select/Select.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extra Components' },
                            { title: 'Select', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Select',
                        rule: 'p0'
                    },
                },
                {
                    path: '/extensions/quill-editor',
                    name: 'extraComponentQuillEditor',
                    component: () => import('@/views/components/extra-components/quill-editor/QuillEditor.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extra Components' },
                            { title: 'Quill Editor', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Quill Editor',
                        rule: 'p0'
                    },
                },
                {
                    path: '/extensions/drag-and-drop',
                    name: 'extraComponentDragAndDrop',
                    component: () => import('@/views/components/extra-components/drag-and-drop/DragAndDrop.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extra Components' },
                            { title: 'Drag & Drop', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Drag & Drop',
                        rule: 'p0'
                    },
                },
                {
                    path: '/extensions/datepicker',
                    name: 'extraComponentDatepicker',
                    component: () => import('@/views/components/extra-components/datepicker/Datepicker.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extra Components' },
                            { title: 'Datepicker', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Datepicker',
                        rule: 'p0'
                    },
                },
                {
                    path: '/extensions/datetime-picker',
                    name: 'extraComponentDatetimePicker',
                    component: () => import('@/views/components/extra-components/datetime-picker/DatetimePicker.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extra Components' },
                            { title: 'Datetime Picker', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Datetime Picker',
                        rule: 'p0'
                    },
                },
                { 
                    path: '/extensions/access-control-editor',
                    name: 'extraComponentAccessControlEditor',
                    component: () => import('@/views/components/extra-components/access-control/AccessControlEditor.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extensions' },
                            { title: 'Access Control' },
                            { title: 'Editor View', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Editor View',
                        rule: 'p0'
                    },
                },
                {
                    path: '/extensions/access-control-admin',
                    name: 'extraComponentAccessControlOnlyAdmin',
                    component: () => import('@/views/components/extra-components/access-control/AccessControlAdmin.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extensions' },
                            { title: 'Access Control' },
                            { title: 'Admin View', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Admin View',
                        rule: 'p0'
                    },
                },
                {
                    path: '/extensions/i18n',
                    name: 'extraComponentI18n',
                    component: () => import('@/views/components/extra-components/I18n.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extensions' },
                            { title: 'I18n', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'I18n',
                        rule: 'p0'
                    },
                },
                {
                    path: '/extensions/carousel',
                    name: 'extraComponentCarousel',
                    component: () => import('@/views/components/extra-components/carousel/Carousel.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extensions' },
                            { title: 'Carousel', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Carousel',
                        rule: 'p0'
                    },
                },
                {
                    path: '/extensions/clipboard',
                    name: 'extraComponentClipboard',
                    component: () => import('@/views/components/extra-components/clipboard/Clipboard.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extensions' },
                            { title: 'Clipboard', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Clipboard',
                        rule: 'p0'
                    },
                },
                {
                    path: '/extensions/context-menu',
                    name: 'extraComponentContextMenu',
                    component: () => import('@/views/components/extra-components/context-menu/ContextMenu.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extensions' },
                            { title: 'Context Menu', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Context Menu',
                        rule: 'p0'
                    },
                },
                {
                    path: '/extensions/star-ratings',
                    name: 'extraComponentStarRatings',
                    component: () => import('@/views/components/extra-components/star-ratings/StarRatings.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extensions' },
                            { title: 'Star Ratings', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Star Ratings',
                        rule: 'p0'
                    },
                },
                {
                    path: '/extensions/autocomplete',
                    name: 'extraComponentAutocomplete',
                    component: () => import('@/views/components/extra-components/autocomplete/Autocomplete.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extensions' },
                            { title: 'Autocomplete', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Autocomplete',
                        rule: 'p0'
                    },
                },
                {
                    path: '/extensions/tree',
                    name: 'extraComponentTree',
                    component: () => import('@/views/components/extra-components/tree/Tree.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Extensions' },
                            { title: 'Tree', active: true },
                        ],
                        requireAuth: true, // 判断是否需要登录
                        pageTitle: 'Tree',
                        rule: 'p0'
                    },
                },
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
                {
                    path: '/callback',
                    name: 'authCallback',
                    component: () => import('@/views/Callback.vue'),
                    meta: {
                        rule: 'p0'
                    }
                },
                {
                    path: '/pages/login',
                    name: 'pageLogin',
                    component: () => import('@/views/pages/Login.vue'),
                    meta: {
                        rule: 'p0'
                    }
                },
                {
                    path: '/pages/register',
                    name: 'pageRegister',
                    component: () => import('@/views/pages/Register.vue'),
                    meta: {
                        rule: 'p0'
                    }
                },
                {
                    path: '/pages/forgot-password',
                    name: 'pageForgotPassword',
                    component: () => import('@/views/pages/ForgotPassword.vue'),
                    meta: {
                        rule: 'p0'
                    }
                },
                {
                    path: '/pages/reset-password',
                    name: 'pageResetPassword',
                    component: () => import('@/views/pages/ResetPassword.vue'),
                    meta: {
                        rule: 'p0'
                    }
                },
                {
                    path: '/pages/lock-screen',
                    name: 'pageLockScreen',
                    component: () => import('@/views/pages/LockScreen.vue'),
                    meta: {
                        rule: 'p0'
                    }
                },
                {
                    path: '/pages/comingsoon',
                    name: 'pageComingSoon',
                    component: () => import('@/views/pages/ComingSoon.vue'),
                    meta: {
                        rule: 'p0'
                    }
                },
                {
                    path: '/pages/error-404',
                    name: 'pageError404',
                    component: () => import('@/views/pages/Error404.vue'),
                    meta: {
                        rule: 'p0'
                    }
                },
                {
                    path: '/pages/error-500',
                    name: 'pageError500',
                    component: () => import('@/views/pages/Error500.vue'),
                    meta: {
                        rule: 'p0'
                    }
                },
                {
                    path: '/pages/not-authorized',
                    name: 'pageNotAuthorized',
                    component: () => import('@/views/pages/NotAuthorized.vue'),
                    meta: {
                        rule: 'p0'
                    }
                },
                {
                    path: '/pages/maintenance',
                    name: 'pageMaintenance',
                    component: () => import('@/views/pages/Maintenance.vue'),
                    meta: {
                        rule: 'p0'
                    }
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限
    //  console.log('需要登录');
     if (sessionStorage.token) { // 判断当前的token是否存在 ； 登录存入的token
      next();
     }
     else {
      next({
       path: '/',
       query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
     }
    }
    else {
     next();
    }
   });

export default router
