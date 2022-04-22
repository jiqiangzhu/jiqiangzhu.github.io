# 规范

## 基础规范

### 目录规范

项目命名：小写子母，多单词以`-`拼接

```
tms-follow
tms-followfly
```

目录结构：当前页面目录需要加上当前模块名对应md文件

```
跟单管理.md
```

### 命名规范

常量：大写字母加`_`拼接

```js
const PROCESS_TYPE = '1'
```

变量：驼峰式

```js
let data = {}
let nowTime = new Date()
```

Vue：组件引入首字母大写，驼峰

```js
import SelectVideo from './select-video'
```

HTML：引入自定义组件，小写子母且多单词以`-`拼接

```html
<select-video></select-video>
```

CSS：小写子母且多单词以`-`拼接

`1、每一个css选择器必须要有命名空间，命名规则：产品线前缀-模块名-模块修饰-其它；`

`2、每一个.vue文件内，只允许存在一个style标签快；（根据历史构建情况：多个style会出现其中一个style编译丢失的场景）`

`3、第一条的每一个css指，所有自己产生的css，包含vue文件内的style标签、独立的.css/.scss/.sass文件、引入的第三方css文件`

`4、以上规则和scope无关，无论是否添加scope，前三个规则都要遵守`

`5、产品线前缀与第一条规则的产品线产缀保持一致，原则上每个部门统一使用1个前缀，每个选择器必须以这个前缀开头	`

`6、为防止书写不规范的情况，更新base仓库dev分支，使用css检查命令'npm run css 目录名'详情查阅base/packages/css/README.md`

```css
.tms-order-list {
    .flex {
        /*your css*/
    }
}
```

### 代码注释

函数注释

```js
/**
  * 函数作用描述
  * @param data 当前入参描述
  * @returns {type: Number} {0: 不展示，1：激活状态，2：置灰状态}
  */
function funcName(data) {
    return data.type
}
```

逻辑注释

```js
// 当<车牌号>、<有无视频>不为空时，显示激活图标
if (+row.hasVideoFlag === 10 && row.palteNumber && authFlag && timeFlag) {
    type = 1
    // 当<车牌号>不为空、<有无视频>为空时，显示置灰图标
} else if (+row.hasVideoFlag !== 10 && row.plateNumber && authFlag && timeFlag) {
    type = 2
    row.carVideoTitle = '当前车辆无监控'
} else {
    type = 0
}
```



**小妙招**

`+`的妙用

使用`+`将变量转换成数字，只适用于数字字符串，不然就会返回NaN

使用`+`将Date类型数据转换为时间戳，相当于`getTime()`

引入组件

```js
// 导表选择
import ExportVipChoose from './components/export-vip-choose'
// 工作日分析
import WorkTimeAging from './components/work-time-aging'
// 特殊客户配置
import SpecialCustomer from '@/tms-follow/pages/documentary/components/special-customer'
// 少货工单
import RepairOrder from './components/repair-order'
// 批量解决
import BatchWarn from './components/batch-warn'
```

> 引用组件需要注释说明组件名称

### 路由规范

路由中导入模块的webpackChunkName要统一加前缀

```js
const siteMonitorList = () => import(/* webpackChunkName: "coo_xxx" */ '../pages/site-monitor/list')
export default [{
    path: 'site-monitor/list',
    components: siteMonitorList,
    meta: { tag: '/coo/site-monitor/list', title: '场地实地监控', pageType: 'detail', closeTag: true }
}]
```

路由数据结构需按一下结构

```js
export default [{
    path: 'transfer-loss/list',
    components: transferLossList,
    meta: { tag: '/tms/transfer-loss/list', title: '交接漏扫' }
}]
```

> 同一个菜单下的路由tag要一致，tag是保证同一个菜单下的页面在同一个标签下打开及返回按钮可以返回列表页每次关闭路由标签会弹出提示"您确定要取消保存当前数据？"，可配置pageType为detail关闭提示，closeTag为true可获取关闭路由标签页时的eventBus事件'GLOBAL_CLOSE_TAG'

### git分支名约定

`prod`  生产分支 `固定分支`

`uat`  uat分支 `固定分支`

`stg`  stg分支 `固定分支`

`gray`  生产灰度分支 `固定分支`

`grayuat`  uat灰度分支 `固定分支`

`dev` 开发分支 `固定分支`

> 固定分支表示每个仓库必须有的分支；新创建的仓库必须有以上几个固定分支

## 开发规范

### 通用

* 涉及到表格的，字段宽度调整要刚刚好，不能过窄或过宽；字段要有合理的排序；数字要标明合适的单位
* 所有要展示金额的，要使用金额过滤器numberSplit；转换效果：12300 => 1万2300 20000 => 2万
* 页面弹出错误提示时，文字应该显示清晰名了，不要显示英文或系统默认提示
* gitlab无用开发分支应当时常清理
* 一定要在确保uat或stg验证过的代码，才合并prod分支，合并代码时，要认真查看变更记录
* 组织树组件，要预加载组织数据（比如在组件创建时就先获取数据），不要等到使用的时候才去加载（数据大，加载慢）/其他场景下，有加载大量数据的组件，都可以做类似优化

### erp

* 严禁覆盖公共css；所有自己产生的css一定要有作用域，自己产生的css包含：style标签、.css/.sass文件，或引用第三方的css文件
* 一个vue文件内，禁止使用多个style标签，最多允许使用1个
* 字体图标，一定要使用自己的字体名（在字体图标项目设置内，设置独有的Symbol前缀与Font Family）严禁使用默认的
* 一个部分只使用一个iconfont图标库，严禁私自引入其它图标库
* 直接在项目本地以文件形式引用第三方包的，在第三方包路径（文件名或目录）上包含erponparse标识
* 使用import()动态导入时，禁止在路径中使用变量，反例 const evaluateManagement = () => import(/*webpackChunkName: "chunk-name" */\`\.\./pages/${path}`);
* 路由文件中，禁止使用import xx from 'xx路径'的静态导入，统一使用动态导入const xx = () => import(/*webpackChunkName: "chunk-name" */ 'xx路径');
* **不同模块要使用不同的webpackChunkName，否则同样的webpackChunkName的模块，会一起打包在一个js里面，造成js文件过大，影响模块初次打开速度**
* 除了引用公共仓库(public/layout/shared)库外，**严禁跨仓库引用文件**
* 使用localStorage/sessionStorage/window等存储对象时，要注意命名一定要加前缀，如ams-effciency-data
* 严禁修改js原生对象原型链，严禁修改公共对象或方法
* 组件内注册事件/定时器，须在beforeDestory中销毁
* 如果用到`beforeRouteLeave钩子`函数，一定要做好异常处理，确保能正确执行到next
* 凡是使用定时器轮询调用接口的，请求时都需要指定`menu-id`，并且在请求头增加`x-relet: 20`，同时关闭接口性能上报，参考`this.$http('tosreport.department.allocation', data, {log: false, axios: {headers: {'X-menu-id': '150146944725192964'}}})`，并在路由离开钩子`beforeRouteLeave`内关闭定时器，如有需要，可以在模块被激活时activated重新开启定时器
* 通过顶部标签切换模块时，被激活的模块，不允许重新去请求接口拉取表格数据，在beforeRouteEnter内用vm.$route.meta.layout判断是首次打开还是被激活
* (vue)template根标签不要使用v-if
* (vue)template内不要直接使用$route，转换成内部状态后再使用
* (vue)template行数不要超过300行，超过拆分成子组件，同一个组件过多html标签会影响update性能
* 表格数据超过30行要用query-table或table-list组件
* 同时有多个http请求时，若没有相互依赖，不要用await阻塞
* 如果在同一个微服务中，出现一个以上的appkey，那么在用这个微服务的所有接口时，自行在http方法参数里写入appkey
* 列表页有通用查询，详情页也要有通用查询，详情页要有上一页、下一页翻页组件；[参考](http://gitlab.ky-tech.com.cn/erp-frontend/base/wikis/%E5%88%97%E8%A1%A8/%E8%AF%A6%E6%83%85%E9%A1%B5%E9%80%9A%E7%94%A8%E6%9F%A5%E8%AF%A2)
* 弹窗遮罩局部浮动不用全局弹窗，便于tab切换模块，仍保留该模块操作。无特殊要求，不要加append-to-body属性(不加append-to-body，则弹窗的DOM插入到业务模块下面；加上的话，会插入到body下面)。尽量都是用`kye-dialog`[参考](http://gitlab.ky-tech.com.cn/erp-frontend/base/wikis/2021.01.15)
* 请求时要加loading效果
* 需要展示金额的地方，都要使用金额过滤器'filter: numberSplit'；通用查询过滤器配置[参考](http://gitlab.ky-tech.com.cn/erp-frontend/base/wikis/%E5%8D%95%E4%BD%8D%E5%88%87%E6%8D%A2)
* 菜单页面目录下创建一个xx.md文件，便于快速查找目录
* 不同菜单模块下，通用查询和按钮都要配置权限
* 按钮需要配置权限，如果涉及到多个接口，配置最合适的一个；[参考](http://gitlab.ky-tech.com.cn/erp-frontend/base/wikis/%E9%85%8D%E7%BD%AE%E6%8C%89%E9%92%AE%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6%E8%AF%B4%E6%98%8E)
* 表单label字段不超过五个字，超过换行
* 远程搜索组件，搜索不到，不清空输入框，用户可以修改后接着输入
* 员工信息搜索结果展示四个字段，并支持本地搜索。是哦那个kye-search-tips组件，并配置user属性为true
* 客户公司名、客户名称、手机号都需要加密
* 导出按钮权限名字要跟权限配置中配置的接口权限字段保持一致
* 到处需上报导出日志，导出数据前需要二次确认("window.__ERPGLOABLECONFIG__.exportTips || 是否哟到处当前页数据？(数据导出将被后台监控)"删除数据)；[上报参考](http://gitlab.ky-tech.com.cn/erp-frontend/base/wikis/%E5%AF%BC%E5%87%BA%E5%8F%82%E6%95%B0%E6%97%A5%E5%BF%97)
* 所有查询条件在一行显示，不可换行，可用query-form组件，内部已实现溢出表单隐藏，注意把必填项表单顶置最前，避免表单被隐藏；[参考](http://gitlab.ky-tech.com.cn/erp-frontend/base/wikis/%E9%80%9A%E7%94%A8%E8%A1%A8%E5%8D%95)
* 表格统计如果内容不多，放于功能按钮一行，较多则另起一行
* 同一个业务，不同状态下(如详情与修改)页面每个相同字段位置保持一致；比如详情页的员工姓名字段位置应该与修改页员工姓名字段位置一致
* 修改页保存后需要跳转至对应详情页；[参考](http://gitlab.ky-tech.com.cn/erp-frontend/base/wikis/%E6%A8%A1%E5%9D%97%E8%B7%AF%E7%94%B1%E8%B7%B3%E8%BD%AC)
* 查询`ctrl+q`，刷新`ctrl+r`，保存`ctrl+s`常用按钮需要加上快捷键，可以shift+i切换显示页面快捷键
* 在新增修改页面退出路由需要提示"window.\__ERPGLOABLECONFIG__.saveTips || 您确定要取消保存当前数据？"
* 弹窗表格上下12px，左右间距16px，不能空余太多，引用全局样式`key-dialog-body`
* 弹窗内底部如果没有按钮、分页，需要加上"关闭"
* 弹窗纵向滚动条只有一条，页面底部固定
* 保存/取消按钮需要放在右上角，弹窗类型保存/取消按钮需要放在右下角，且保存在左，取消在右
* input显示框，在新增和修改页面(白色可输入，灰色不可输入)，在详情页面(白色不可输入)
* 紫色文字代表是可以点击的内容
* 引用组件时增加注释
* 详情页最大宽度1280，使用`kye-expand-page`组件包裹需要展示的详情页
* 通用查询组织树，需默认勾选'是否包含子节点'

