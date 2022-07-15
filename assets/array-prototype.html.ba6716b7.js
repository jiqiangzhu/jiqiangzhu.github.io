import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.f44b82ad.js";const r={},a=s(`<h1 id="\u624B\u6495\u6570\u7EC4\u539F\u578B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u624B\u6495\u6570\u7EC4\u539F\u578B\u65B9\u6CD5" aria-hidden="true">#</a> \u624B\u6495\u6570\u7EC4\u539F\u578B\u65B9\u6CD5</h1><h3 id="array-prototype-reduce" tabindex="-1"><a class="header-anchor" href="#array-prototype-reduce" aria-hidden="true">#</a> <code>Array.prototype.reduce</code>\u{1F525}</h3><p>\u8BE5\u65B9\u6CD5\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F\u56DE\u8C03\u51FD\u6570(\u8BE5\u51FD\u6570\u63A5\u53D7\u56DB\u4E2A\u53C2\u6570[\u7D2F\u52A0\u5668\uFF0C\u5F53\u524D\u503C\uFF0C\u5F53\u524D\u7D22\u5F15(\u53EF\u9009)\uFF0C<code>reduce</code>\u7684\u6570\u7EC4(\u53EF\u9009)])\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u521D\u59CB\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array.prototype.my_reduce = function (callback, ...rest) {
    let start = 0,  result;
    if (rest.length) {
        result = rest[0]
    } else {
        result = this[0]
        start ++
    }
    for (let i = start; i &lt; this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-flat" tabindex="-1"><a class="header-anchor" href="#array-prototype-flat" aria-hidden="true">#</a> <code>Array.prototype.flat</code></h3><p>\u8BE5\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570<code>depth</code>\u6DF1\u5EA6\uFF0C\u8BE5\u65B9\u6CD5\u7528\u6765\u964D\u4F4E\u6570\u7EC4\u7EF4\u5EA6\uFF0C\u8BE5\u65B9\u6CD5\u5E76\u4E0D\u4F1A\u6539\u53D8\u539F\u6570\u7EC4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array.prototype.my_flat = function (depth) {
  const result = []
  for (let i = 0; i &lt; this.length; i ++) {
    if (Array.isArray(this[i]) &amp;&amp; depth !== 0) {
      result.push(...this[i].my_flat(--depth))
    } else {
      result.push(this[i])
    }
  }
  return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-map" tabindex="-1"><a class="header-anchor" href="#array-prototype-map" aria-hidden="true">#</a> <code>Array.prototype.map</code>\u2B50</h3><p>\u8BE5\u65B9\u6CD5\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570<code>callback</code>&amp;<code>thisArgs</code>\uFF0C\u7531\u4E8E\u7BAD\u5934\u51FD\u6570\u6CA1\u6709<code>this</code>\uFF0C\u6240\u4EE5\u82E5\u8981\u60F3\u8BA9\u7B2C\u4E8C\u4E2A\u53C2\u6570\u751F\u6548\uFF0C\u4E0D\u80FD\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</p><p><strong>\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684this\u6307\u9488\uFF0C\u901A\u8FC7 call() \u6216 apply() \u65B9\u6CD5\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u53EA\u80FD\u4F20\u9012\u53C2\u6570\uFF08\u4E0D\u80FD\u7ED1\u5B9Athis---\u8BD1\u8005\u6CE8\uFF09\uFF0C\u4ED6\u4EEC\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F1A\u88AB\u5FFD\u7565\u3002\uFF08\u8FD9\u79CD\u73B0\u8C61\u5BF9\u4E8Ebind\u65B9\u6CD5\u540C\u6837\u6210\u7ACB---\u8BD1\u8005\u6CE8\uFF09</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array.prototype.my_map = function (callback, thisArgs) {
  const result = []
  for (let i = 0; i &lt; this.length; i++) {
    if (thisArgs === undefined) {
      result.push(callback(this[i], i))
      continue
    }
    result.push(callback.call(thisArgs, this[i], i))
  }
  return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-fill" tabindex="-1"><a class="header-anchor" href="#array-prototype-fill" aria-hidden="true">#</a> <code>Array.prototype.fill</code></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array.prototype.my_fill = function (value, start=0, end = this.length) {
	for (let i = start; i &lt; end; i++) {
    this[i] = value
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-includes" tabindex="-1"><a class="header-anchor" href="#array-prototype-includes" aria-hidden="true">#</a> <code>Array.prototype.includes</code>\u{1F195}</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array.prototype.my_includes = function (item) {
	for (let i = 0; i &lt; this.length; i++) {
    if (this[i] === item || (isNaN(item) &amp;&amp; isNaN(this[i]))) {
      return true
    }
  }
  return false
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-push" tabindex="-1"><a class="header-anchor" href="#array-prototype-push" aria-hidden="true">#</a> <code>Array.prototype.push</code></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array.prototype.my_push = function (...rest) {
	const len = this.length;
  for (let i = 0; i &lt; rest.length; i++) {
    this[i+len] = rest[i]
  }
  return this.length;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-pop" tabindex="-1"><a class="header-anchor" href="#array-prototype-pop" aria-hidden="true">#</a> <code>Array.prototype.pop</code></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array.prototype.my_pop = function () {
	const res = this[this.length - 1]
  this.length --
  return res
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-shift" tabindex="-1"><a class="header-anchor" href="#array-prototype-shift" aria-hidden="true">#</a> <code>Array.prototype.shift</code></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array.prototype.my_shift = function () {
	const res = this[0]
  for (let i = 0; i &lt; this.length - 1; i++) {
    this[i] = this[i+1]
  }
  this.length --
  return res
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-unshift" tabindex="-1"><a class="header-anchor" href="#array-prototype-unshift" aria-hidden="true">#</a> <code>Array.prototype.unshift</code></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array.prototype.my_unshift = function (...rest) {
	const arrayLen = this.length;
  const restLen = rest.length;
  for (let i = arrayLen + restLen - 1; i &gt;= 0; i--) {
    if (i &gt;= restLen) {
      this[i] = this[i - restLen]
    } else {
      this[i] = rest[i]
    }
  }
  return this.length;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-sort" tabindex="-1"><a class="header-anchor" href="#array-prototype-sort" aria-hidden="true">#</a> <code>Array.prototype.sort</code></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array.prototype.my_sort = function (fn) {
  for (let i = 0; i &lt; this.length - 1; i++) {
    for (let j = 0; j &lt; this.length - i - 1; j++) {
      let val = fn(this[j], this[j + 1]);
      if (val &gt; 0) {
        this[j] = this[j] + this[j + 1]
        this[j + 1] = this[j] - this[j + 1]
        this[j] = this[j] - this[j + 1]
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),d=[a];function l(t,c){return i(),n("div",null,d)}var o=e(r,[["render",l],["__file","array-prototype.html.vue"]]);export{o as default};
