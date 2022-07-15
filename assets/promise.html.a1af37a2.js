import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.f44b82ad.js";const a={},r=s(`<h1 id="promise\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#promise\u7684\u7528\u6CD5" aria-hidden="true">#</a> Promise\u7684\u7528\u6CD5</h1><p>\u4E2D\u6587\u7FFB\u8BD1\u4E3A\u671F\u7EA6\uFF0C\u7EA6\u5B9A\uFF0C\u627F\u8BFA\uFF0C\u662F\u524D\u7AEF\u5F02\u6B65\u7F16\u7A0B\u7684\u4E00\u79CD\u65B0\u578B\u65B9\u5F0F\uFF0C\u89E3\u51B3\u4E86\u4F20\u7EDF\u56DE\u8C03\u51FD\u6570\u56DE\u8C03\u5730\u72F1\u95EE\u9898\uFF0C\u652F\u6301\u94FE\u5F0F\u8C03\u7528</p><p>promise\u4E09\u4E2A\u72B6\u6001pending\u3001fulfilled\u548Crejected\uFF0C\u4E14\u4E00\u65E6\u66F4\u6539\u4E0D\u53EF\u9006</p><p>\u4F7F\u7528Promise\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2Apromise\u5BF9\u8C61\uFF0C\u6784\u9020\u51FD\u6570\u51B3\u5B9A\u4E86promise\u5BF9\u8C61\u7684\u72B6\u6001</p><h3 id="then\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#then\u65B9\u6CD5" aria-hidden="true">#</a> then\u65B9\u6CD5</h3><p>\u4E24\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5206\u522B\u8868\u793Afulfilled\u7684\u56DE\u8C03\u548Crejected\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E5F\u662F\u4E00\u4E2Apromise\u5BF9\u8C61\uFF0C\u6240\u4EE5\u624D\u80FD\u652F\u6301\u94FE\u5F0F\u8C03\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const p = new Promise((res, rej) =&gt; {
    res(111)
})
p.then(val =&gt; {
    throw 111
}, reason =&gt; {
    console.warn(reason)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u786E\u5207\u77E5\u9053promise\u5BF9\u8C61\u7684\u72B6\u6001\u65F6\uFF0C\u53EF\u4EE5\u53EA\u5199\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\u53EA\u5199\u6210\u529F\uFF0C\u4E0D\u5199\u5931\u8D25\u7684\uFF0C\u6216\u8005\u53EA\u5199\u5931\u8D25\u7684\uFF0C\u6210\u529F\u7684\u7F6E\u4E3Aundefined</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const p = new Promise((res, rej) =&gt; {
    res(111)
})
p.then(val =&gt; {
    throw 111
}).then(undefined, reason =&gt; {
    console.warn(reason)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="catch\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#catch\u65B9\u6CD5" aria-hidden="true">#</a> catch\u65B9\u6CD5</h3><p>catch\u65B9\u6CD5\u4E00\u822C\u653E\u5728\u6700\u540E\u7528\u4EE5\u6355\u83B7\u9519\u8BEF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const p = new Promise((res, rej) =&gt; {
    res(111)
})
p.then(val =&gt; {
    throw 111
}).catch(e =&gt; {
    console.log(&#39;\u6355\u83B7\u5230\u9519\u8BEF&#39;, e)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="finally\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#finally\u65B9\u6CD5" aria-hidden="true">#</a> finally\u65B9\u6CD5</h3><p>\u6240\u6709promise\u56DE\u8C03\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\u5173\u95ED\u67D0\u4E9B\u8D44\u6E90\u7B49\u7B49</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const p = new Promsie((res) =&gt; {
    res(&#39;111&#39;)
})
p.then(val =&gt; {
    throw val
}).catch(reason =&gt; {
    console.warn(reason)
}).finally(() =&gt; {
    console.log(&#39;do something&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="all\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#all\u65B9\u6CD5" aria-hidden="true">#</a> all\u65B9\u6CD5</h3><p>\u662FPromise\u6784\u9020\u51FD\u6570\u81EA\u8EAB\u7684\u65B9\u6CD5\uFF0C\u63A5\u53D7\u4E00\u4E2Apromise \u5BF9\u8C61\u6570\u7EC4\uFF0C\u5F53\u6240\u6709promise\u5BF9\u8C61\u5168\u90E8\u90FD\u6267\u884C\u6210\u529F\uFF0Call\u65B9\u6CD5\u624D\u7B97\u6210\u529F\uFF0C\u6709\u4E00\u4E2A\u5931\u8D25\uFF0Call\u65B9\u6CD5\u5C31\u5931\u8D25</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const p1 = new Promise((res) =&gt; {
    res(111)
})
const p2 = new Promise((res) =&gt; {
    res(222)
})
const p3 = new Promise((res) =&gt; {
    res(333)
})
const p4 = new Promise((res, rej) =&gt; {
    rej(444)
})
const all1 = Promise.all([p1, p2, p3]) //resolve
const all2 = Promise.all([p1, p2, p3, p4]) // reject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="race\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#race\u65B9\u6CD5" aria-hidden="true">#</a> race\u65B9\u6CD5</h3><p>Promise\u6784\u9020\u51FD\u6570\u81EA\u8EAB\u65B9\u6CD5\uFF0C\u63A5\u53D7\u4E00\u4E2Apromise\u5BF9\u8C61\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u7ED3\u679C\u7684promise\u5BF9\u8C61\u5C31\u662Frace\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const p1 = new Promise((res) =&gt; {
    setTimeout(() =&gt; {
	    res(111)  
    })
})
const p2 = new Promise((res) =&gt; {
    res(222)
})
const p3 = new Promise((res) =&gt; {
    res(333)
})
const race = Promise.race([p1, p2, p3]) // 222
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="any\u65B9\u6CD5es2021\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#any\u65B9\u6CD5es2021\u65B0\u589E" aria-hidden="true">#</a> any\u65B9\u6CD5\u{1F195}ES2021\u65B0\u589E</h3><p>Promise\u81EA\u8EAB\u7684\u65B9\u6CD5\uFF0C\u63A5\u53D7\u4E00\u4E2Apromise\u5BF9\u8C61\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u6210\u529F\u7684promise\u5BF9\u8C61\u5C31\u662Fany\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\uFF0C\u5982\u679C\u6240\u6709\u7684promise\u5BF9\u8C61\u90FD\u8FD4\u56DE\u5931\u8D25\uFF0C\u90A3any\u5C31\u8FD4\u56DE\u5931\u8D25</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const p1 = new Promise((res, rej) =&gt; {
    setTimeout(() =&gt; {
	    res(111)  
    }, 2000)
})
const p2 = new Promise((res, rej) =&gt; {
    res(222)
})
const p3 = new Promise((res, rej) =&gt; {
    res(333)
})
const any = Promise.any([p1, p2, p3]) // \u4E24\u79D2\u540Eany\u8FD4\u56DE111
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),d=[r];function l(c,v){return i(),n("div",null,d)}var o=e(a,[["render",l],["__file","promise.html.vue"]]);export{o as default};
