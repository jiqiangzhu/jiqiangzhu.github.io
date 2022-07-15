import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as a}from"./app.f44b82ad.js";const s={},l=a(`<h1 id="async-await\u7528\u6CD5\u53CA\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#async-await\u7528\u6CD5\u53CA\u539F\u7406" aria-hidden="true">#</a> async-await\u7528\u6CD5\u53CA\u539F\u7406</h1><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><p>async\u4FEE\u9970\u7684\u65B9\u6CD5\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u8FD4\u56DE\u503C\u662F\u4E00\u4E2Apromise\u5BF9\u8C61</p><p>await\u5FC5\u987B\u5728async\u65B9\u6CD5\u4F53\u4E2D\u4F7F\u7528\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</p><p>await\u4FEE\u9970\u8BED\u53E5\u8FD4\u56DE\u7ED3\u679C\u5F88\u53EF\u80FD\u662Frejected\uFF0C\u6240\u4EE5\u6700\u540E\u5305\u62EC\u5728try catch\u8BED\u53E5\u4E2D</p><p>await\u4F1A\u963B\u585E\u4EE3\u7801\uFF0C\u6700\u540E\u540E\u9762\u8DDF\u4E00\u4E2Apromise\u5BF9\u8C61\uFF0C\u4F1A\u62FF\u5230promise\u8FD4\u56DE\u7684\u7ED3\u679C</p><p>\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> function demo() {
     fetchData().then(value =&gt; {
         console.log(&#39;\u62FF\u5230\u7684value&#39;, value)
     })
 }
// \u6362\u6210await
async function demo() {
    const result = await fetchData()
    console.log(&#39;\u62FF\u5230\u7684value&#39;, value)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="async\u548Cawait\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#async\u548Cawait\u7684\u539F\u7406" aria-hidden="true">#</a> async\u548Cawait\u7684\u539F\u7406</h2><p>async\u51FD\u6570\u5C31\u662Fgenerator\u751F\u6210\u5668\u51FD\u6570\u7684\u8BED\u6CD5\u7CD6</p><p>\u7406\u89E3async\u539F\u7406\u4E4B\u524D\u5148\u8981\u641E\u61C2\u751F\u6210\u5668\u7684\u6982\u5FF5</p><p><strong>async\u51FD\u6570\u5C31\u662F\u628A*\u66FF\u6362\u6210async\uFF0Cawait\u66FF\u6362\u6210yield</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>async function fn(args){
  // ...
}

// \u7B49\u540C\u4E8E

function fn(args){ 
  return spawn(function*() {
    // ...
  }); 
}

function spawn(genF) {
  return new Promise(function(resolve, reject) {
    var gen = genF();
    function step(nextF) {
      try {
        var next = nextF();
      } catch(e) {
        return reject(e); 
      }
      if(next.done) {
        return resolve(next.value);
      } 
      Promise.resolve(next.value).then(function(v) {
        step(function() { return gen.next(v); });      
      }, function(e) {
        step(function() { return gen.throw(e); });
      });
    }
    step(function() { return gen.next(undefined); });
  });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u751F\u6210\u5668" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u5668" aria-hidden="true">#</a> \u751F\u6210\u5668</h3><p>\u751F\u6210\u5668\u51FD\u6570\u5728\u9047\u5230 yield \u5173\u952E\u5B57\u4E4B\u524D\u4F1A\u6B63\u5E38\u6267\u884C</p><blockquote><p>* \u51FD\u6570\u540D\u79F0\u524D\u52A0\u4E00\u4E2A\u661F\u53F7\uFF08*\uFF09\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u751F\u6210\u5668</p><p>yield \u4E2D\u65AD\u751F\u6210\u5668\u51FD\u6570\u6267\u884C\u7684\u5173\u952E\u5B57</p></blockquote><p>\u8C03\u7528\u751F\u6210\u5668\u4F1A\u4EA7\u751F\u4E00\u4E2A\u751F\u6210\u5668\u5BF9\u8C61\uFF0C\u4E00\u5F00\u59CB\u5904\u4E8Esuspend\u7684\u72B6\u6001\uFF0C\u6682\u505C\u6267\u884C</p><p>\u751F\u6210\u5668\u5BF9\u8C61\u5B9E\u73B0\u4E86Iterator\u63A5\u53E3\uFF0C\u5177\u6709next\u65B9\u6CD5</p><h3 id="async\u51FD\u6570\u5BF9generator\u7684\u6539\u8FDB" tabindex="-1"><a class="header-anchor" href="#async\u51FD\u6570\u5BF9generator\u7684\u6539\u8FDB" aria-hidden="true">#</a> <strong>async\u51FD\u6570\u5BF9generator\u7684\u6539\u8FDB</strong></h3><ol><li><p>\u5185\u7F6E\u6267\u884C\u5668\uFF0C\u4E0D\u9700\u8981\u4F7F\u7528next()\u624B\u52A8\u6267\u884C\u3002</p></li><li><p>await\u547D\u4EE4\u540E\u9762\u53EF\u4EE5\u662FPromise\u5BF9\u8C61\u6216\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0Cyield\u547D\u4EE4\u540E\u9762\u53EA\u80FD\u662FThunk\u51FD\u6570\u6216Promise\u5BF9\u8C61\u3002</p></li><li><p>\u8FD4\u56DE\u503C\u662FPromise\u3002\u8FD4\u56DE\u975EPromise\u65F6\uFF0Casync\u51FD\u6570\u4F1A\u628A\u5B83\u5305\u88C5\u6210Promise\u8FD4\u56DE\u3002(Promise.resolve(value))</p></li></ol><h3 id="\u8FED\u4EE3\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3\u5668" aria-hidden="true">#</a> \u8FED\u4EE3\u5668</h3><p>\u652F\u6301\u8FED\u4EE3\u7684\u81EA\u6211\u8BC6\u522B\u80FD\u529B\u548C\u521B\u5EFA\u5B9E\u73B0 Iterator \u63A5\u53E3\u7684\u5BF9\u8C61\u7684\u80FD\u529B\u3002\u5728 ECMAScript \u4E2D\uFF0C\u8FD9\u610F\u5473\u7740\u5FC5\u987B\u66B4\u9732\u4E00\u4E2A\u5C5E\u6027\u4F5C\u4E3A\u201C\u9ED8\u8BA4\u8FED\u4EE3\u5668\u201D\uFF0C\u800C \u4E14\u8FD9\u4E2A\u5C5E\u6027\u5FC5\u987B\u4F7F\u7528\u7279\u6B8A\u7684 Symbol.iterator \u4F5C\u4E3A\u952E\u3002</p><p>\u5B9E\u73B0\u4E86Iterator\u63A5\u53E3\u7684\u7C7B\u578B</p><ul><li>\u5B57\u7B26\u4E32</li><li>\u6570\u7EC4</li><li>\u6620\u5C04</li><li>\u96C6\u5408</li><li>arguments\u5BF9\u8C61</li><li>Node List\u7B49DOM\u96C6\u5408\u7C7B\u578B</li></ul><p>\u4E3E\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const obj = {
  [Symbol.iterator]: function() {
    let index = 0
    return {
      next: function() {
        return {value: index++, done: index &gt; 5}
      }
    }
  }
}

for (let item of obj) {
  console.log(&#39;item&#39;, item); // 0 1 2 3 4
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),r=[l];function d(c,v){return n(),i("div",null,r)}var o=e(s,[["render",d],["__file","async-await.html.vue"]]);export{o as default};
