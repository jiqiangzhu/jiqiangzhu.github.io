import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as e,e as s}from"./app.f44b82ad.js";const l={},d=s(`<h1 id="\u624B\u6495\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u624B\u6495\u4EE3\u7801" aria-hidden="true">#</a> \u624B\u6495\u4EE3\u7801</h1><h3 id="\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217" aria-hidden="true">#</a> \u961F\u5217</h3><p>\u5341\u4E2A\u8BF7\u6C42\uFF0C\u653E\u5165\u8BF7\u6C42\u6C60\uFF0C\u8BF7\u6C42\u6C60\u4E00\u6B21\u6027\u53EA\u80FD\u653E\u5165\u4E09\u4E2A\uFF0C\u7ED3\u675F\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u4ECE\u8BF7\u6C42\u6C60\u4E2D\u5220\u9664\uFF0C\u52A0\u5165\u65B0\u7684\u8BF7\u6C42\u4EFB\u52A1</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface taskType {
  task: Function,
  run: Boolean
}

class Queue {
  allTask: Array&lt;Function&gt; = [];
  runTask: Array&lt;taskType&gt; = []

  constructor(...rest: Array&lt;Function&gt;) {
    //\u521D\u59CB\u5316\u6240\u6709\u4EFB\u52A1
    this.allTask = rest;
    // \u653E\u5165\u8BF7\u6C42\u6C60\u7684\u4E09\u4E2A\u521D\u59CB\u4EFB\u52A1
    const initTask = this.allTask.splice(0, 3);
    //\u6DFB\u52A0run\u6807\u8BC6
    this.runTask = initTask.map(task =&gt; {
      return {
        task,
        run: false
      }
    })
    //\u6267\u884C
    this.run();
  }

  run() {
    this.allTask.length &gt; 0 &amp;&amp; this.runTask.forEach((item, index) =&gt; {
      // \u5DF2\u7ECF\u6267\u884C\u8FC7\u7684task\u4E0D\u518D\u6267\u884C
      if (item.run) return;
      item.run = true;
      item.task().then((value: unknown) =&gt; {
        console.log(&#39;value&#39;, value)
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

//\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u4EE3\u7801
function fun1() {
  return new Promise(resolve =&gt; {
    setTimeout(()=&gt;{
      resolve(fun1.name)
    }, 1000)
  })
}
function fun2() {
  return new Promise(resolve =&gt; {
    setTimeout(()=&gt;{
      resolve(fun2.name)
    }, 2000)
  })
}
function fun3() {
  return new Promise(resolve =&gt; {
    setTimeout(()=&gt;{
      resolve(fun3.name)
    }, 300)
  })
}

function fun4() {
  return new Promise(resolve =&gt; {
    setTimeout(()=&gt;{
      resolve(fun4.name)
    }, 1000)
  })
}
function fun5() {
  return new Promise(resolve =&gt; {
    setTimeout(()=&gt;{
      resolve(fun5.name)
    }, 1000)
  })
}
function fun6() {
  return new Promise(resolve =&gt; {
    setTimeout(()=&gt;{
      resolve(fun6.name)
    }, 300)
  })
}

new Queue(fun1, fun2, fun3, fun4, fun5, fun6)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u56FE\u7247\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u5206\u7C7B" aria-hidden="true">#</a> \u56FE\u7247\u5206\u7C7B</h3><p><strong>\u8865\u5145\u4E0B\u9762\u4EE3\u7801\uFF0C\u4FDD\u8BC1\u80FD\u8F93\u51FA\u4EE5\u4E0B\u7ED3\u679C</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const image = new ImagesManage([1, 2, 3, 4, 5]);
image.setImageGroup(4, &quot;apple&quot;);
console.log(image.getAllImage()); // [4, 1, 2, 3, 5]
image.setImageGroup(2, &quot;dog&quot;);
console.log(image.getAllImage()); // [4, 2, 1, 3, 5]
image.setImageGroup(3, &quot;apple&quot;);
console.log(image.getAllImage()); // [4, 3, 2, 1, 5]
image.setImageGroup(3, &quot;dog&quot;);
console.log(image.getAllImage()); // [4, 2, 3, 1, 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>class ImagesManage {
  // [1, 2, 3, 4, 5]
  constructor(ids) {
    // \u672A\u5206\u7C7B
    this.ids = ids;
    this.groups = {};
  }
  // \u5206\u7EC4
  setImageGroup(id, group_name) {
    const ind = this.ids.indexOf(id);
    // \u5982\u679C\u5B58\u5728\u5C06\u6B64id\u4ECE\u672A\u5206\u7C7B\u7684\u6570\u7EC4\u4E2D\u5254\u9664
    ind !== -1 &amp;&amp; this.ids.splice(ind, 1);
    // \u5224\u65AD\u662F\u5426\u4E3A\u91CD\u65B0\u8D4B\u503C\u7684id
    let flag = false;
    Object.keys(this.groups).forEach((name) =&gt; {
      this.groups[name] = this.groups[name] || [];
      // \u5224\u65AD\u662F\u5426\u5DF2\u7ECF\u5206\u7C7B\u4E86
      const index = this.groups[name].indexOf(id)
      if (index !== -1 &amp;&amp; name !== group_name) {
        flag = true;
        // \u5220\u9664\u65E7\u7684
        this.groups[name].splice(index, 1);
        // \u91CD\u65B0\u5206\u7EC4
        this.groups[group_name] = this.groups[group_name] || [];
        this.groups[group_name].push(id);
      }
    });
    // \u672A\u5206\u7C7B
    if (!flag) { 
      this.groups[group_name] = this.groups[group_name] || [];
      this.groups[group_name].push(id);
    }
  }
  // \u6309\u7167\u5206\u7EC4\u540D\u79F0\u8FDB\u884C\u6392\u5E8F\u540E\u8FD4\u56DE\uFF0C\u5206\u7EC4\u7684\u4F18\u5148\u8F93\u51FA
  getAllImage() {
    const arr = [];
    Object.keys(this.groups).sort().forEach(name =&gt; {
      arr.push(...this.groups[name])
    })
    arr.push(...this.ids)
    return arr;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u4E00\u4E2Aevent-bus" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2Aevent-bus" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2AEvent-Bus</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>class EventBus {
  cbs: any = {}

  on(type: string, cb: Function) {
    this.cbs[type] = this.cbs[type] || [];
    this.cbs.push({cb, once: false})
  }

  emit(name: string, ...rest: any) {
    Array.isArray(this.cbs[name]) &amp;&amp; this.cbs[name].forEach((item, index) =&gt; {
      item.cb &amp;&amp; item.cb()
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9012\u5F52\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u9012\u5F52\u8FC7\u6EE4\u5668</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function filter(array: Array&lt;any&gt;, target: string): Array&lt;any&gt; {
  const result: Array&lt;any&gt; = []
  for (let i = 0; i &lt; array.length; i++) {
    // name\u76F4\u63A5\u7B49\u4E8Etarget\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5F53\u524D\u9879
    if (array[i].name === target) {
      result.push(array[i]);
      // name\u4E0D\u7B49\u4E8Etarget\uFF0Cchildren length\u5927\u4E8E0
    } else if (array[i].children &amp;&amp; array[i].children.length &gt; 0) {
      // \u9012\u5F52\uFF0C\u67E5\u8BE2children\u4E2D\u662F\u5426\u542B\u6709\u76EE\u6807\u503C
      const res = filter(array[i].children, target);
      //\u542B\u6709\u76EE\u6807\u503C\uFF0C\u8981\u5254\u9664\u975E\u76EE\u6807\u503C\u7684\u9879
      if (res.length &gt; 0) {
        result.push({
          name: array[i].name,
          children: res
        })
      }
    }
  }
  return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5408\u6CD5\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5408\u6CD5\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5408\u6CD5\u5B57\u7B26\u4E32</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function solution(str) {
  const obj = {
    &quot;)&quot;: &quot;(&quot;,
  };
  const array = [];
  for (let i = 0; i &lt; str.length; i++) {
    if (array.length &gt; 0 &amp;&amp; obj[str[i]] === array[array.length - 1]) {
      array.pop();
      continue;
    }
    array.push(str[i]);
  }
  return array.length === 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u4E00\u4E2A\u5C0F\u9A7C\u5CF0\u547D\u540D\u7684\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u5C0F\u9A7C\u5CF0\u547D\u540D\u7684\u51FD\u6570" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A\u5C0F\u9A7C\u5CF0\u547D\u540D\u7684\u51FD\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function solution(str) {
  const arr = str.split(&#39;&#39;);
  console.log(arr);
  for (let i = 0; i &lt; arr.length; i++) {
    if (i === 0) {
      arr[i] = arr[i].toLowerCase()
    } else if (arr[i] === &#39;_&#39;){
      arr.splice(i, 1);
      arr[i] = arr[i].toUpperCase()
      console.log(&#39;str&#39;, str);
    }
  }
  return arr.join(&#39;&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0promise-finally" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0promise-finally" aria-hidden="true">#</a> \u5B9E\u73B0promise.finally</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const finally = (executor = new Function) =&gt; {
    return this.then((value: unknown) =&gt; { 
        return myPromise.resolve(executor()).then(() =&gt; value) // \u4E3A\u4E86\u5C06\u503C\u7EE7\u7EED\u4F20\u9012\u4F9B\u94FE\u5F0F\u8C03\u7528
    }, (reason: any) =&gt; {
        return myPromise.resolve(executor()).then(() =&gt; { //\u4E3A\u4E86\u5C06\u503C\u7EE7\u7EED\u4F20\u9012\u4F9B\u94FE\u5F0F\u8C03\u7528
            throw reason
        })
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),a=[d];function r(v,u){return i(),e("div",null,a)}var t=n(l,[["render",r],["__file","code.html.vue"]]);export{t as default};
