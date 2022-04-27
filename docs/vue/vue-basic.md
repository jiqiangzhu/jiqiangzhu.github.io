# Vue2基本语法
## 常用v指令
* v-if 
  
  是否渲染dom
  
* v-show 
  
  display的属性是否为none
  
* v-model

  语法糖，绑定了input输入框的input事件，更新value  

* v-for

  循环可迭代对象数组
  
## style class样式




## 组件传值

父传子

子传父

provide/inject

props

emit

attrs



#### nextTick



#### vue2中存在的问题

* v-if和v-for顺序
* 无法监听新增属性，无法监听数组（vue2重写数组方法）

## 生命周期
> beforeCreate
> 
> created
> 
> beforeMounte
> 
> mounted
> 
> beforeUpdate
> 
> updated
> 
> beforeDestroy
> 
> destroyed

vscode vue.json 快速生成vue模板 

```json
{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"Print to console": {
		"prefix": "vue", //此处关系到你的快捷单词
		"body": [
			"<template>",
			"  <div></div>",
			"</template>",
			"",
			"<script>",
			"export default {",
			"  data () {",
			"    return {",
			"    }",
			"  },",
			"  components: {},",
			"  computed: {},",
			"  created () {},",
			"  methods: {}",
			"}",
			"",
			"</script>",
			"<style lang='less' scoped>",
			"</style>",
			""
		],
		"description": "Log output to console"
	}
}
```



