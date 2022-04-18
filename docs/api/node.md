## :star:`Node`

实体层  负责传递0  1的电信号

链接层  负责0 和 1的分组方式

​	以太网协议  一组电信号构成一个数据包，叫做帧Frame，分为标头和数据

​	MAC地址  标头包含了发送者和接收者的信息

​		接入网络的所有设备，网卡出厂时候，都有一个独一无二的地址

​	广播   找到接收方的MAC地址，与自身MAC地址比较，两者相同，就接受这个包，否则丢弃

网络层 广播效率低，必须局限在发送者所在的子网络，两台计算机不在一个子网络，广播传不过去  网络层，引进了一套新地址  

​	IP协议

axios的fetch和ajax的区别

​	fetch基于promise设计，ajax回调函数形式

热更新原理  node fs模块

Object.defineProperty的缺点，为什么Object.defineProperty不能监听数组

​	不能监听新增/删除的属性   JS数组长度不定，数组长度过长时浪费性能

Map和Object

* object的key只能是整数、字符串或者symbol，在Map中可以是Javascript的所有数据类型
* map继承自Object对象
* JSON 直接支持 Object，但不支持 Map
* Map 是纯粹的 hash， 而 Object 还存在一些其他内在逻辑，所以在执行 delete 的时候会有性能问题。所以写入删除密集的情况应该使用 Map。
* Map 会按照插入顺序保持元素的顺序，而Object做不到。
* Map 在存储大量元素的时候性能表现更好，特别是在代码执行时不能确定 key 的类型的情况。



diff源码



