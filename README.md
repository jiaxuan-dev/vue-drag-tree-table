# vue drag tree table

IE10+/Chrome/firefox


> 基于vue实现的可以拖拽排序的树形表格  

支持拖拽排序、固定头、拖拽改变行宽，checkbox多选、自定义单元格内容、设置行的背景色、动态控制某些行是否可以拖拽等等....

![drag-tree-table](imgs/demo.gif 'drag-tree-table')

## 安装
npm
``` bashs
npm i drag-tree-table --save-dev
```
script
``` bashs
<script src="./dist/dtree-table.js"></script>
```
## 使用方式

```html
<template>
  <div id="app">
    <dragTreeTable
      :data="treeData"
      :onDrag="onTreeDataChange"
      fixed
      border>
    </dragTreeTable>
  </div>
</template>

<script>
import dragTreeTable from "drag-tree-table";
export default {
  name: "app",
  data() {
    return {
      treeData: {
        columns: [...],
        lists: [...]
      }
    };
  },
  components: {
    dragTreeTable
  },
  methods: {
    onTreeDataChange(list) {
      this.treeData.lists = list;
    }
  },
};
</script>


## 如何使用
---

### 安装
```shell
    npm install --save drag-tree-table
```

### 使用
```html
<template>
    <dragTreeTable :data="treeData" :onDrag="onTreeDataChange"></dragTreeTable>
</template>

<script>
import dragTreeTable from "drag-tree-table";

export default {
  name: "app",
  data() {
    return {
      treeData: {
        columns: [],
        lists: []
      }
    };
  },
  components: {
    dragTreeTable
  },
  methods: {
    onTreeDataChange(list) {
      this.treeData.lists = list;
    }
  }
};
</script>
```
## 全局方法
组件目前提供了如下方法

方法|参数|描述
---|--|---:
DelById|id|删除ID对应的行，返回删除后的数据，需要手动更新数据e
ZipAll|无|全部折叠
OpenAll|无|全部打开
GetLevelById|id|根据ID获取当前行的层级level

具体使用方式可以点击上面超链，查看具体demo


## 参数配置
---

data: 表格数据源

onDrag: 拖拽动作完成后触发

isdraggable: 是否开启拖拽
beforeDragOver: 动态控制当前行是否可以拖拽，及被拖拽进入的行是否允许插入
以上四个参数为动态参数

示例：
```
<dragTreeTable 
  :data="treeData" 
  :onDrag="onTreeDataChange"
  :isdraggable="false">
</dragTreeTable>
```

----
下面所有参数为静态参数，直接添加即可

示例：
```
<dragTreeTable 
  :data="treeData" 
  :onDrag="onTreeDataChange"
  border
  fixed>
</dragTreeTable>
```


fixed:固定表头

height: 设置表格高度

border: 显示边框

resize: 支持表格宽度调整

onlySameLevelCanDrag: 禁止拖拽改变层级

hightRowChange: 高亮显示被拖拽的行

---

### data参数接受一个对象，包含三块:

columns:[] // 表头配置参数

lists: [] // 表格数据

custom_field: {} // 自定义字段的配置（非必需）

---
### columns 表头

参数|必填项|默认值|可选值|描述
---|--|--|--|---:
type|否|null|'default', 'selection', 'actions', 'checkbox'|
title|是||String|表格标题
field|是||String|单元格内容取值使用
width|否||Number|单元格宽度
align|否|left|left,center,right|单元格对齐方式
flex|否||Number|自动填充空余区域，遵循CSS的flex布局
formatter|否||Function|自定义单元格显示内容,参数为当前行数据


**columns数据事例**
```javascript
[
  {
    type: 'selection',
    title: '菜单名称',
    field: 'name',
    width: 200,
    align: 'center',
    formatter: (item) => {
      return '<a>'+item.name+'</a>'
    }
  },
  {
    type: 'checkbox',
    isContainChildren: true, //是否勾选子节点，默认false
    onChange: this.onCheck, // parmas selectRows
    title: '链接',
    field: 'url',
    width: 200,
    align: 'center'
  },
  {
    title: '操作',
    type: 'action',
    width: 350,
    align: 'center',
    actions: [
      {
        text: '查看角色',
        onclick: (item) => {
            // item是当前行的数据
            console.log(item)
        },
        formatter: (item) => {
          return '<i>查看角色</i>'
        }
      },
      {
        text: '编辑',
        onclick: (item) => {
            // item是当前行的数据
            console.log(item)
        },
        formatter: (item) => {
          return '<i>编辑</i>'
        }
      }
    ]
  },
]
```

### lists 数据体
参数|参数类型|描述
---|:--:|---:
id|String|唯一标志
parent_id|String|父节点ID
order|Number|排序,0开始,onDrag后order会重置
name|String|默认显示内容
open|Boolean（非必须）|true展开,false收起(默认收起)
lists|Array|子节点
isShowCheckbox|Boolean|控制CheckBox列某些行是否显示CheckBox
backgroundColor|web color|行的背景色
**lists示例数据**
```javascript
 [
  {
    "id":40,
    "parent_id":0,
    "order":0,
    "name":"动物类",
    "uri":"/masd/ds",
    "open":true,
    "lists":[]
  },{
    "id":5,
    "parent_id":0,
    "order":1,
    "name":"昆虫类",
    "uri":"/masd/ds",
    "open":true,
    "isShowCheckbox": false, '如果设置了type=checkbox,但是想控制某些行不显示CheckBox，可以用此属性'
    "lists":[
      {
        "id":12,
        "parent_id":5,
        "open":true,
        "order":0,
        "name":"蚂蚁",
        "uri":"/masd/ds",
        "lists":[]
      }
    ]
  },
  {
    "id":19,
    "parent_id":0,
    "order":2,
    "name":"植物类",
    "uri":"/masd/ds",
    "open":true,
    "lists":[]
  }
]
 ```

### custom_field 自定义字段
可以指定组件字段的默认取值，没必要完全按照我定的字段名字
支持自定义设置的字段有```id、order、lists、parent_id```,
```
custom_field: {
    id: 'id',
    order: 'sort',
    lists: 'children',
    parent_id: 'parent_id'
}
```

[更新日志-CHANGELOG](CHANGELOG.md 'vue-drag-tree-table') 
 # 打开子节点时的回调  
 示例：
```HTML
<dragTreeTable 
  :data="treeData" 
  :onDrag="onTreeDataChange"
  :onOpen="open"
  border
  fixed>
</dragTreeTable>
```
 # 和判断有没有子节点加了个hasChild
 ```js
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

 ```

