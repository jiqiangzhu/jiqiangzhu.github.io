import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.f44b82ad.js";const l={},a=s(`<h1 id="\u7ECF\u5178\u9762\u8BD5\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u7ECF\u5178\u9762\u8BD5\u9898\u76EE" aria-hidden="true">#</a> \u7ECF\u5178\u9762\u8BD5\u9898\u76EE</h1><h2 id="\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u89C2\u5BDF\u8005\u6A21\u5F0F\u{1F525}</h2><p>\u8BF7\u8865\u5168JavaScript\u4EE3\u7801\uFF0C\u5B8C\u6210&quot;Observer&quot;\u3001&quot;Observerd&quot;\u7C7B\u5B9E\u73B0\u89C2\u5BDF\u8005\u6A21\u5F0F\u3002\u8981\u6C42\u5982\u4E0B\uFF1A</p><ol><li><p>\u88AB\u89C2\u5BDF\u8005\u6784\u9020\u51FD\u6570\u9700\u8981\u5305\u542B&quot;name&quot;\u5C5E\u6027\u548C&quot;state&quot;\u5C5E\u6027\u4E14&quot;state&quot;\u521D\u59CB\u503C\u4E3A&quot;\u8D70\u8DEF&quot;</p></li><li><p>\u88AB\u89C2\u5BDF\u8005\u521B\u5EFA&quot;setObserver&quot;\u51FD\u6570\u7528\u4E8E\u4FDD\u5B58\u89C2\u5BDF\u8005\u4EEC</p></li><li><p>\u88AB\u89C2\u5BDF\u8005\u521B\u5EFA&quot;setState&quot;\u51FD\u6570\u7528\u4E8E\u8BBE\u7F6E\u8BE5\u89C2\u5BDF\u8005&quot;state&quot;\u5E76\u4E14\u901A\u77E5\u6240\u6709\u89C2\u5BDF\u8005</p></li><li><p>\u89C2\u5BDF\u8005\u521B\u5EFA&quot;update&quot;\u51FD\u6570\u7528\u4E8E\u88AB\u89C2\u5BDF\u8005\u8FDB\u884C\u6D88\u606F\u901A\u77E5\uFF0C\u8BE5\u51FD\u6570\u9700\u8981\u6253\u5370\uFF08console.log\uFF09\u6570\u636E\uFF0C\u6570\u636E\u683C\u5F0F\u4E3A\uFF1A\u5C0F\u660E\u6B63\u5728\u8D70\u8DEF\u3002\u5176\u4E2D&quot;\u5C0F\u660E&quot;\u4E3A\u88AB\u89C2\u5BDF\u8005\u7684&quot;name&quot;\u5C5E\u6027\uFF0C&quot;\u8D70\u8DEF&quot;\u4E3A\u88AB\u89C2\u5BDF\u8005\u7684&quot;state&quot;\u5C5E\u6027</p></li><li><p>&quot;Observer&quot;\u4E3A\u89C2\u5BDF\u8005\uFF0C&quot;Observerd&quot;\u4E3A\u88AB\u89C2\u5BDF\u8005</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>class Observerd {
  constructor(name) {
    this.name = name
    this.state = &#39;\u8D70\u8DEF&#39;
  }
  observeArr = []
  setObserver(observe) {
    this.observeArr.push(observe)
  }
  setState(state = &#39;\u8D70\u8DEF&#39;) {
    this.observeArr.forEach(item =&gt; {
      item.update(this.name, state)
    })
  }
}
class Observer {
  update(name, state) {
    console.log(\`\${name}\u6B63\u5728\${state}\`)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a> \u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u2B50</h2><p>\u8BF7\u8865\u5168JavaScript\u4EE3\u7801\uFF0C\u5B8C\u6210&quot;EventEmitter&quot;\u7C7B\u5B9E\u73B0\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u3002 \u6CE8\u610F\uFF1A</p><ol><li><p>\u540C\u4E00\u540D\u79F0\u4E8B\u4EF6\u53EF\u80FD\u6709\u591A\u4E2A\u4E0D\u540C\u7684\u6267\u884C\u51FD\u6570</p></li><li><p>\u901A\u8FC7&quot;on&quot;\u51FD\u6570\u6DFB\u52A0\u4E8B\u4EF6</p></li><li><p>\u901A\u8FC7&quot;emit&quot;\u51FD\u6570\u89E6\u53D1\u4E8B\u4EF6</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>class EventEmitter {
  cb = {}
  on(name, fn) {
    if (!Array.isArray(this.cb[name])) {
      this.cb[name] = []
    }
    this.cb[name].push(fn)
  }
  emit(name, ...rest) {
    this.cb[name] &amp;&amp; this.cb[name].forEach(item =&gt; {
      item(...rest)
    })
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D\u2B50</h2><p>\u6B63\u5219\u8868\u8FBE\u5F0F\u540E\u7F00</p><ul><li>/i (\u5FFD\u7565\u5927\u5C0F\u5199)</li><li>/g (\u5168\u6587\u67E5\u627E\u51FA\u73B0\u7684\u6240\u6709\u5339\u914D\u5B57\u7B26)</li><li>/m (\u591A\u884C\u67E5\u627E)</li><li>/gi(\u5168\u6587\u67E5\u627E\u3001\u5FFD\u7565\u5927\u5C0F\u5199)</li><li>/ig(\u5168\u6587\u67E5\u627E\u3001\u5FFD\u7565\u5927\u5C0F\u5199)</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function deepClone(target, weakMap = new WeakMap()) {
  if (typeof target !== &#39;object&#39;) {
    return target
  } else {
    const Cons = target.constructor
    if (/^(Function|Map|Set|RegExp|Date)$/i.test(Cons.name)) return new Cons(target)
    if (weakMap.get(target)) return weakMap.get(target)
    const desc = Object.getOwnPropertyDescriptors(target)
    const result = Object.create(target, desc)
    weakMap.set(target, result)
    for (let prop in result) {
      if (target.hasOwnProperty(prop)) {
        result[prop] = deepClone(target[prop], weakMap)
      }
    }
    return result;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9632\u6296\u4E0E\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296\u4E0E\u8282\u6D41" aria-hidden="true">#</a> \u9632\u6296\u4E0E\u8282\u6D41\u2B50</h2><p>\u53C2\u8003<a href="https://github.com/mqyqingfeng/Blog/issues/22" target="_blank" rel="noopener noreferrer">\u9632\u6296</a></p><p>\u9632\u6296: \u4E00\u5B9A\u5728\u4E8B\u4EF6\u89E6\u53D1 n \u79D2\u540E\u624D\u6267\u884C\uFF0C\u5982\u679C\u4F60\u5728\u4E00\u4E2A\u4E8B\u4EF6\u89E6\u53D1\u7684 n \u79D2\u5185\u53C8\u89E6\u53D1\u4E86\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C<strong>\u90A3\u6211\u5C31\u4EE5\u65B0\u7684\u4E8B\u4EF6\u7684\u65F6\u95F4\u4E3A\u51C6</strong>\uFF0Cn \u79D2\u540E\u624D\u6267\u884C\uFF0C\u603B\u4E4B\uFF0C\u5C31\u662F\u8981\u7B49\u4F60\u89E6\u53D1\u5B8C\u4E8B\u4EF6 n \u79D2\u5185\u4E0D\u518D\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u6211\u624D\u6267\u884C</p><p><strong>js\u5728\u67D0\u4E2A\u6570\u636E\u7C7B\u578B\u524D\u4F7F\u7528\u2018+\u2019\uFF0C\u8FD9\u4E2A\u64CD\u4F5C\u76EE\u7684\u662F\u4E3A\u4E86\u5C06\u8BE5\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u4E3ANumber\u7C7B\u578B</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function debounce(func, wait, immediate) {
  var timeout, result;
  var debounced = function () {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // \u5982\u679C\u5DF2\u7ECF\u6267\u884C\u8FC7\uFF0C\u4E0D\u518D\u6267\u884C
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) result = func.apply(context, args)
    }
    else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
    return result;
  };
  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounced;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u8003<a href="https://github.com/mqyqingfeng/Blog/issues/26" target="_blank" rel="noopener noreferrer">\u8282\u6D41</a></p><p>\u8282\u6D41: \u5982\u679C\u4F60\u6301\u7EED\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\uFF0C\u53EA\u6267\u884C\u4E00\u6B21\u4E8B\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u65F6\u95F4\u6233
function throttle1(fn, timestamp) {
  // \u5F53\u524D\u65F6\u95F4
  let previous = new Date();
  return function () {
    const args = arguments;
    const _this = this;
    const now = new Date();
    if (now - previous &gt; timestamp) {
      fn.apply(_this, args);
      previous = now;
    }
  };
}

// \u5B9A\u65F6\u5668
function throttle2(fn, delay) {
  let timeout;
  return function () {
    const args = arguments;
    const _this = this;
    if (!timeout) {
      timeout = setTimeout(() =&gt; {
        fn.apply(_this, args);
        timeout = null;
      }, delay);
    }
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u5316\u7248</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null;
      func.apply(context, args);
      if (!timeout) context = args = null;
  };

  var throttled = function() {
      var now = new Date().getTime();
      if (!previous &amp;&amp; options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining &lt;= 0 || remaining &gt; wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          func.apply(context, args);
          if (!timeout) context = args = null;
      } else if (!timeout &amp;&amp; options.trailing !== false) {
          timeout = setTimeout(later, remaining);
      }
  };
  return throttled;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-freeze" tabindex="-1"><a class="header-anchor" href="#object-freeze" aria-hidden="true">#</a> Object.freeze</h2><p>freeze\u51BB\u7ED3</p><p><code>Object.seal</code>\u5BC6\u5C01\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E0D\u80FD\u65B0\u589E\uFF0C\u4E0D\u80FD\u4FEE\u6539\u73B0\u6709\u5C5E\u6027\uFF0C\u6D45\u5BC6\u5C01</p><p>\u5BF9\u8C61\u5C5E\u6027\u4E0D\u53EF\u4FEE\u6539\uFF0CObject\u672C\u8EAB\u7684freeze\u65B9\u6CD5\u53EA\u5B9E\u73B0\u4E86\u6D45\u51BB\u7ED3\uFF0C\u6DF1\u5EA6\u51BB\u7ED3\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const objectFreeze = object =&gt; {
const keys = Object.getOwnPropertyNames(object);
keys.forEach(key =&gt; {
 if (typeof object[key] === &#39;object&#39;) {
   objectFreeze(object[key])
 } else {
   Object.defineProperty(object, key, {
     writable: false,
     configurable: false
   })
 }
})
Object.seal(object)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0new\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0new\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u5B9E\u73B0new\u64CD\u4F5C\u7B26</h2><ol><li>\u5806\u5185\u5B58\u4E2D\u521B\u5EFA\u65B0\u5BF9\u8C61</li><li>\u65B0\u5BF9\u8C61\u5185\u90E8\u7684<code>__proto__</code>\u5C5E\u6027\u88AB\u8D4B\u503C\u4E3A\u6784\u9020\u51FD\u6570\u7684prototype\u5C5E\u6027</li><li>\u6784\u9020\u51FD\u6570\u5185\u90E8this\u6307\u5411\u65B0\u5EFA\u7684\u7A7A\u5BF9\u8C61\uFF0C\u6267\u884C\u6784\u9020\u51FD\u6570\u4EE3\u7801</li><li>\u5982\u679C\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u975E\u7A7A\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DE\u8BE5\u5BF9\u8C61\uFF0C\u5426\u5219\u8FD4\u56DE\u521A\u521B\u5EFA\u7684\u65B0\u5BF9\u8C61</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const _new = function(fn, ...args) {
  const result = {}
  result.__proto__ = fn.prototype
  const res = fn.apply(result, ...args)
  return typeof res === &#39;object&#39; ? res : result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0call-bind" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0call-bind" aria-hidden="true">#</a> \u5B9E\u73B0call,bind</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// call
Function.prototype.call = function(thisArgs=window, ...args) {
    thisArgs.fn = this; //\u8FD9\u91CC\u7684this\u5C31\u662F\u8C03\u7528fn\u7684\u51FD\u6570
    return thisArgs.fn(...args) // \u8FD9\u65F6\u51FD\u6570fn\u7684this\u6307\u5411\u7684\u5C31\u662FthisArgs\u4E86
}
// bind
Function.prototype.bind = function(thisArgs=window) {
    thisArgs.fn = this;
    return function (...args) {
        return thisArgs.fn(...args)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),r=[a];function d(t,v){return i(),n("div",null,r)}var o=e(l,[["render",d],["__file","interview-questions.html.vue"]]);export{o as default};
