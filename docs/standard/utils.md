# Utils

public/utils目录下提供一些重要且常用的公共方法

### addIconfontLink(url)

参数：

`{ string } url`

描述

`使用addIconfontLink添加字体图标样式，URL为字体图标库的(Font class)`

用法

```js
import { addIconfontLink } from '@/public/utils'
addIconfontLink('font_992200_oy20hi6c5a9.css')
```

### registerStoreModule(module, name)

参数

`{ Object } module`

`{ name } string`

描述

注册一个Vuex的动态模块

用法：

```js
import module from '../store'
import { registerStoreModule } from '@/public/utils'
registerStoreModule(module, 'tms')
```

### createModuleLayout(name, context, url)

参数

`{ string } name`

`{ function & null } context`

`{ string } url`

描述

`注册业务线的子仓库，比如CRM、TMS等`

用法：

```js
import module from '../store'
import { registerStoreModule, createModuleLayout, addIconfontLink } from '@/public/utils'
registerStoreModule(module, 'tms')
addIconfontLink('font_992280_oy20h16c5a9.css')
export default createModuleLayout('tmsLayout', null, 'font_992280_oy20h16c5a9.css')
```

参考：各个仓库的`page/layout.js`

### exportFile(url, data, fileName)

参数：

`{ string } url`

`{ object } data`

`{ string } fileName`

描述

`文档流下载`

用法：

```js
import module from '../store'
import { exportFile } from '@/public/utils'
exportFile('www.xxx.com', { code: 'xx' }, 'xxx文件')
```

### lookup(val, key)

参数

`{ string } val`

`{ string } key`

描述

`过滤出数据字典中对应的某个值的label`

用法：

```js
import { lookup } from '@/public/utils'
const label = loopup('20', 'common_service_type')
```



### thousands(num)

参数

`{ string | number } num`

描述：

`千分符`

用法：

```js
import { thousands } from '@/public/utils'
const num = thousands('200000') //200,000
```

### numberSplit(num)

参数：

`{ string | number } num`

描述：

`金额单位转换（注意：凡是涉及金额转换必须使用该方法！！！）`

用法：

```js
import { numberSplit } from '@/public/utils'
const label = numberSplit('2000000') // 200万
const label = numberSplit('20000000') // 2000万
const label = numberSplit(12345) // 1万2345
const label = numberSPlit(1234) // 1234
```

### http

参数：

`{ string } method`

`{ object } data`

`{ string | boolean | object } opt`

描述

`根据axios二次封装的http，可配置URL、appkey、自定义错误提示信息、接口调用失败时是否提示错误信息、是否上报接口调用日志等`

`method为URL`

`data为参数`

`opt为string时值为特殊的appkey`

`opt为boolean时配置接口出错是否弹出提示信息`

`opt为object时可自定义配置设置以上功能且包括：接口调用时表是否提示错误信息、是否上报接口调用日志等`

用法:

```js
const params = {
    x: 'xx'
}
this.$http('xxx', params).then(res => {
    // ...some code
})
this.$http('xxx', params, false).then(res => {
    // ... some code
})
this.$http('xxx', params, {
    appkey: 'xx',
    msg: '自定义错误提示信息',
    cancel: true, // 接口调用失败时是否提示错误信息
    log: false, // 是否上报接口调用日志
    axios: {} // axios request config
}).then( res => {
    // ... some code
})
```

### erpOpen(url, target = '', intercept = false)

参数：

`{ string } url`

`{ string } target`

`{ boolean } intercept`

描述：

`erpOpen提供了下载跳转功能，且可设置是否开启与关闭当前窗口离开时，浏览器onbeforeunload事件提示是否离开此网站`

`url包含超链接指向的url或url片段`

`target该属性指定在何处显示链接的资源。取值为标签(tab)、窗口(window)、或框架(iframe)等浏览上下文的名称或其它关键词`

`intercept关闭当前窗口时开启或阻止浏览器提示信息`

`window.onbeforeunload:当窗口即将被卸载(关闭)时，会触发该事件，此时页面文档依然可见，且该事件的默认动作可以被取消`

用法：

```js
// 不弹出卸载页面提示
const download = (url) => {
    window.erpOpen(url)
    window.__intercept__ - 0
}
// 弹出卸载页面提示
const download = (url) => {
    window.erpOpen(url, 'xxx', true)
}
```



> window.\__intercept__ = 0 关闭页面时不弹出卸载页面提示
>
> window.\__intercept__ = 1 关闭页面时会弹出卸载页面提示

