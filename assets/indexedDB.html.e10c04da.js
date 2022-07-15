import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as s}from"./app.f44b82ad.js";const d={},r=s(`<h1 id="\u524D\u7AEF\u672C\u5730\u5B58\u50A8indexeddb" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u672C\u5730\u5B58\u50A8indexeddb" aria-hidden="true">#</a> \u524D\u7AEF\u672C\u5730\u5B58\u50A8indexedDB</h1><p>\u662F\u5E95\u5C42API\uFF0C\u7528\u4E8E\u5728\u5BA2\u6237\u7AEF\u5B58\u50A8\u5927\u91CF\u7ED3\u6784\u5316\u6570\u636E\uFF0C\u7B26\u5408\u540C\u6E90\u7B56\u7565\uFF0C\u53EA\u80FD\u624B\u52A8\u66F4\u65B0\u6216\u5220\u9664</p><p>webSQL\u5DF2\u5E9F\u5F03</p><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><ol><li>\u6570\u636E\u53EF\u89C6\u5316\u7B49\u754C\u9762\uFF0C\u5927\u91CF\u6570\u636E\uFF0C\u6BCF\u6B21\u8BF7\u6C42\u4F1A\u6D88\u8017\u5F88\u5927\u6027\u80FD</li><li>\u5373\u65F6\u804A\u5929\u5DE5\u5177\uFF0C\u5927\u91CF\u6D88\u606F\u9700\u8981\u5B58\u5728\u672C\u5730</li><li>\u5176\u4ED6\u5B58\u50A8\u65B9\u5F0F\u5BB9\u91CF\u4E0D\u6EE1\u8DB3\u65F6\uFF0C\u4E0D\u5F97\u5DF2\u4F7F\u7528indexedDB</li></ol><p>\u7B49\u7B49</p><h2 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h2><ul><li>\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93(noSql)</li></ul><p>\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u7279\u70B9\u662F\u4EE5\u4E00\u5F20\u4E8C\u7EF4\u8868\u7684\u5F62\u5F0F\u5B58\u50A8\uFF0CindexDB\u662F\u975E\u5173\u7CFB\u578B \u6570\u636E\u5E93\uFF0C\u4E3B\u8981\u4EE5\u952E\u503C\u5BF9\u5F62\u5F0F\u5B58\u50A8</p><ul><li>js\u5BF9\u8C61\u5F0F\u5B58\u50A8\u65B9\u5F0F</li></ul><p>cookie\u3001localStorage\u3001sessionStorage\u7B49\u65B9\u5F0F\u5B58\u50A8\u7684\u6570\u636E\u5F53\u6E05\u9664\u6D4F\u89C8\u5668\u7F13\u5B58\u540E\uFF0C\u90FD\u4F1A\u6B38\u6E05\u9664\u6389\uFF0C\u800C\u4F7F\u7528indexedDB\u5B58\u50A8\u7684\u6570\u636E\u4E0D\u4F1A\uFF0C<strong>\u9664\u975E\u624B\u52A8\u5220\u9664\u6570\u636E\u5E93</strong></p><ul><li>\u65E0\u5927\u5C0F\u9650\u5236</li></ul><p>\u5B58\u50A8\u5BB9\u91CF\u5927</p><ul><li>\u4E0D\u4F1A\u963B\u585E\u6D4F\u89C8\u5668</li></ul><p>indexdb\u64CD\u4F5C\u662F\u5F02\u6B65\u64CD\u4F5C\uFF0C\u4E0D\u4F1A\u9501\u6B7B\u6D4F\u89C8\u5668\uFF0C\u7528\u6237\u4F9D\u7136\u53EF\u4EE5\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\uFF0ClocalStorage\u662F\u540C\u6B65\u7684</p><ul><li>\u652F\u6301\u4E8B\u52A1</li></ul><p>\u652F\u6301transaction\uFF0C\u610F\u5473\u7740\u4E00\u7CFB\u5217\u7684\u64CD\u4F5C\u6B65\u9AA4\u4E4B\u4E2D\uFF0C\u53EA\u8981\u6709\u4E00\u6B65\u5931\u8D25\uFF0C<strong>\u6574\u4E2A\u4E8B\u52A1\u90FD\u4F1A\u53D6\u6D88\uFF0C\u6570\u636E\u5E93\u56DE\u6EDA\u5230\u4E8B\u52A1\u53D1\u751F\u4E4B\u524D\u7684\u72B6\u6001</strong>\uFF0C\u4E0Emysql\u7B49\u6570\u636E\u5E93\u7684\u4E8B\u52A1\u7C7B\u4F3C</p><ul><li>\u540C\u6E90\u7B56\u7565</li></ul><p>\u9075\u5FAA\u540C\u6E90\u7B56\u7565\uFF0C\u6BCF\u4E2A\u6570\u636E\u5E93\u5BF9\u5E94\u521B\u5EFA\u4ED6\u7684\u57DF\u540D\uFF0C\u7F51\u9875\u53EA\u80FD\u8BBF\u95EE\u81EA\u8EAB\u57DF\u540D\u4E0B\u7684\u6570\u636E\u5E93\uFF0C\u4E0D\u80FD\u8DE8\u8D8A</p><h2 id="\u91CD\u8981\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8981\u6982\u5FF5" aria-hidden="true">#</a> \u91CD\u8981\u6982\u5FF5</h2><h3 id="\u4ED3\u5E93objectstore" tabindex="-1"><a class="header-anchor" href="#\u4ED3\u5E93objectstore" aria-hidden="true">#</a> \u4ED3\u5E93objectStore</h3><p>\u53EA\u6709\u4ED3\u5E93\u7684\u6982\u5FF5</p><h3 id="\u7D22\u5F15index" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15index" aria-hidden="true">#</a> \u7D22\u5F15index</h3><p>\u53EF\u4EE5\u7ED9\u8868\u5B57\u6BB5\u6DFB\u52A0\u7D22\u5F15\uFF0C\u52A0\u5FEB\u67E5\u627E\u901F\u7387\uFF0C\u7D22\u5F15\u4E0D\u53EF\u4E3A\u7A7A</p><h3 id="\u6E38\u6807cursor" tabindex="-1"><a class="header-anchor" href="#\u6E38\u6807cursor" aria-hidden="true">#</a> \u6E38\u6807cursor</h3><p>\u7C7B\u4F3C\u6307\u9488\uFF0C\u67E5\u8BE2\u67D0\u4E00\u6761\u6570\u636E\uFF0C\u9700\u8981\u8BA9\u6E38\u6807\u4E00\u884C\u4E00\u884C\u5F80\u4E0B\u8D70\uFF0C\u6E38\u6807\u8D70\u5230\u7684\u5730\u65B9\u90FD\u4F1A\u8FD4\u56DE\u4E00\u884C\u6570\u636E</p><p>indexedDB\u67E5\u8BE2\u53EA\u80FD\u901A\u8FC7\u9010\u6E10\u3001\u7D22\u5F15\u3001\u6E38\u6807\u65B9\u5F0F\u67E5\u8BE2\u6570\u636E</p><h3 id="\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1" aria-hidden="true">#</a> \u4E8B\u52A1</h3><p>\u652F\u6301\u4E8B\u52A1\uFF0C\u5BF9\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u53EA\u8981\u5931\u8D25\uFF0C\u90FD\u4F1A\u56DE\u6EDA\u5230\u6700\u521D\u59CB\u72B6\u6001</p><h2 id="\u5B9E\u64CD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u64CD" aria-hidden="true">#</a> \u5B9E\u64CD</h2><h3 id="\u6253\u5F00\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u6570\u636E\u5E93" aria-hidden="true">#</a> \u6253\u5F00\u6570\u636E\u5E93</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u6253\u5F00\u6570\u636E\u5E93
 * @param {object} dbName \u6570\u636E\u5E93\u7684\u540D\u5B57
 * @param {string} storeName \u4ED3\u5E93\u540D\u79F0
 * @param {string} version \u6570\u636E\u5E93\u7684\u7248\u672C
 * @returns {object} \u8BE5\u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6570\u636E\u5E93\u5B9E\u4F8B
 */
function openDB(dbName, storeName, version = 1,) {
  return new Promise((resolve, reject) =&gt; {
    const indexedDB = window.indexedDB || window.mozIndexedDB
      || window.webkitIndexedDB || window.msIndexedDB;
    let db;
    // \u6253\u5F00\u6570\u636E\u5E93\uFF0C\u82E5\u6CA1\u6709\u5219\u4F1A\u521B\u5EFA
    const request = indexedDB.open(dbName, version);
    request.onsuccess = function (event) {
      db = event.target.result;
      console.log(&#39;\u6570\u636E\u5E93\u6253\u5F00\u6210\u529F&#39;)
      resolve(db)
    }
    request.onerror = function (event) {
      console.log(&#39;\u6570\u636E\u5E93\u6253\u5F00\u62A5\u9519&#39;, event)
    }
    // \u6570\u636E\u5E93\u6709\u66F4\u65B0\u7684\u65F6\u5019\u7684\u56DE\u8C03
    request.onupgradeneeded = function (event) {
      console.log(&#39;onupgradeneeded&#39;)
      // \u6570\u636E\u5E93\u521B\u5EFA\u6216\u5347\u7EA7\u7684\u65F6\u5019\u4F1A\u89E6\u53D1
      db = event.target.result // \u6570\u636E\u5E93\u5BF9\u8C61
      const objectStore = db.createObjectStore(storeName, {
        keyPath: &#39;uuid&#39;, // \u4E3B\u952E
        // autoIncrement: true // \u5B9E\u73B0\u81EA\u589E
      })
      // \u521B\u5EFA\u7D22\u5F15\uFF0C\u5728\u540E\u9762\u67E5\u8BE2\u6570\u636E\u7684\u65F6\u5019\u53EF\u4EE5\u6839\u636E\u7D22\u5F15\u67E5\u8BE2
      objectStore.createIndex(&#39;uuid&#39;, &#39;uuid&#39;, { unique: true })
      objectStore.createIndex(&#39;name&#39;, &#39;name&#39;, { unique: false })
      objectStore.createIndex(&#39;age&#39;, &#39;age&#39;, { unique: false })
    }
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u63D2\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6570\u636E" aria-hidden="true">#</a> \u63D2\u5165\u6570\u636E</h3><p>indexeddb\u63D2\u5165\u6570\u636E\u901A\u8FC7\u4E8B\u52A1\u6765\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5229\u7528indexeddb\u63D0\u4F9B\u7684add\u65B9\u6CD5\u5373\u53EF</p><ul><li>db: \u521B\u5EFA\u6216\u94FE\u63A5\u6570\u636E\u5E93\u65F6\uFF0C\u8FD4\u56DE\u7684db\u5B9E\u4F8B</li><li>storeName\uFF1A \u4ED3\u5E93\u540D\u79F0\uFF0C\u5728\u521B\u5EFA\u6216\u8FDE\u63A5\u6570\u636E\u5E93\u65F6\u5C31\u5DF2\u7ECF\u521B\u5EFA\u597D\u4E86\u4ED3\u5E93</li><li>data\uFF1A\u9700\u8981\u63D2\u5165\u7684\u6570\u636E</li></ul><p><strong>\u63D2\u5165\u7684\u6570\u636E\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u800C\u4E14\u5FC5\u987B\u5305\u542B\u58F0\u660E\u7684\u7D22\u5F15\u952E\u503C\u5BF9</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u65B0\u589E\u6570\u636E
 * @param {object} db \u6570\u636E\u5E93\u5B9E\u4F8B
 * @param {string} storeName \u4ED3\u5E93\u540D\u79F0
 * @param {string} data \u6570\u636E
 */
function addData(db, storeName, data) {
  console.log(&#39;db&#39;, db)
  const request = db.transaction([storeName], &#39;readwrite&#39;) // \u4E8B\u52A1\u5BF9\u8C61\uFF0C\u6307\u5B9A\u8868\u683C\u540D\u79F0\u548C\u64CD\u4F5C\u6A21\u5F0F\uFF08\u53EA\u8BFB\u6216\u8BFB\u5199
    .objectStore(storeName)
    .add(data)

  request.onsuccess = function (event) {
    console.log(&#39;\u6570\u636E\u5199\u5165\u6210\u529F&#39;)
  }

  request.onerror = function (event) {
    console.log(&#39;\u6570\u636E\u5199\u5165\u5931\u8D25&#39;)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u901A\u8FC7\u4E3B\u952E\u3001\u7D22\u5F15\u83B7\u53D6\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u4E3B\u952E\u3001\u7D22\u5F15\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7\u4E3B\u952E\u3001\u7D22\u5F15\u83B7\u53D6\u6570\u636E</h3><h2 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h2><p>\u901A\u8FC7\u4E3B\u952E</p><p>getKey</p><p>\u901A\u8FC7\u6E38\u6807</p><p>\u4ED3\u5E93\u5BF9\u8C61openCursor</p><p>getAll \u67E5\u8BE2\u6240\u6709</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u901A\u8FC7\u4E3B\u952E\u83B7\u53D6\u6570\u636E
 * @param {object}} db \u6570\u636E\u5E93\u5B9E\u4F8B
 * @param {string} storeName \u4ED3\u5E93\u540D\u79F0
 * @param {string | number}} key \u4E3B\u952E\u503C
 * @returns {object} \u5BF9\u5E94\u7684\u884C\u6570\u636E
 */
function getDataByKey(db, storeName, key) {
  return new Promise((resolve, reject) =&gt; {
    const transacion = db.transaction([storeName]) // \u4E8B\u52A1
    const objectStore = transacion.objectStore(storeName) // \u4ED3\u5E93\u5BF9\u8C61
    const request = objectStore.get(key)

    request.onerror = function (event) {
      console.log(&#39;\u4E8B\u52A1\u5931\u8D25&#39;, event)
      reject(event)
    }

    request.onsuccess = function (event) {
      console.log(&#39;\u4E3B\u952E\u67E5\u8BE2\u7ED3\u679C\uFF1A&#39;, request.result)
      resolve(request.result)
    }
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u901A\u8FC7\u6E38\u6807\u67E5\u8BE2
 * @param {object} db \u6570\u636E\u5E93\u5B9E\u4F8B
 * @param {string} storeName \u4ED3\u5E93\u540D\u79F0
 * @returns \u67E5\u8BE2\u5230\u7684\u6570\u636E\u96C6
 */
function cursorGetData(db, storeName) {
  return new Promise((resolve, reject) =&gt; {
    let list = []
    const store = db.transaction(storeName, &#39;readwrite&#39;)
      .objectStore(storeName) // \u4ED3\u5E93\u5BF9\u8C61
    const request = store.openCursor() // \u6307\u9488\u5BF9\u8C61
    request.onsuccess = function (e) {
      const cursor = e.target.result
      if (cursor) {
        // \u5FC5\u987B\u8981\u68C0\u67E5
        list.push(cursor.value)
        cursor.continue()
      } else {
        console.log(&#39;\u6E38\u6807\u8BFB\u53D6\u7684\u6570\u636E&#39;, list)
        resolve(list)
      }
    }
    request.onerror = function (e) {
      reject(e)
    }
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u901A\u8FC7\u7D22\u5F15\u67E5\u8BE2\u8BB0\u5F55 \u67E5\u8BE2\u5230\u7684\u662F\u6EE1\u8DB3\u6761\u4EF6\u7684\u7B2C\u4E00\u6761\u6570\u636E
 * @param {object}} db \u6570\u636E\u5E93\u5B9E\u4F8B
 * @param {string} storeName \u4ED3\u5E93\u540D\u79F0
 * @param {string} indexName \u7D22\u5F15\u540D\u79F0
 * @param {string} indexValue \u7D22\u5F15\u503C
 */
function getDataByIndex(db, storeName, indexName, indexValue) {
  const store = db.transaction(storeName, &#39;readwrite&#39;)
    .objectStore(storeName) // \u4ED3\u5E93\u5BF9\u8C61

  const request = store.index(indexName).get(indexValue)

  request.onerror = function (e) {
    console.log(&#39;\u4E8B\u52A1\u5931\u8D25&#39;)
  }
  request.onsuccess = function (e) {
    const result = e.target.result
    console.log(&#39;\u7D22\u5F15\u67E5\u8BE2\u7ED3\u679C&#39;, result)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u901A\u8FC7\u6E38\u6807\u548C\u7D22\u5F15\u503C\u67E5\u8BE2\u6570\u636E
 * @param {object} db \u6570\u636E\u5E93\u5B9E\u4F8B
 * @param {string} storeName \u4ED3\u5E93\u540D\u79F0
 * @param {string} indexName \u7D22\u5F15\u540D\u79F0
 * @param {string} indexValue \u7D22\u5F15\u503C
 */
function cursorGetDataByIndex(db, storeName, indexName, indexValue) {
  const list = []
  const store = db.transaction(storeName, &#39;readwrite&#39;)
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
      console.log(&#39;\u6E38\u6807\u7D22\u5F15\u67E5\u8BE2\u7ED3\u679C\uFF1A&#39;, list)
    }
  }
  request.onerror = function (e) {
    console.log(&#39;\u6E38\u6807\u7D22\u5F15\u67E5\u8BE2\u5931\u8D25\uFF1A&#39;, e)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u901A\u8FC7\u7D22\u5F15\u548C\u6E38\u6807\u5206\u9875\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u7D22\u5F15\u548C\u6E38\u6807\u5206\u9875\u67E5\u8BE2" aria-hidden="true">#</a> \u901A\u8FC7\u7D22\u5F15\u548C\u6E38\u6807\u5206\u9875\u67E5\u8BE2</h3><p>advance \u53EF\u4EE5\u8DF3\u8FC7\u6307\u5B9A\u6570\u636E\u8FDB\u884C\u67E5\u8BE2</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u6E38\u6807\u548C\u5206\u9875\u67E5\u8BE2\u6570\u636E
 * @param {object} db \u6570\u636E\u5E93\u5B9E\u4F8B
 * @param {string} storeName \u4ED3\u5E93\u540D\u79F0
 * @param {string} indexName \u7D22\u5F15\u540D\u79F0
 * @param {string} indexValue \u7D22\u5F15\u503C
 * @param {number} page \u9875\u7801
 * @param {number} pageSize \u6BCF\u9875\u5C3A\u5BF8
 */
function cursorGetDataByIndexAndPage(db, storeName, indexName, indexValue, page, pageSize) {
  const list = []
  let counter = 0 // \u8BA1\u6570\u5668
  let advanced = true // \u662F\u5426\u8DF3\u8FC7\u591A\u5C11\u6761\u6570\u636E
  const store = db.transaction(storeName, &#39;readwrite&#39;)
    .objectStore(storeName)
  const request = store.index(indexName)
    .openCursor(IDBKeyRange.only(indexValue)) // \u6307\u9488\u5BF9\u8C61
  request.onsuccess = function (e) {
    let cursor = e.target.result
    if (page &gt; 1 &amp;&amp; advanced) {
      advanced = false
      cursor.advance((page - 1) * pageSize) // \u8DF3\u8FC7\u591A\u5C11\u6B21
      return
    }
    if (cursor) {
      list.push(cursor.value)
      counter++
      if (counter &lt; pageSize) {
        cursor.continue() // \u904D\u5386\u4E86\u5B58\u50A8\u5BF9\u8C61\u4E2D\u7684\u6240\u6709\u5185\u5BB9
      } else {
        cursor = null
        console.log(&#39;\u5206\u9875\u67E5\u8BE2\u7ED3\u679C&#39;, list)
      }
    } else {
      console.log(&#39;\u5206\u9875\u67E5\u8BE2\u7ED3\u679C&#39;, list)
    }
  }
  request.onerror = function (e) { }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u66F4\u65B0\u6570\u636E
 * @param {object} db \u6570\u636E\u5E93\u5B9E\u4F8B
 * @param {string} storeName \u4ED3\u5E93\u540D\u79F0
 * @param {object} data \u5FC5\u987B\u542B\u6709\u4E3B\u952E\u7684\u6570\u636E
 */
function updateDB(db, storeName, data) {
  const request = db.transaction([storeName], &#39;readwrite&#39;)
    .objectStore(storeName)
    .put(data) // \u6709\u5219\u4FEE\u6539\u65E0\u5219\u6DFB\u52A0
  request.onsuccess = function (e) {
    console.log(&#39;\u6570\u636E\u66F4\u65B0\u6210\u529F&#39;, e)
  }
  request.onerror = function (e) {
    console.log(&#39;\u6570\u636E\u66F4\u65B0\u5931\u8D25&#39;, e)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u901A\u8FC7\u4E3B\u952E\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u4E3B\u952E\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7\u4E3B\u952E\u5220\u9664\u6570\u636E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u901A\u8FC7\u4E3B\u952E\u5220\u9664\u6570\u636E
 * @param {object} db \u6570\u636E\u5E93\u5B9E\u4F8B
 * @param {string} storeName \u4ED3\u5E93\u540D\u79F0
 * @param {string} id \u4E3B\u952E\u503C
 */
function deleteDB(db, storeName, id) {
  const request = db.transaction([storeName], &#39;readwrite&#39;)
    .objectStore(storeName)
    .delete(id)

  request.onsuccess = function (e) {
    console.log(&#39;\u6570\u636E\u5220\u9664\u6210\u529F&#39;, e)
  }

  request.onerror = function (e) {
    console.log(&#39;\u6570\u636E\u5220\u9664\u5931\u8D25&#39;, e)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u901A\u8FC7\u7D22\u5F15\u548C\u6E38\u6807\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u7D22\u5F15\u548C\u6E38\u6807\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7\u7D22\u5F15\u548C\u6E38\u6807\u5220\u9664\u6570\u636E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u901A\u8FC7\u7D22\u5F15\u548C\u6E38\u6807\u5220\u9664\u6570\u636E
 * @param {object} db \u6570\u636E\u5E93\u5B9E\u4F8B
 * @param {string} storeName \u4ED3\u5E93\u540D\u79F0
 * @param {string} indexName \u7D22\u5F15\u540D\u79F0
 * @param {string} indexValue \u7D22\u5F15\u503C
 */
function cursorDelete(db, storeName, indexName, indexValue) {
  const store = db.transaction(storeName, &#39;readwrite&#39;)
    .objectStore(storeName)
  const request = store.index(indexName)
    .openCursor(IDBKeyRange.only(indexValue)) //\u6307\u9488\u5BF9\u8C61
  request.onsuccess = function (e) {
    const cursor = e.target.result
    let deleteRequest
    if (cursor) {
      deleteRequest = cursor.delete() // \u8BF7\u6C42\u5220\u9664\u5F53\u524D\u9879
      deleteRequest.onerror = function (error) {
        console.log(&#39;\u6E38\u6807\u5220\u9664\u8BE5\u8BB0\u5F55\u5931\u8D25&#39;, error)
      }

      deleteRequest.onsuccess = function (ev) {
        console.log(&#39;\u6E38\u6807\u5220\u9664\u8BE5\u8BB0\u5F55\u6210\u529F&#39;, ev)
      }
      cursor.continue()
    }
  }
  request.onerror = function (e) { }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u95ED\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u6570\u636E\u5E93" aria-hidden="true">#</a> \u5173\u95ED\u6570\u636E\u5E93</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>db.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,59),a=[r];function l(v,c){return n(),i("div",null,a)}var o=e(d,[["render",l],["__file","indexedDB.html.vue"]]);export{o as default};
