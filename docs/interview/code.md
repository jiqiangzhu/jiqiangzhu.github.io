# 手撕代码

### 队列

十个请求，放入请求池，请求池一次性只能放入三个，结束一个任务，从请求池中删除，加入新的请求任务

```typescript
interface taskType {
  task: Function,
  run: Boolean
}

class Queue {
  allTask: Array<Function> = [];
  runTask: Array<taskType> = []

  constructor(...rest: Array<Function>) {
    //初始化所有任务
    this.allTask = rest;
    // 放入请求池的三个初始任务
    const initTask = this.allTask.splice(0, 3);
    //添加run标识
    this.runTask = initTask.map(task => {
      return {
        task,
        run: false
      }
    })
    //执行
    this.run();
  }

  run() {
    this.allTask.length > 0 && this.runTask.forEach((item, index) => {
      // 已经执行过的task不再执行
      if (item.run) return;
      item.run = true;
      item.task().then((value: unknown) => {
        console.log('value', value)
        delete this.runTask[index]
        this.runTask[index] = {
          task: this.allTask.shift()!,
          run: false
        }
        this.run()
      })
    })
  }
}

//以下是测试代码
function fun1() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(fun1.name)
    }, 1000)
  })
}
function fun2() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(fun2.name)
    }, 2000)
  })
}
function fun3() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(fun3.name)
    }, 300)
  })
}

function fun4() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(fun4.name)
    }, 1000)
  })
}
function fun5() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(fun5.name)
    }, 1000)
  })
}
function fun6() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(fun6.name)
    }, 300)
  })
}

new Queue(fun1, fun2, fun3, fun4, fun5, fun6)
```

### 图片分类

**补充下面代码，保证能输出以下结果**

```js
const image = new ImagesManage([1, 2, 3, 4, 5]);
image.setImageGroup(4, "apple");
console.log(image.getAllImage()); // [4, 1, 2, 3, 5]
image.setImageGroup(2, "dog");
console.log(image.getAllImage()); // [4, 2, 1, 3, 5]
image.setImageGroup(3, "apple");
console.log(image.getAllImage()); // [4, 3, 2, 1, 5]
image.setImageGroup(3, "dog");
console.log(image.getAllImage()); // [4, 2, 3, 1, 5]
```



```js
class ImagesManage {
  // [1, 2, 3, 4, 5]
  constructor(ids) {
    // 未分类
    this.ids = ids;
    this.groups = {};
  }
  // 分组
  setImageGroup(id, group_name) {
    const ind = this.ids.indexOf(id);
    // 如果存在将此id从未分类的数组中剔除
    ind !== -1 && this.ids.splice(ind, 1);
    // 判断是否为重新赋值的id
    let flag = false;
    Object.keys(this.groups).forEach((name) => {
      this.groups[name] = this.groups[name] || [];
      // 判断是否已经分类了
      const index = this.groups[name].indexOf(id)
      if (index !== -1 && name !== group_name) {
        flag = true;
        // 删除旧的
        this.groups[name].splice(index, 1);
        // 重新分组
        this.groups[group_name] = this.groups[group_name] || [];
        this.groups[group_name].push(id);
      }
    });
    // 未分类
    if (!flag) { 
      this.groups[group_name] = this.groups[group_name] || [];
      this.groups[group_name].push(id);
    }
  }
  // 按照分组名称进行排序后返回，分组的优先输出
  getAllImage() {
    const arr = [];
    Object.keys(this.groups).sort().forEach(name => {
      arr.push(...this.groups[name])
    })
    arr.push(...this.ids)
    return arr;
  }
}

```

### 实现一个Event-Bus

```typescript
class EventBus {
  cbs: any = {}

  on(type: string, cb: Function) {
    this.cbs[type] = this.cbs[type] || [];
    this.cbs.push({cb, once: false})
  }

  emit(name: string, ...rest: any) {
    Array.isArray(this.cbs[name]) && this.cbs[name].forEach((item, index) => {
      item.cb && item.cb()
      if (item.once) {
        delete item.cb
      }
    })
  }

  once(type: string, cb: Function) {
    this.cbs[type] = this.cbs[type] || [];
    this.cbs.push({cb, once: true})
  }

  clear() {
    this.cbs.splice(0, this.cbs.length)
  }
}
```

### 递归过滤器

```typescript
function filter(array: Array<any>, target: string): Array<any> {
  const result: Array<any> = []
  for (let i = 0; i < array.length; i++) {
    // name直接等于target，直接返回当前项
    if (array[i].name === target) {
      result.push(array[i]);
      // name不等于target，children length大于0
    } else if (array[i].children && array[i].children.length > 0) {
      // 递归，查询children中是否含有目标值
      const res = filter(array[i].children, target);
      //含有目标值，要剔除非目标值的项
      if (res.length > 0) {
        result.push({
          name: array[i].name,
          children: res
        })
      }
    }
  }
  return result;
}
```

### 合法字符串

```js
function solution(str) {
  const obj = {
    ")": "(",
  };
  const array = [];
  for (let i = 0; i < str.length; i++) {
    if (array.length > 0 && obj[str[i]] === array[array.length - 1]) {
      array.pop();
      continue;
    }
    array.push(str[i]);
  }
  return array.length === 0;
}
```

### 实现一个小驼峰命名的函数

```js
function solution(str) {
  const arr = str.split('');
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arr[i] = arr[i].toLowerCase()
    } else if (arr[i] === '_'){
      arr.splice(i, 1);
      arr[i] = arr[i].toUpperCase()
      console.log('str', str);
    }
  }
  return arr.join('');
}
```

### 实现promise.finally

```typescript
const finally = (executor = new Function) => {
    return this.then((value: unknown) => { 
        return myPromise.resolve(executor()).then(() => value) // 为了将值继续传递供链式调用
    }, (reason: any) => {
        return myPromise.resolve(executor()).then(() => { //为了将值继续传递供链式调用
            throw reason
        })
    })
}
```





