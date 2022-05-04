# 前端本地存储indexedDB

是底层API，用于在客户端存储大量结构化数据，符合同源策略，只能手动更新或删除

webSQL已废弃

## 使用场景

1. 数据可视化等界面，大量数据，每次请求会消耗很大性能
2. 即时聊天工具，大量消息需要存在本地
3. 其他存储方式容量不满足时，不得已使用indexedDB

等等

## 特点

* 非关系型数据库(noSql)

关系型数据库的特点是以一张二维表的形式存储，indexDB是非关系型 数据库，主要以键值对形式存储

* js对象式存储方式

cookie、localStorage、sessionStorage等方式存储的数据当清除浏览器缓存后，都会欸清除掉，而使用indexedDB存储的数据不会，**除非手动删除数据库**

* 无大小限制

存储容量大

* 不会阻塞浏览器

indexdb操作是异步操作，不会锁死浏览器，用户依然可以进行其他操作，localStorage是同步的

* 支持事务

支持transaction，意味着一系列的操作步骤之中，只要有一步失败，**整个事务都会取消，数据库回滚到事务发生之前的状态**，与mysql等数据库的事务类似

* 同源策略

遵循同源策略，每个数据库对应创建他的域名，网页只能访问自身域名下的数据库，不能跨越

## 重要概念

### 仓库objectStore

只有仓库的概念

### 索引index

可以给表字段添加索引，加快查找速率，索引不可为空

### 游标cursor

类似指针，查询某一条数据，需要让游标一行一行往下走，游标走到的地方都会返回一行数据

indexedDB查询只能通过逐渐、索引、游标方式查询数据

### 事务

支持事务，对数据库操作，只要失败，都会回滚到最初始状态

## 实操

### 打开数据库

```js
/**
 * 打开数据库
 * @param {object} dbName 数据库的名字
 * @param {string} storeName 仓库名称
 * @param {string} version 数据库的版本
 * @returns {object} 该函数会返回一个数据库实例
 */
function openDB(dbName, storeName, version = 1,) {
  return new Promise((resolve, reject) => {
    const indexedDB = window.indexedDB || window.mozIndexedDB
      || window.webkitIndexedDB || window.msIndexedDB;
    let db;
    // 打开数据库，若没有则会创建
    const request = indexedDB.open(dbName, version);
    request.onsuccess = function (event) {
      db = event.target.result;
      console.log('数据库打开成功')
      resolve(db)
    }
    request.onerror = function (event) {
      console.log('数据库打开报错', event)
    }
    // 数据库有更新的时候的回调
    request.onupgradeneeded = function (event) {
      console.log('onupgradeneeded')
      // 数据库创建或升级的时候会触发
      db = event.target.result // 数据库对象
      const objectStore = db.createObjectStore(storeName, {
        keyPath: 'uuid', // 主键
        // autoIncrement: true // 实现自增
      })
      // 创建索引，在后面查询数据的时候可以根据索引查询
      objectStore.createIndex('uuid', 'uuid', { unique: true })
      objectStore.createIndex('name', 'name', { unique: false })
      objectStore.createIndex('age', 'age', { unique: false })
    }
  })
}
```

### 插入数据

indexeddb插入数据通过事务来进行操作，利用indexeddb提供的add方法即可

* db: 创建或链接数据库时，返回的db实例
* storeName： 仓库名称，在创建或连接数据库时就已经创建好了仓库
* data：需要插入的数据

**插入的数据是一个对象，而且必须包含声明的索引键值对**

```js
/**
 * 新增数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} data 数据
 */
function addData(db, storeName, data) {
  console.log('db', db)
  const request = db.transaction([storeName], 'readwrite') // 事务对象，指定表格名称和操作模式（只读或读写
    .objectStore(storeName)
    .add(data)

  request.onsuccess = function (event) {
    console.log('数据写入成功')
  }

  request.onerror = function (event) {
    console.log('数据写入失败')
  }
}
```



### 通过主键、索引获取数据

## 查询数据

通过主键

getKey

通过游标

仓库对象openCursor

getAll 查询所有

```js
/**
 * 通过主键获取数据
 * @param {object}} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string | number}} key 主键值
 * @returns {object} 对应的行数据
 */
function getDataByKey(db, storeName, key) {
  return new Promise((resolve, reject) => {
    const transacion = db.transaction([storeName]) // 事务
    const objectStore = transacion.objectStore(storeName) // 仓库对象
    const request = objectStore.get(key)

    request.onerror = function (event) {
      console.log('事务失败', event)
      reject(event)
    }

    request.onsuccess = function (event) {
      console.log('主键查询结果：', request.result)
      resolve(request.result)
    }
  })
}
```

```js
/**
 * 通过游标查询
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @returns 查询到的数据集
 */
function cursorGetData(db, storeName) {
  return new Promise((resolve, reject) => {
    let list = []
    const store = db.transaction(storeName, 'readwrite')
      .objectStore(storeName) // 仓库对象
    const request = store.openCursor() // 指针对象
    request.onsuccess = function (e) {
      const cursor = e.target.result
      if (cursor) {
        // 必须要检查
        list.push(cursor.value)
        cursor.continue()
      } else {
        console.log('游标读取的数据', list)
        resolve(list)
      }
    }
    request.onerror = function (e) {
      reject(e)
    }
  })
}
```

```js
/**
 * 通过索引查询记录 查询到的是满足条件的第一条数据
 * @param {object}} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
function getDataByIndex(db, storeName, indexName, indexValue) {
  const store = db.transaction(storeName, 'readwrite')
    .objectStore(storeName) // 仓库对象

  const request = store.index(indexName).get(indexValue)

  request.onerror = function (e) {
    console.log('事务失败')
  }
  request.onsuccess = function (e) {
    const result = e.target.result
    console.log('索引查询结果', result)
  }
}
```

```js
/**
 * 通过游标和索引值查询数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
function cursorGetDataByIndex(db, storeName, indexName, indexValue) {
  const list = []
  const store = db.transaction(storeName, 'readwrite')
    .objectStore(storeName)
  const request = store.index(indexName)
    .openCursor(IDBKeyRange.only(indexValue))
  request.onsuccess = function (e) {
    const cursor = e.target.result
    if (cursor) {
      console.log(cursor.value)
      list.push(cursor.value)
      cursor.continue()
    } else {
      console.log('游标索引查询结果：', list)
    }
  }
  request.onerror = function (e) {
    console.log('游标索引查询失败：', e)
  }
}
```





### 通过索引和游标分页查询

advance  可以跳过指定数据进行查询

```js
/**
 * 游标和分页查询数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 * @param {number} page 页码
 * @param {number} pageSize 每页尺寸
 */
function cursorGetDataByIndexAndPage(db, storeName, indexName, indexValue, page, pageSize) {
  const list = []
  let counter = 0 // 计数器
  let advanced = true // 是否跳过多少条数据
  const store = db.transaction(storeName, 'readwrite')
    .objectStore(storeName)
  const request = store.index(indexName)
    .openCursor(IDBKeyRange.only(indexValue)) // 指针对象
  request.onsuccess = function (e) {
    let cursor = e.target.result
    if (page > 1 && advanced) {
      advanced = false
      cursor.advance((page - 1) * pageSize) // 跳过多少次
      return
    }
    if (cursor) {
      list.push(cursor.value)
      counter++
      if (counter < pageSize) {
        cursor.continue() // 遍历了存储对象中的所有内容
      } else {
        cursor = null
        console.log('分页查询结果', list)
      }
    } else {
      console.log('分页查询结果', list)
    }
  }
  request.onerror = function (e) { }
}
```

### 更新数据

```js
/**
 * 更新数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {object} data 必须含有主键的数据
 */
function updateDB(db, storeName, data) {
  const request = db.transaction([storeName], 'readwrite')
    .objectStore(storeName)
    .put(data) // 有则修改无则添加
  request.onsuccess = function (e) {
    console.log('数据更新成功', e)
  }
  request.onerror = function (e) {
    console.log('数据更新失败', e)
  }
}
```

### 通过主键删除数据

```js
/**
 * 通过主键删除数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} id 主键值
 */
function deleteDB(db, storeName, id) {
  const request = db.transaction([storeName], 'readwrite')
    .objectStore(storeName)
    .delete(id)

  request.onsuccess = function (e) {
    console.log('数据删除成功', e)
  }

  request.onerror = function (e) {
    console.log('数据删除失败', e)
  }
}
```

### 通过索引和游标删除数据

```js
/**
 * 通过索引和游标删除数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
function cursorDelete(db, storeName, indexName, indexValue) {
  const store = db.transaction(storeName, 'readwrite')
    .objectStore(storeName)
  const request = store.index(indexName)
    .openCursor(IDBKeyRange.only(indexValue)) //指针对象
  request.onsuccess = function (e) {
    const cursor = e.target.result
    let deleteRequest
    if (cursor) {
      deleteRequest = cursor.delete() // 请求删除当前项
      deleteRequest.onerror = function (error) {
        console.log('游标删除该记录失败', error)
      }

      deleteRequest.onsuccess = function (ev) {
        console.log('游标删除该记录成功', ev)
      }
      cursor.continue()
    }
  }
  request.onerror = function (e) { }
}
```

### 关闭数据库

```js
db.close()
```

