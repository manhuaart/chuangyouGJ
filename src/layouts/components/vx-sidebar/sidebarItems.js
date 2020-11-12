export default [
  {
    url: '/dashboard/analytics',
    name: "Dashboard",
    slug: "dashboard",
    tagColor: "warning",
    icon: "HomeIcon",
    i18n: "Dashboard",
    levelCy:1, 
    levelCy0:'p0' ,
  },
  {
    header: "Apps",
    i18n: "Apps",
    levelCy:1, //日常应用
    levelCy0:'p0'   
              
  },
  {
    url: "/apps/notice",
    name: "Notice",
    slug: "notice",
    icon: "AtSignIcon",
    i18n: "Notice",
  },
  {
    url: "/apps/email",
    name: "Email",
    slug: "email",
    icon: "MailIcon",
    i18n: "Email",
  },
  {
    url: "/apps/personalDataStatistics",
    name: "PersonalDataStatistics",
    slug: "personalDataStatistics",
    icon: "BarChart2Icon",
    i18n: "PersonalDataStatistics",
  },  
  // {
  //   url: "/apps/chat",   Review today
  //   name: "Chat",
  //   slug: "chat",
  //   icon: "MessageSquareIcon",
  //   i18n: "Chat",
  // },
  {
    url: "/apps/todo",
    name: "Todo",
    slug: "todo",
    icon: "CheckSquareIcon",
    i18n: "Todo",
  },
  {
    url: "/apps/calendar/vue-simple-calendar",
    // url: null,
    name: "Calendar",
    slug: "calendar",
    icon: "CalendarIcon",
    // tag: "new",
    tagColor: "success",
    i18n: "Calendar",
    // submenu: [
    //   {
    //     url: '/apps/calendar/vue-simple-calendar',
    //     name: "Simple Calendar",
    //     slug: "calendarSimpleCalendar",
    //     i18n: "SimpleCalendar",
    //   },
    //   {
    //     url: '/apps/calendar/vue-fullcalendar',
    //     name: "Full Calendar",
    //     slug: "calendarFullCalendar",
    //     i18n: "FullCalendar",
    //   }
    // ]
  },
  {
    url: "/apps/reviewToday",  
    name: "Chat",
    slug: "chat",
    icon: "AirplayIcon", 
    i18n: "ReviewToday",
  },
  // {
  //   url: null,
  //   name: "eCommerce",
  //   slug: "eCommerce",
  //   icon: "ShoppingCartIcon",
  //   i18n: "eCommerce",
  //   submenu: [
  //     {
  //       url: '/apps/eCommerce/shop',
  //       name: "Shop",
  //       slug: "eCommerceShop",
  //       i18n: "Shop",
  //     },
  //     {
  //         url: '/apps/eCommerce/wish-list',
  //         name: "Wish List",
  //         slug: "eCommerceWishList",
  //         i18n: "WishList",
  //     },
  //     {
  //       url: '/apps/eCommerce/checkout',
  //       name: "Checkout",
  //       slug: "eCommerceCheckout",
  //       i18n: "Checkout",
  //     },
  //   ]
  // },
  //------------内部业务------------
  {
    header: "内部业务",
    i18n: "MMMM",
    levelCy:1, //内部业务
    levelCy0:'p0'     
  },
  //数据处理
  {
    url: null,
    name: "Data List",
    slug: "dataList",
    tagColor: "primary",
    icon: "ActivityIcon",
    i18n: "DataProcessing",
    levelCy:1, //
    levelCy0:'p0' ,       
    submenu: [
      {
        url: '/InternalBusiness/TextRuleFiltering',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "TextRuleFiltering",
      },
      {
        url: '/InternalBusiness/VideoContentFiltering',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "VideoContentFiltering",
      },      
    ]
  },
  //任务分配
  {
    url: null,
    name: "Data List",
    slug: "dataList",
    tagColor: "primary",
    icon: "ClipboardIcon",
    i18n: "DaskAllocation",
    levelCy:4, //
    levelCy0:'p0' ,          
    submenu: [
      {
        url: '/InternalBusiness/DataView',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "dataView",
      },
      {
        url: '/InternalBusiness/PlatformDistribute',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "PlatformDistribute",
      },      
    ]
  },
  //数据复核
  {
    url: null,
    name: "Data List",
    slug: "dataList",
    tagColor: "primary",
    icon: "GridIcon",
    i18n: "ManualVerification",
    levelCy:1, //
    levelCy0:'p0' ,          
    submenu: [
      {
        url: '/InternalBusiness/Shumu', 
        name: "Data Processing",
        slug: "DataProcessing",
        i18n: "ListViewMMMM",
      },
      {
        url: '/InternalBusiness/Guangdian',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "LMMMMMMM",
      },
      {
        url: '/InternalBusiness/Tuwen',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "LMMMMMMMNNNNN",
      },
    ]
  },
  //平台投诉
  {
    url: null,
    name: "Data List",
    slug: "dataList",
    // tag: "new",
    tagColor: "primary",
    icon: "AlertOctagonIcon",
    i18n: "PlatformComplaints",
    levelCy:3, //
    levelCy0:'p0' ,          
    submenu: [
      {
        url: '/InternalBusiness/TreeVideo',
        name: "List View",
        slug: "dataListListView",
        i18n: "TreeVideo",
      },
      {
        url: '/InternalBusiness/TreePictureText',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "TreePictureText",
      },
      {
        url: '/InternalBusiness/RadioTv',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "RadioTv",
      },
      {
        url: '/InternalBusiness/ComplaintRecordView',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "ComplaintRecordView",
      },      
    ]
  },
  //数据管理
  {
    url: null,
    name: "Data List",
    slug: "dataList",
    // tag: "new",
    tagColor: "primary",
    icon: "FolderIcon",
    i18n: "DataManage",
    levelCy:2, //
    levelCy0:'p0' ,          
    submenu: [
      {
        url: '/InternalBusiness/DataValidation',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "DataValidation",
      },
      {
        url: '/InternalBusiness/SampleDataManage',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "SampleDataManage",
      },
      {
        url: '/InternalBusiness/InfringeDataManage',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "InfringeDataManage",
      },   
      {
        url: '/InternalBusiness/InfrAuthorsManage',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "InfrAuthorsManage",
      },                 
    ]
  },  
  //绩效考核
  {
    url: '/InternalBusiness/PerforAppraisal',
    name: "Data List",
    slug: "dataList",
    tagColor: "primary",
    icon: "FileTextIcon",
    i18n: "PerformanceAppraisal",
  },  
  //业务目标制定
  {
    url: null,
    name: "Data List",
    slug: "dataList",
    tagColor: "primary",
    icon: "TargetIcon",
    i18n: "BusObjectSetting",
    levelCy:5, //
    levelCy0:'p0' ,              
    submenu: [
      {
        url: '/InternalBusiness/MonthlyTarget',
        name: "List View",
        slug: "dataListListView",
        i18n: "MonthlyTarget",
      },
      {
        url: '/InternalBusiness/WeeklyGoal',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "WeeklyGoal",
      },
      {
        url: '/InternalBusiness/DailyTarget',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "DailyTarget",
      },
    ] 
  },    
  //爬取任务管理
  {
    url: '/InternalBusiness/CrawlingTaskManag',
    name: "Data List",
    slug: "dataList",
    tagColor: "primary",
    icon: "AnchorIcon",
    i18n: "CrawlingTaskManagement",
  },
  // ------------------------------  
  //------------数据可视化------------
  {
    header: "数据可视化",
    i18n: "DataVisualization",
    levelCy:3, // 数据可视化
    levelCy0:'p0' ,       
  },
  //实时数据报表
  {
    url: '/DataVisualization/RealtimeDataReport',
    name: "Data List",
    slug: "dataList",
    tagColor: "primary",
    icon: "ApertureIcon",
    i18n: "RealtimeDataReport",
  },
  //日/周/月报表
  {
    url: '/DataVisualization/MonthlyReport',
    name: "Data List",
    slug: "dataList",
    tagColor: "primary",
    icon: "ArrowDownCircleIcon",
    i18n: "MonthlyReport",
  },
  // ------------------------------ 
  //------------业务培训------------
  {
    header: "业务培训",
    i18n: "BusinessTraining",
    levelCy:4,  //业务培训
    levelCy0:'p0' ,       
  },
  //监测
  {
    url: '/BusinessTraining/Monitor',
    name: "Data List",
    slug: "dataList",
    tagColor: "primary",
    icon: "AlertTriangleIcon",
    i18n: "Monitor",
  },
  //投诉
  {
    url: '/BusinessTraining/Complaint',
    name: "Data List",
    slug: "dataList",
    tagColor: "primary",
    icon: "ArchiveIcon",
    i18n: "Complaint",
  }, 
  //取证
  {
    url: '/BusinessTraining/ObtainEvidence',
    name: "Data List",
    slug: "dataList",
    tagColor: "primary",
    icon: "ArrowDownRightIcon",
    i18n: "ObtainEvidence",
  },  
  //------------预警系统------------
  {
    header: "系统预警",
    i18n: "EarlyWarningSystem",
    levelCy:4,  //预警系统
    levelCy0:'p0' ,       
  },
  //数据预警
  {
    url: "/EarlyWarningSystem/DataWarning",
    name: "Data List",
    slug: "dataList",
    icon: "ClockIcon",
    i18n: "DataWarning",
  },
  //业务预警 
  {
    url: "/BusinessTraining/BusinessWarning",
    name: "Data List",
    slug: "dataList",
    icon: "BellIcon",
    i18n: "BusinessWarning",
  },
  //系统预警 
  {
    url: "/BusinessTraining/SystemWarning",
    name: "Data List",
    slug: "dataList",
    icon: "CastIcon",
    i18n: "SystemWarning",
  },  
  // ------------------------------ 
  //------------系统设置------------
  {
    header: "系统设置",
    i18n: "SystemSettings",
    levelCy:1, //系统设置
    levelCy0:'p0' ,       
  },
  //常用设置
  {
    url: "/SystemSettings/CommonSettings",
    name: "Data List",
    slug: "dataList",
    icon: "BookOpenIcon",
    i18n: "CommonSettings",
  },
  //关于我们
  {
    url: "/SystemSettings/AboutUs",
    name: "Data List",
    slug: "dataList",
    icon: "MoreHorizontalIcon",
    i18n: "AboutUs",
  },
  // ------------------------------  
  //------------信息管理------------
  {
    header: "信息管理",
    i18n: "InformationMagment",
    levelCy:5, //信息管理
    
  },
  //员工信息管理
  {
    url: "/InforManage/StaffInforManag",
    name: "Data List",
    slug: "dataList",
    icon: "UsersIcon",
    i18n: "StaffInforManag",
  },
  //客户信息管理
  {
    url: "/InforManage/CustomerInforManag",
    name: "Data List",
    slug: "dataList",
    icon: "UserPlusIcon",
    i18n: "CustomerInforManag",
  },
  //组织结构图
  {
    url: "/InforManage/OrganizationChart",
    name: "Data List",
    slug: "dataList",
    icon: "CropIcon",
    i18n: "OrganizationChart",
  },
  //角色&等级管理
  {
    url: "/InforManage/RoleLevelManag",
    name: "Data List",
    slug: "dataList",
    icon: "TriangleIcon",
    i18n: "RoleLevelManag",
  },
  // //树状结构图
  // {
  //   url: null,
  //   name: "Data List",
  //   slug: "dataList",
  //   // tag: "new",
  //   tagColor: "primary",
  //   icon: "ListIcon",
  //   i18n: "TreeStructure",
  //   submenu: [
  //     // {
  //     //   url: '/ui-elements/data-list/thumb-view',
  //     //   name: "Thumb View",
  //     //   slug: "dataListThumbView",
  //     //   i18n: "LMMMMMMM",
  //     // },
  //     {
  //       url: '/ui-elements/ag-grid-table',
  //       name: "Thumb View",
  //       slug: "dataListThumbView",
  //       i18n: "LMMMMMMMNNNNN",
  //     },
  //   ]
  // },
  // ------------------------------ 
  //------------对外业务------------
  {
    header: "对外业务",
    i18n: "ExternalBusiness",
    levelCy:4, //对外业务
    
  },
  //字节跳动
  {
    url: null,
    name: "Data List",
    slug: "dataList",
    tagColor: "primary",
    icon: "CopyIcon",
    i18n: "ByteBounce",
    levelCy:4, //对外业务
    
    submenu: [
      //任务管理
      {
        url: '/ByteBounce/TaskManagement',
        name: "List View",
        slug: "dataListListView",
        i18n: "TaskManagement",
      },
      //数据同步
      {
        url: '/ByteBounce/DataSynchronization',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "DataSynchronization",
      },
      //数据查询
      {
        url: '/ByteBounce/DataQuery',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "DataQuery",
      },
      //协助发函
      {
        url: '/ByteBounce/SendingLetters',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "SendingLetters",
      },      
    ]
  },
  // ------------------------------  
  //------------实时数据流动------------
  // {
  //   header: "实时数据流动",
  //   i18n: "RealTimeData",
  // },
  // //Charts实时数据
  // {
  //   url: null,
  //   name: "Data List",
  //   slug: "dataList",
  //   // tag: "new",
  //   tagColor: "primary",
  //   icon: "ListIcon",
  //   i18n: "ChartsData",
  //   submenu: [
  //   ]
  // },
  // {
  //   // url: "/apps/chat",
  //   name: "Data List",
  //   slug: "dataList",
  //   icon: "ListIcon",
  //   i18n: "DataChart",
  // },
  // ------------------------------ 
  // {
  //   header: "UI Elements",
  //   i18n: "UIElements",
  // },
  // {
  //   url: null,
  //   name: "Data List",
  //   slug: "dataList",
  //   tag: "new",
  //   tagColor: "primary",
  //   icon: "ListIcon",
  //   i18n: "DataList",
  //   submenu: [
  //     {
  //       url: '/ui-elements/data-list/list-view',
  //       name: "List View",
  //       slug: "dataListListView",
  //       i18n: "ListView",
  //     },
  //     {
  //       url: '/ui-elements/data-list/thumb-view',
  //       name: "Thumb View",
  //       slug: "dataListThumbView",
  //       i18n: "ThumbView",
  //     },
  //   ]
  // },
  // {
  //   url: null,
  //   name: "Grid",
  //   slug: "grid",
  //   icon: "LayoutIcon",
  //   i18n: "Grid",
  //   submenu: [
  //     {
  //       url: '/ui-elements/grid/vuesax',
  //       name: "Vuesax",
  //       slug: "gridVuesax",
  //       i18n: "Vuesax",
  //     },
  //     {
  //       url: '/ui-elements/grid/tailwind',
  //       name: "Tailwind",
  //       slug: "gridTailwind",
  //       i18n: "Tailwind",
  //     },
  //   ]
  // },
  // {
  //   url: "/ui-elements/colors",
  //   name: "Colors",
  //   slug: "colors",
  //   icon: "DropletIcon",
  //   i18n: "Colors",
  // },
  // {
  //   url: null,
  //   name: "Card",
  //   slug: "card",
  //   icon: "CreditCardIcon",
  //   i18n: "Card",
  //   submenu: [
  //     {
  //       url: '/ui-elements/card/basic',
  //       name: "Basic",
  //       slug: "basicCards",
  //       i18n: "Basic",
  //     },
  //     {
  //       url: '/ui-elements/card/statistics',
  //       name: "Statistics",
  //       slug: "statisticsCards",
  //       i18n: "Statistics",
  //     },
  //     {
  //       url: '/ui-elements/card/analytics',
  //       name: "Analytics",
  //       slug: "analyticsCards",
  //       i18n: "Analytics",
  //     },
  //     {
  //       url: '/ui-elements/card/card-actions',
  //       name: "Card Actions",
  //       slug: "cardActions",
  //       i18n: "CardActions",
  //     },
  //     {
  //       url: '/ui-elements/card/card-colors',
  //       name: "Card Colors",
  //       slug: "cardColors",
  //       i18n: "CardColors",
  //     }
  //   ]
  // },
  // {
  //   url: null,
  //   name: "Components",
  //   icon: "ArchiveIcon",
  //   slug: 'components',
  //   i18n: "Components",
  //   submenu: [
  //     {
  //       url: '/components/alert',
  //       name: "Alert",
  //       slug: "componentAlert",
  //       i18n: "Alert",
  //     },
  //     {
  //       url: '/components/avatar',
  //       name: "Avatar",
  //       slug: "componentAvatar",
  //       i18n: "Avatar",
  //     },
  //     {
  //       url: '/components/breadcrumb',
  //       name: "Breadcrumb",
  //       slug: "componentBreadcrumb",
  //       i18n: "Breadcrumb",
  //     },
  //     {
  //       url: '/components/button',
  //       name: "Button",
  //       slug: "componentButton",
  //       i18n: "Button",
  //     },
  //     {
  //       url: '/components/button-group',
  //       name: "Button Group",
  //       slug: "componentButtonGroup",
  //       i18n: "ButtonGroup",
  //     },
  //     {
  //       url: '/components/chip',
  //       name: "Chip",
  //       slug: "componentChip",
  //       i18n: "Chip",
  //     },
  //     {
  //       url: '/components/collapse',
  //       name: "Collapse",
  //       slug: "componentCollapse",
  //       i18n: "Collapse",
  //     },
  //     {
  //       url: '/components/dialogs',
  //       name: "Dialogs",
  //       slug: "componentDialog",
  //       i18n: "Dialogs",
  //     },
  //     {
  //       url: '/components/divider',
  //       name: "Divider",
  //       slug: "componentDivider",
  //       i18n: "Divider",
  //     },
  //     {
  //       url: '/components/dropdown',
  //       name: "DropDown",
  //       slug: "componentDropDown",
  //       i18n: "DropDown",
  //     },
  //     {
  //       url: '/components/list',
  //       name: "List",
  //       slug: "componentList",
  //       i18n: "List",
  //     },
  //     {
  //       url: '/components/loading',
  //       name: "Loading",
  //       slug: "componentLoading",
  //       i18n: "Loading",
  //     },
  //     {
  //       url: '/components/navbar',
  //       name: "Navbar",
  //       slug: "componentNavbar",
  //       i18n: "Navbar",
  //     },
  //     {
  //       url: '/components/notifications',
  //       name: "Notifications",
  //       slug: "componentNotifications",
  //       i18n: "Notifications",
  //     },
  //     {
  //       url: '/components/pagination',
  //       name: "Pagination",
  //       slug: "componentPagination",
  //       i18n: "Pagination",
  //     },
  //     {
  //       url: '/components/popup',
  //       name: "Popup",
  //       slug: "componentPopup",
  //       i18n: "Popup",
  //     },
  //     {
  //       url: '/components/progress',
  //       name: "Progress",
  //       slug: "componentProgress",
  //       i18n: "Progress",
  //     },
  //     {
  //       url: '/components/sidebar',
  //       name: "Sidebar",
  //       slug: "componentSidebar",
  //       i18n: "Sidebar",
  //     },
  //     {
  //       url: '/components/slider',
  //       name: "Slider",
  //       slug: "componentSlider",
  //       i18n: "Slider",
  //     },
  //     {
  //       url: '/components/tabs',
  //       name: "Tabs",
  //       slug: "componentTabs",
  //       i18n: "Tabs",
  //     },
  //     {
  //       url: '/components/tooltip',
  //       name: "Tooltip",
  //       slug: "componentTooltip",
  //       i18n: "Tooltip",
  //     },
  //     {
  //       url: '/components/upload',
  //       name: "Upload",
  //       slug: "componentUpload",
  //       i18n: "Upload",
  //     },
  //   ]
  // },
  // {
  //   header: "Forms & Table",
  //   i18n: "FormsAndTable",
  // },
  // {
  //   url: null,
  //   name: "Form Elements",
  //   icon: "CopyIcon",
  //   i18n: "FormElements",
  //   submenu: [
      // {
      //  url: '/forms/form-elements/select',
      //  name: "Select",
      //  slug: "formElementSelect",
      //  i18n: "Select",
      // },
  //     {
  //       url: '/forms/form-elements/switch',
  //       name: "Switch",
  //       slug: "formElementSwitch",
  //       i18n: "Switch",
  //     },
  //     {
  //       url: '/forms/form-elements/checkbox',
  //       name: "Checkbox",
  //       slug: "formElementCheckbox",
  //       i18n: "Checkbox",
  //     },
  //     {
  //       url: '/forms/form-elements/radio',
  //       name: "Radio",
  //       slug: "formElementRadio",
  //       i18n: "Radio",
  //     },
  //     {
  //       url: '/forms/form-elements/input',
  //       name: "Input",
  //       slug: "formElementInput",
  //       i18n: "Input",
  //     },
  //     {
  //       url: '/forms/form-elements/number-input',
  //       name: "Number Input",
  //       slug: "formElementNumberInput",
  //       i18n: "NumberInput",
  //     },
  //     {
  //       url: '/forms/form-elements/textarea',
  //       name: "Textarea",
  //       slug: "formElementTextarea",
  //       i18n: "Textarea",
  //     },
  //   ]
  // },
  // {
  //   url: '/forms/form-layouts',
  //   name: "Form Layouts",
  //   icon: "PackageIcon",
  //   slug: "formsFormLayouts",
  //   i18n: "FormLayouts",
  // },
  // {
  //   url: '/forms/form-wizard',
  //   name: "Form Wizard",
  //   icon: "PackageIcon",
  //   slug: "extraComponentFormWizard",
  //   i18n: "FormWizard",
  // },
  // {
  //   url: '/forms/form-validation',
  //   name: "Form Validation",
  //   icon: "CheckCircleIcon",
  //   slug: "extraComponentFormValidation",
  //   i18n: "FormValidation",
  // },
  // {
  //   url: '/forms/form-input-group',
  //   name: "Form Input Group",
  //   icon: "MenuIcon",
  //   slug: "extraComponentFormInputGroup",
  //   i18n: "FormInputGroup",
  // },
  // {
  //   url: "/ui-elements/table",
  //   name: "Table",
  //   slug: "table",
  //   icon: "GridIcon",
  //   i18n: "Table",
  // },
  // {
  //   url: "/ui-elements/ag-grid-table",
  //   name: "agGrid Table",
  //   slug: "ag-grid-table",
  //   tag: "new",
  //   tagColor: "primary",
  //   icon: "GridIcon",
  //   i18n: "agGridTable",
  // },
  // {
  //   header: "Pages",
  //   i18n: "Pages",
  //   levelCy:0, //
            
  // },
  // {
  //   url: '/pages/profile',
  //   name: "Profile",
  //   icon: "UserIcon",
  //   i18n: "Profile",
  // },
  // {
  //   url: '/pages/faq',
  //   name: "FAQ",
  //   icon: "HelpCircleIcon",
  //   i18n: "FAQ",
  // },
  // {
  //   url: '/pages/knowledge-base',
  //   name: "Knowledge Base",
  //   icon: "InfoIcon",
  //   i18n: "KnowledgeBase",
  // },
  // {
  //   url: '/pages/search',
  //   name: "Search",
  //   icon: "SearchIcon",
  //   i18n: "Search",
  // },
  // {
  //   url: '/pages/invoice',
  //   name: "Invoice",
  //   icon: "InfoIcon",
  //   i18n: "Invoice",
  // },
  // {
  //   url: null,
  //   name: "Authentication",
  //   icon: "PieChartIcon",
  //   i18n: "Authentication",
  //   submenu: [
  //     {
  //       url: '/pages/login',
  //       name: "Login",
  //       slug: "pagesLogin",
  //       i18n: "Login",
  //       target: '_blank',
  //     },
  //     {
  //       url: '/pages/register',
  //       name: "Register",
  //       slug: "pagesRegister",
  //       i18n: "Register",
  //       target: '_blank',
  //     },
  //     {
  //       url: '/pages/forgot-password',
  //       name: "Forgot Password",
  //       slug: "pagesForgotPassword",
  //       i18n: "ForgotPassword",
  //       target: '_blank',
  //     },
  //     {
  //       url: '/pages/reset-password',
  //       name: "Reset Password",
  //       slug: "pagesResetPassword",
  //       i18n: "ResetPassword",
  //       target: '_blank',
  //     },
  //     {
  //       url: '/pages/lock-screen',
  //       name: "Lock Screen",
  //       slug: "pagesLockScreen",
  //       i18n: "LockScreen",
  //       target: '_blank',
  //     },
  //   ]
  // },
  // {
  //   url: null,
  //   name: "Miscellaneous",
  //   icon: "CoffeeIcon",
  //   i18n: "Miscellaneous",
  //   submenu: [
  //       {
  //         url: '/pages/not-authorized',
  //         name: "Not Authorized",
  //         slug: "pageNotAuthorized",
  //         icon: "XCircleIcon",
  //         i18n: "NotAuthorized",
  //         target: '_blank',
  //       },
  //       {
  //         url: '/pages/maintenance',
  //         name: "Maintenance",
  //         slug: "pageMaintenance",
  //         icon: "AnchorIcon",
  //         i18n: "Maintenance",
  //         target: '_blank',
  //       },
  //       {
  //         url: '/pages/comingsoon',
  //         name: "Coming Soon",
  //         icon: "ClockIcon",
  //         i18n: "ComingSoon",
  //         target: '_blank',
  //       },
  //       {
  //         url: '/pages/error-404',
  //         name: "404",
  //         slug: "pageError404",
  //         i18n: "404",
  //         target: '_blank',
  //       },
  //       {
  //         url: '/pages/error-500',
  //         name: "500",
  //         slug: "pageError500",
  //         i18n: "500",
  //         target: '_blank',
  //       }
  //   ]
  // },
  // {
  //   header: "Charts & Maps",
  //   i18n: "ChartsAndMaps",
      
  // },
  // {
  //   url: null,
  //   name: "Charts",
  //   icon: "PieChartIcon",
  //   tag: '3',
  //   tagColor: 'success',
  //   i18n: "Charts",
  //   submenu: [
  //     {
  //       url: '/charts-and-maps/charts/apex-charts',
  //       name: "Apex Charts",
  //       slug: "extraComponentChartsApexCharts",
  //       i18n: "ApexCharts",
  //     },
  //     {
  //       url: '/charts-and-maps/charts/chartjs',
  //       name: "chartjs",
  //       slug: "extraComponentChartsChartjs",
  //       i18n: "chartjs",
  //     },
  //     {
  //       url: '/charts-and-maps/charts/echarts',
  //       name: "echarts",
  //       slug: "extraComponentChartsEcharts",
  //       i18n: "echarts",
  //     },
  //   ]
  // },
  // {
  //   url: '/charts-and-maps/maps/google-map',
  //   name: "Google Map",
  //   icon: "MapIcon",
  //   slug: "extraComponentMapsGoogleMap",
  //   i18n: "GoogleMap",
  // },
  // {
  //   header: "Extensions",
  //   i18n: "Extensions",
      
  // },
  // {
  //   url: '/extensions/select',
  //   name: "Select",
  //   icon: "PocketIcon",
  //   slug: "extraComponentSelect",
  //   i18n: "Select",
  // },
  // {
  //   url: '/extensions/quill-editor',
  //   name: "Quill Editor",
  //   icon: "EditIcon",
  //   slug: "extraComponentQuillEditor",
  //   i18n: "QuillEditor",
  // },
  // {
  //   url: '/extensions/drag-and-drop',
  //   name: "Drag & Drop",
  //   icon: "DropletIcon",
  //   slug: "extraComponentDragAndDrop",
  //   i18n: "DragAndDrop",
  // },
  // {
  //   url: '/extensions/datepicker',
  //   name: "Datepicker",
  //   icon: "CalendarIcon",
  //   slug: "extraComponentDatepicker",
  //   i18n: "Datepicker",
  // },
  // {
  //   url: '/extensions/datetime-picker',
  //   name: "Datetime Picker",
  //   icon: "ClockIcon",
  //   slug: "extraComponentDatetimePicker",
  //   i18n: "DatetimePicker",
  // },
  // {
  //   url: null,
  //   name: 'Access Control',
  //   icon: 'LockIcon',
  //   i18n: 'AccessControl',
  //   submenu: [
  //     {
  //       url: '/extensions/access-control-editor',
  //       name: "Editor View",
  //       slug: "extraComponentAccessControlEditor",
  //       i18n: "EditorView",
  //     },
  //     {
  //       url: '/extensions/access-control-admin',
  //       name: "Admin View",
  //       slug: "extraComponentAccessControlAdmin",
  //       i18n: "AdminView",
  //     },
  //   ]
  // },
  // {
  //   url: '/extensions/i18n',
  //   name: "I18n",
  //   icon: "GlobeIcon",
  //   slug: "extraComponentI18n",
  //   i18n: "I18n",
  // },
  // {
  //   url: '/extensions/carousel',
  //   name: "Carousel",
  //   icon: "LayersIcon",
  //   slug: "extraComponentCarousel",
  //   i18n: "Carousel",
  // },
  // {
  //   url: '/extensions/clipboard',
  //   name: "Clipboard",
  //   icon: "CopyIcon",
  //   slug: "extraComponentClipboard",
  //   i18n: "Clipboard",
  // },
  // {
  //   url: '/extensions/context-menu',
  //   name: "Context Menu",
  //   icon: "MoreHorizontalIcon",
  //   slug: "extraComponentContextMenu",
  //   i18n: "ContextMenu",
  // },
  // {
  //   url: '/extensions/star-ratings',
  //   name: "Star Ratings",
  //   icon: "StarIcon",
  //   slug: "extraComponentStarRatings",
  //   i18n: "StarRatings",
  // },
  // {
  //   url: '/extensions/autocomplete',
  //   name: "Autocomplete",
  //   icon: "Edit3Icon",
  //   slug: "extraComponentAutocomplete",
  //   i18n: "Autocomplete",
  // },
  // {
  //   url: '/extensions/tree',
  //   name: "Tree",
  //   icon: "GitPullRequestIcon",
  //   slug: "extraComponentTree",
  //   i18n: "Tree",
  // },
  // {
  //   header: "Others",
  //   i18n: "Others",
      
  // },
  // {
  //   url: null,
  //   name: "Menu Levels",
  //   icon: "MenuIcon",
  //   i18n: "MenuLevels",
  //   submenu: [
  //     {
  //       url: null,
  //       name: "Menu Level 2.1",
  //       i18n: "MenuLevel2p1",
  //     },
  //     {
  //       url: null,
  //       name: "Menu Level 2.2",
  //       i18n: "MenuLevel2p2",
  //       submenu: [
  //         {
  //           url: null,
  //           name: "Menu Level 3.1",
  //           i18n: "MenuLevel3p1",
  //         },
  //         {
  //           url: null,
  //           name: "Menu Level 3.2",
  //           i18n: "MenuLevel3p2",
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   url: null,
  //   name: "Disabled Menu",
  //   icon: "EyeOffIcon",
  //   i18n: "DisabledMenu",
  //   isDisabled: true,
  // },
//支持
  // {
  //   header: "Support",
  //   i18n: "Support",
      //    
  // },
  // {
  //   url: 'https://pixinvent.com/demo/vuesax-vuejs-admin-dashboard-template/documentation/',
  //   name: "Documentation",
  //   icon: "BookOpenIcon",
  //   slug: "external",
  //   i18n: "Documentation",
  //   target: "_blank"
  // },
  // {
  //   url: 'https://pixinvent.ticksy.com/',
  //   name: "Raise Support",
  //   icon: "LifeBuoyIcon",
  //   slug: "external",
  //   i18n: "RaiseSupport",
  //   target: "_blank"
  // },
]
