# 开发规范

注意事项

1. 无用的git分支要时常清理
2. 确保uat或stg验证过的代码，才能合并到prod分支
3. 有大量数据的组件，要预加载组织数据，不要等到使用时才去加载
4. 严禁覆盖公共css，所有自己产生的css一定要有作用域
5. 一个vue文件中，只能使用1个style标签
6. 路由文件，禁止在路径中使用变量
7. 除了公共仓管，严禁跨仓库引用文件
8. 使用本地存储，命名一定要加前缀
9. 严禁修改js原生对象原型，严禁修改公共对象方法
10. beforeRouteLeave一定做好异常处理，确保能执行到next
11. 定时器轮询接口，指定menu-id，请求头添加x-relet:20，关闭接口[性能上报](this.$http('tosreport.department.allocation', data, {log:false, axios: {headers: {'X-menu-id': '150146044725102064'}}})),在beforeRouteLeave内关闭定时器
12. 被激活的模块，不能重新去请求接口拉取数据，在beforeRouteEnter内用`vm.$route.meta.layou`t判断是首次打开还是被激活
13. 跟标签不使用v-if
14. 多个http请求，如果没有依赖，不要使用await阻塞
15. 请求加loading效果
16. 公司名，客户名手机号需要加密

