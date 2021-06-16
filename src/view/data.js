const demoDataList = [
  {
    id: 110,
    parent_id: 0,
    order: 0,
    name: "客户管理",
    uri: "无",
    open: true,
    hasChild: true,
    lists: [
      {
        id: 201,
        parent_id: 110,
        order: 0,
        name: "联系人",
        uri: "/customer/contacts",
        lists: null,
        isShowCheckbox: false,
        hasChild: false,
        highlight: true
      },
      {
        id: 173,
        parent_id: 110,
        order: 1,
        name: "客户",
        uri: "/customer/customerList",
        lists: null,
        checked: true,
        hasChild: false,
      },
      {
        id: 117,
        parent_id: 110,
        order: 2,
        name: "客户维护记录",
        uri: "/customer/maintain",
        hasChild: false,
        lists: null
      },
      {
        id: 383,
        parent_id: 110,
        order: 3,
        name: "客户冲突",
        uri: "无",
        hasChild: true,
        lists: null
      },
      {
        id: 138,
        parent_id: 110,
        order: 4,
        name: "线索管理",
        uri: "/customer/clue",
        hasChild: false,
        lists: null
      },
      {
        id: 159,
        parent_id: 110,
        order: 5,
        name: "集团信息",
        uri: "/customer/agent",
        hasChild: false,
        lists: null
      }
    ]
  },
  {
    id: 404,
    parent_id: 0,
    order: 1,
    name: "审核中心",
    uri: "无",
    hasChild: true,
    lists: [
      {
        id: 187,
        parent_id: 404,
        order: 0,
        name: "资质审核",
        uri: "/customer/qualifications",
        hasChild: false,
        lists: null
      }
    ]
  },
  {
    id: 306,
    parent_id: 0,
    order: 2,
    name: "数据统计",
    uri: "无",
    hasChild: true,
    lists: [
      {
        id: 222,
        parent_id: 306,
        order: 0,
        name: "线索",
        uri: "/customer/clueStatistics",
        hasChild: false,
        lists: null
      },
      {
        id: 124,
        parent_id: 306,
        order: 1,
        name: "客户",
        uri: "/customer/statistics",
        hasChild: false,
        lists: null
      }
    ]
  },
  {
    id: 334,
    parent_id: 0,
    order: 3,
    name: "基础数据",
    uri: "",
    hasChild: true,
    lists: [
      {
        id: 152,
        parent_id: 334,
        order: 0,
        name: "行业信息",
        uri: "/customer/industry",
        hasChild: false,
        lists: null
      },
      {
        id: 166,
        parent_id: 334,
        order: 1,
        name: "客户部门",
        uri: "/customer/departmentType",
        hasChild: false,
        lists: null
      }
    ]
  },
  {
    id: 9,
    parent_id: 0,
    order: 4,
    name: "系统管理",
    uri: "",
    open: false,
    hasChild: true,
    lists: [
      {
        id: 313,
        parent_id: 9,
        order: 0,
        name: "员工管理",
        uri: "/rbac/userManagement",
        hasChild: true,
        lists: [
          {
            id: 412,
            parent_id: 313,
            order: 0,
            name: "员工管理-子节点",
            uri: "/rbac/userManagement",
            hasChild: false,
            lists: null
          }
        ]
      },
      {
        id: 320,
        parent_id: 9,
        order: 1,
        name: "部门管理",
        uri: "/rbac/departmentManagement",
        hasChild: false,
        lists: null
      },
      {
        id: 23,
        parent_id: 9,
        order: 2,
        name: "角色管理",
        uri: "/rbac/roleManagement",
        hasChild: false,
        lists: null
      },
      {
        id: 16,
        parent_id: 9,
        order: 3,
        name: "权限管理",
        uri: "/rbac/authorityManagement",
        hasChild: false,
        lists: null
      },
      {
        id: 2,
        parent_id: 9,
        order: 4,
        name: "菜单管理",
        uri: "/menu/menuManagement",
        hasChild: false,
        lists: null
      },
      {
        id: 107,
        parent_id: 9,
        order: 5,
        name: "操作日志",
        uri: "/operation/log",
        hasChild: false,
        lists: null
      }
    ]
  }
]
export default demoDataList;