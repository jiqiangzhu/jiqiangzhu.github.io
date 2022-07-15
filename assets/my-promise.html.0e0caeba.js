import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.f44b82ad.js";const r={},d=s(`<h1 id="\u624B\u6495promise-ts" tabindex="-1"><a class="header-anchor" href="#\u624B\u6495promise-ts" aria-hidden="true">#</a> \u624B\u6495<code>Promise ts</code>\u{1F525}</h1><p>\u5B8C\u6574\u7248\u4EE3\u7801 <a href="https://github.com/jiqiangzhu/learn-ts/blob/master/src/ts-promise.ts" target="_blank" rel="noopener noreferrer">\u70B9\u6211</a></p><p>\u672C\u6587\u4F1A\u6839\u636E\u901A\u8FC7\u67E5\u770B\u539F\u751F<code>Promise</code>\u7684\u8F93\u51FA\u7ED3\u679C\u6765\u9010\u6B65\u5B9E\u73B0\u81EA\u5B9A\u4E49<code>myPromise</code>\uFF0C\u4F7F\u7528<code>class</code></p><p><strong>\u4E3A\u907F\u514D\u51FA\u73B0<code>this</code>\u6307\u5411\u95EE\u9898\uFF0C\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</strong></p><blockquote><p><code>then\u3001catch\u3001Promise.resolve\u3001Promise.reject\u3001all\u3001race\u3001finally</code></p></blockquote><h3 id="promise-prototype-then\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#promise-prototype-then\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a> \u2B50<code>Promise.prototype.then</code>\u65B9\u6CD5\u5B9E\u73B0</h3><p><strong>\u{1F604}then\u65B9\u6CD5\u662FPromise\u6700\u91CD\u8981\u7684\u4E00\u4E2A\u65B9\u6CD5,\u540E\u9762\u7684\u6240\u6709\u65B9\u6CD5\u90FD\u8981\u8C03\u7528\u6B64\u65B9\u6CD5</strong></p><p>\u5148\u67E5\u770B\u4E00\u4E0B\u539F\u751F<code>Promise</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const promise = new Promise((resolve, reject) =&gt; {
  resolve(111)
})
console.log(promise) // PromiseResult 111 PromiseState fullfilled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u6B64\u53EF\u77E5\u9700\u8981\u4F20\u9012\u7ED9<code>Promise</code>\u6784\u9020\u51FD\u6570\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u6709\u4E24\u4E2A\u56DE\u8C03\u51FD\u6570\u53C2\u6570<code>resolve, reject</code>\uFF0C\u8FD9\u91CC\u79F0\u6B64\u51FD\u6570\u4E4B\u4E3A\u{1F47F}<code>executor</code>\uFF0C\u4E24\u4E2A\u56DE\u8C03\u51FD\u6570\u5206\u522B\u4E3A\u6210\u529F\u7684\u56DE\u8C03\u548C\u5931\u8D25\u7684\u56DE\u8C03\uFF0C<code>Promise</code>\u6709\u4E09\u79CD\u72B6\u6001<code>PromiseState: pending|fulfilled|rejected</code>(\u5E76\u4E14\u72B6\u6001\u4E00\u65E6\u6539\u53D8\u4E0D\u5141\u8BB8\u518D\u6B21\u66F4\u6539)\u548C\u4E00\u4E2A\u8FD4\u56DE\u7ED3\u679C<code>PromiseResult</code>\u53EF\u4EE5\u4E3A\u4EFB\u610F\u7C7B\u578B</p><p><code>myPromise</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>class myPromise {
  static PENDING = &#39;pending&#39;
  static FULFILLED = &#39;fulfilled&#39;
  static REJECTED = &#39;rejected&#39;
  PromiseState: string = myPromise.PENDING
  PromiseResult: any = &#39;&#39;
  resolve = (result: unknown) =&gt; {
    if (this.PromiseState !== myPromise.PENDING) return;
    this.PromiseState = myPromise.FULFILLED
    this.PromiseResult = result
  }
  reject = (reason: unknown) =&gt; {
    if (this.PromiseState !== myPromise.PENDING) return;
    this.PromiseState = myPromise.REJECTED
    this.PromiseResult = reason
  }
  constructor(executor: Function) {
    executor(this.resolve, this.reject)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u539F\u751F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const resPromise = promise.then(value =&gt; {
  console.log(value); // \u8F93\u51FA 111
  return value
}, (reason =&gt; {
  console.log(reason);
}))
console.log(&#39;resPromise&#39;, resPromise);
// console Promise {&lt;pending&gt;}
//[[Prototype]]: Promise
//[[PromiseState]]: &quot;fulfilled&quot;
//[[PromiseResult]]: 111
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230<code>then</code>\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u4E5F\u662F\u4E00\u4E2A<code>Promise</code>\uFF0C\u5E76\u4E14<code>Promise.then</code>\u91CC\u7684\u56DE\u8C03\u65F6\u5F02\u6B65\u6267\u884C\u7684\uFF0C\u8FD9\u91CC\u5206\u522B\u7ED9then\u65B9\u6CD5\u7684\u4E24\u4E2A\u56DE\u8C03\u51FD\u6570\u9ED8\u8BA4\u503C</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>class myPromise {
  static PENDING = &#39;pending&#39;
  static FULFILLED = &#39;fulfilled&#39;
  static REJECTED = &#39;rejected&#39;
  PromiseState: string = myPromise.PENDING
  PromiseResult: any = &#39;&#39;
  static defaultOnResolve: Function = (value: unknown) =&gt; value
  static defaultOnReject: Function = (reason: any) =&gt; {
    throw reason
  }
  resolve = (result: unknown) =&gt; {
    if (this.PromiseState !== myPromise.PENDING) return;
    this.PromiseState = myPromise.FULFILLED
    this.PromiseResult = result
  }
  reject = (reason: unknown) =&gt; {
    if (this.PromiseState !== myPromise.PENDING) return;
    this.PromiseState = myPromise.REJECTED
    this.PromiseResult = reason
  }
  constructor(executor: Function) {
    executor(this.resolve, this.reject)
  }
  then = (onResolve = myPromise.defaultOnResolve, onReject = myPromise.defaultOnReject): myPromise =&gt; {
    return new myPromise((resolve: Function, reject: Function) =&gt; {
      setTimeout(() =&gt; {
        if (this.PromiseState === myPromise.FULFILLED) {
          resolve(onResolve(this.PromiseResult))
        } else if (this.PromiseState === myPromise.REJECTED) {
          reject(onReject(this.PromiseResult))
        }
      })
    })
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="promise\u7684executor\u91CC\u7684\u4EE3\u7801\u662F\u5F02\u6B65\u65F6\u8BE5\u5982\u4F55\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#promise\u7684executor\u91CC\u7684\u4EE3\u7801\u662F\u5F02\u6B65\u65F6\u8BE5\u5982\u4F55\u5904\u7406" aria-hidden="true">#</a> \u2753<code>Promise</code>\u7684<code>executor</code>\u91CC\u7684\u4EE3\u7801\u662F\u5F02\u6B65\u65F6\u8BE5\u5982\u4F55\u5904\u7406\uFF1F</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const promise = new myPromise((resolve, reject) =&gt; {
  setTimeout(() =&gt; {
    resolve(111)
  }, 1500)
})
promise.then(value =&gt; {
  console.log(value); // \u6C38\u8FDC\u4E0D\u4F1A\u8F93\u51FA
  return value
}, (reason =&gt; {
  console.log(reason);
}))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801<code>console.log(value); </code>\u6C38\u8FDC\u4E0D\u4F1A\u8F93\u51FA</p><p>\u4E3A\u4F55\uFF1F\u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u4ED4\u7EC6\u770B\u4E00\u4E0B\u6574\u4E2A\u6267\u884C\u8FC7\u7A0B\uFF0C\u6267\u884C<code>then</code>\u65B9\u6CD5\u65F6\uFF0C\u56E0\u4E3A\u6709\u5B9A\u65F6\u7684\u7F18\u6545\uFF0C\u6240\u4EE5<code>Promise</code>\u7684\u72B6\u6001\u8FD8\u662F<code>pending</code>\uFF0C\u4F46\u662F\u76EE\u524D\u8FD8\u672A\u5BF9<code>pending</code>\u72B6\u6001\u8FDB\u884C\u5904\u7406</p><p>\u5FC5\u987B\u5F53<code>Promise</code>\u7684\u72B6\u6001\u786E\u5B9A\u4E86\u4E4B\u540E\u624D\u80FD\u6267\u884C\u5BF9\u5E94\u7684\u56DE\u8C03\uFF0C\u6240\u4EE5\u5F53<code>pending</code>\u65F6\uFF0C\u628A\u56DE\u8C03\u8FDB\u884C\u5B58\u50A8\uFF0C\u5F53\u6267\u884C<code>resolve/reject</code>\u65F6\uFF0C\u518D\u628A\u5B58\u50A8\u7684\u56DE\u8C03\u51FD\u6570\u505A\u904D\u5386\u6267\u884C\u5373\u53EF</p><p>\u4EE3\u7801\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>class myPromise {
  static PENDING = &#39;pending&#39;
  static FULFILLED = &#39;fulfilled&#39;
  static REJECTED = &#39;rejected&#39;
  PromiseState: string = myPromise.PENDING
  PromiseResult: any = &#39;&#39;
  callbacks: Array&lt;{ onResolve: Function, onReject: Function }&gt; = []
  static defaultOnResolve: Function = (value: unknown) =&gt; value
  static defaultOnReject: Function = (reason: any) =&gt; {
    throw reason
  }
  resolve = (result: unknown) =&gt; {
    if (this.PromiseState !== myPromise.PENDING) return;
    this.PromiseState = myPromise.FULFILLED
    this.PromiseResult = result
    // \u904D\u5386\u56DE\u8C03
    this.callbacks.forEach(item =&gt; {
      item.onResolve(this.PromiseResult)
    })
  }
  reject = (reason: unknown) =&gt; {
    if (this.PromiseState !== myPromise.PENDING) return;
    this.PromiseState = myPromise.REJECTED
    this.PromiseResult = reason
    // \u904D\u5386\u56DE\u8C03
    this.callbacks.forEach(item =&gt; {
      item.onReject(this.PromiseResult)
    })
  }
  constructor(executor: Function) {
    executor(this.resolve, this.reject)
  }
  then = (onResolve = myPromise.defaultOnResolve, onReject = myPromise.defaultOnReject): myPromise =&gt; {
    return new myPromise((resolve: Function, reject: Function) =&gt; {
      setTimeout(() =&gt; {
        if (this.PromiseState === myPromise.FULFILLED) {
          resolve(onResolve(this.PromiseResult))
        } else if (this.PromiseState === myPromise.REJECTED) {
          reject(onReject(this.PromiseResult))
        } else if (this.PromiseState === myPromise.PENDING) {
          //\u5B58\u50A8\u56DE\u8C03
          this.callbacks.push({
            onResolve: () =&gt; {
              resolve(onResolve(this.PromiseResult))
            },
            onReject: () =&gt; {
              reject(onReject(this.PromiseResult))
            }
          })
        }
      })
    })
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F53then\u65B9\u6CD5\u4E2D\u8FD4\u56DE\u7684\u662F\u4E00\u4E2Apromise\u5BF9\u8C61-\u80FD\u5426\u5728\u540E\u9762\u7684then\u4E2D\u62FF\u5230\u4E0A\u9762\u7684\u503C\u5462" tabindex="-1"><a class="header-anchor" href="#\u5F53then\u65B9\u6CD5\u4E2D\u8FD4\u56DE\u7684\u662F\u4E00\u4E2Apromise\u5BF9\u8C61-\u80FD\u5426\u5728\u540E\u9762\u7684then\u4E2D\u62FF\u5230\u4E0A\u9762\u7684\u503C\u5462" aria-hidden="true">#</a> \u2753\u5F53<code>then</code>\u65B9\u6CD5\u4E2D\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A<code>Promise</code>\u5BF9\u8C61\uFF0C\u80FD\u5426\u5728\u540E\u9762\u7684<code>then</code>\u4E2D\u62FF\u5230\u4E0A\u9762\u7684\u503C\u5462\uFF1F</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>promise.then((value:unknown) =&gt; {
  return new myPromise((resolve: Function) =&gt; {
    resolve(22222)
  })
}).then((value: unknown) =&gt; {
  console.log(&#39;value&#39;, value) // \u80FD\u5426\u8F93\u51FA 22222 ?
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B54\u6848\u662F\u4E0D\u80FD\uFF0C\u8FD9\u91CC\u62FF\u5230\u7684\u662F\u4E00\u4E2A<code>Promise</code>\u5BF9\u8C61\uFF0C\u5982\u4F55\u62FF\u5230\u9884\u671F\u7684\u503C\u5462\uFF1F\u9700\u8981\u5728<code>then</code>\u65B9\u6CD5\u4E2D\u8FDB\u884C\u5224\u65AD\uFF0C<strong>\u5982\u679C\u503C\u4E3A<code>Promise</code>\u5BF9\u8C61\uFF0C\u90A3\u4E48\u5C31\u4F7F\u7528\u9012\u5F52\u518D\u6B21\u8C03\u7528<code>then</code></strong></p><p>\u5B8C\u6574<code>then</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>then = (onResolve = myPromise.defaultOnResolve, onReject = myPromise.defaultOnReject): myPromise =&gt; {
    return new myPromise((resolve: Function, reject: Function) =&gt; {
      setTimeout(() =&gt; {
        if (this.PromiseState === myPromise.FULFILLED) {
          try {
            const res = onResolve(this.PromiseResult)
            if (res instanceof myPromise) {
              res.then(resolve, reject)
            } else {
              resolve(res)
            }
          } catch (e) {
            reject(e)
          }
        } else if (this.PromiseState === myPromise.REJECTED) {
          try {
            const res = onReject(this.PromiseResult)
            if (res instanceof myPromise) {
              res.then(resolve, reject)
            } else {
              resolve(res)
            }
          } catch (e) {
            reject(e)
          }
        } else if (this.PromiseState === myPromise.PENDING) {
          this.callbacks.push({
            onResolve: () =&gt; {
              try {
                const res = onResolve(this.PromiseResult)
                if (res instanceof myPromise) {
                  res.then(resolve, reject)
                } else {
                  resolve(res)
                }
              } catch (e) {
                reject(e)
              }
            },
            onReject: () =&gt; {
              try {
                const res = onReject(this.PromiseResult)
                if (res instanceof myPromise) {
                  res.then(resolve, reject)
                } else {
                  resolve(res)
                }
              } catch (e) {
                reject(e)
              }
            }
          })
        }
      })
    })
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-prototype-catch\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#promise-prototype-catch\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a> <code>Promise.prototype.catch</code>\u65B9\u6CD5\u5B9E\u73B0</h2><p>\u7531\u4E8E<code>then</code>\u65B9\u6CD5\u5DF2\u7ECF\u7ED9\u4E86\u9ED8\u8BA4\u503C\uFF0C<code>catch</code>\u65B9\u6CD5\u76F4\u63A5\u8C03\u7528<code>then</code>\u65B9\u6CD5\u5373\u53EF\uFF0C\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570\u8BBE\u7F6E\u6210<code>undefined</code>\u5373\u53EF</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>catch = (onReject = myPromise.defaultOnReject) =&gt; {
    return this.then(undefined, onReject)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-resolve\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#promise-resolve\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a> <code>Promise.resolve</code>\u65B9\u6CD5\u5B9E\u73B0</h2><p><strong>\u6B64\u65B9\u6CD5\u5C5E\u4E8EPromise\u7C7B\u7684\u65B9\u6CD5\uFF0C\u901A\u8FC7\u7C7B\u76F4\u63A5\u8C03\u7528\u7684\uFF0C\u53EF\u4EE5\u5C06Promise\u7684\u72B6\u6001\u76F4\u63A5\u8BBE\u7F6E\u4E3A\u6210\u529F\u72B6\u6001</strong></p><p>\u8C03\u7528then\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u4F53\u5185\u76F4\u63A5\u6267\u884Cresolve\u56DE\u8C03\u5373\u53EF</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>static resolve = (value: unknown) =&gt; {
    return new myPromise((resolve: Function) =&gt; {
        resolve(value)
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-reject\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#promise-reject\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a> <code>Promise.reject</code>\u65B9\u6CD5\u5B9E\u73B0</h2><p>\u540C<code>Promise.resolve</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>static reject = (reason: any) =&gt; {
    return new myPromise((resolve: Function, reject: Function) =&gt; {
        reject(reason)
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-all\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#promise-all\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a> <code>Promise.all</code>\u65B9\u6CD5\u5B9E\u73B0</h2><p>\u7B80\u4ECB\uFF1A\u6B64\u65B9\u6CD5\u63A5\u6536\u4E00\u4E2A<code>Promise</code>\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5F53\u6240\u6709<code>Promise</code>\u7684\u7ED3\u679C\u90FD\u4E3A\u6210\u529F\u65F6\uFF0C\u6B64\u65B9\u6CD5\u624D\u8FD4\u56DE\u6210\u529F\uFF0C\u5426\u5219\u8FD4\u56DE\u5931\u8D25</p><p>\u6570\u7EC4\u4E2D<code>Promise</code>\u662F\u5E76\u53D1\u6267\u884C(\u53EF\u4EE5\u81EA\u5DF1\u8FDB\u884C\u9A8C\u8BC1)\uFF0C\u4F46\u662F<code>PromiseResult</code>\u7684\u7ED3\u679C\u786E\u662F\u6309\u987A\u5E8F\u8FD4\u56DE\u7684\uFF01</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>static all(promiseArr: Array&lt;myPromise&gt;): myPromise {
    return new myPromise((resolve: Function, reject: Function) =&gt; {
        let PromiseResult: Array&lt;unknown&gt; = []
        promiseArr.forEach((item, index) =&gt; {
            item.then((value: unknown) =&gt; {
                PromiseResult[index] = value //\u5BF9\u5E94promise\u5BF9\u8C61\u7D22\u5F15
                if (PromiseResult.length === promiseArr.length) { // \u6240\u6709\u90FD\u6210\u529F\u4E86
                    resolve(PromiseResult)
                }
            }, (reason: any) =&gt; {
                reject(reason)
            })
        })
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-race\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#promise-race\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a> <code>Promise.race</code>\u65B9\u6CD5\u5B9E\u73B0</h2><p>\u4E0E<code>Promise.all</code>\u65B9\u6CD5\u76F8\u53CD\uFF0C<code>race</code>\u65B9\u6CD5\u4F1A\u628A\u6700\u5148\u8FD4\u56DE\u7684\u7ED3\u679C\u5F53\u4F5C\u8FD4\u56DE\u503C</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>static race(promiseArr: Array&lt;myPromise&gt;): myPromise {
    return new myPromise((resolve: Function, reject: Function) =&gt; {
        promiseArr.forEach((item, index) =&gt; {
            item.then((value: unknown) =&gt; {
                resolve(value)
            }, (reason: any) =&gt; {
                reject(reason)
            })
        })
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-prototype-finally\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#promise-prototype-finally\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a> <code>Promise.prototype.finally</code>\u65B9\u6CD5\u5B9E\u73B0</h2><p>\u6B64\u65B9\u6CD5\u4F1A\u5728<code>then/catch</code>\u540E\u9762\u6267\u884C\uFF0C\u{1F49D}<code>ES2018</code>\u65B0\u589E\uFF0C\u5728\u6B64\u4E4B\u524D\uFF0C\u6709\u4E9B\u4EE3\u7801\u5728<code>then\u548Ccatch</code>\u4E2D\u53EF\u80FD\u8981\u91CD\u590D\u4E66\u5199\uFF0C<code>finally</code>\u51FA\u73B0\u4E4B\u540E\u5C31\u5F88\u597D\u7684\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>finally = (executor = new Function) =&gt; {
    return this.then((value: unknown) =&gt; { 
        return myPromise.resolve(executor()).then(() =&gt; value) // \u4E3A\u4E86\u5C06\u503C\u7EE7\u7EED\u4F20\u9012\u4F9B\u94FE\u5F0F\u8C03\u7528
    }, (reason: any) =&gt; {
        return myPromise.resolve(executor()).then(() =&gt; { //\u4E3A\u4E86\u5C06\u503C\u7EE7\u7EED\u4F20\u9012\u4F9B\u94FE\u5F0F\u8C03\u7528
            throw reason
        })
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-any\u65B9\u6CD5\u5B9E\u73B0-es2021\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#promise-any\u65B9\u6CD5\u5B9E\u73B0-es2021\u65B0\u589E" aria-hidden="true">#</a> \u2B50<code>Promise.any</code>\u65B9\u6CD5\u5B9E\u73B0(\u{1F195}<code>ES2021\u65B0\u589E</code>)</h2><p>\u6B64\u65B9\u6CD5\u4E0E<code>race</code>\u65B9\u6CD5\u5341\u5206\u76F8\u4F3C\uFF0C\u4E0D\u540C\u7684\u662F\uFF0C<code>race</code>\u53EA\u8981\u6709\u4E00\u4E2A<code>reject</code>\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DE<code>reject</code>\u4E86\uFF0C\u4F46\u662F<code>any</code>\u662F\u6240\u6709\u7684\u90FD<code>reject</code>\u4E86\u624D<code>reject</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>static all(promiseArr: Array&lt;myPromise&gt;): myPromise {
    return new myPromise((resolve: Function, reject: Function) =&gt; {
        let PromiseResult: Array&lt;unknown&gt; = []
        promiseArr.forEach((item, index) =&gt; {
            item.then((value: unknown) =&gt; {
                PromiseResult[index] = value
                if (PromiseResult.length === promiseArr.length) {
                    resolve(PromiseResult)
                }
            }, (reason: any) =&gt; {
                reject(reason)
            })
        })
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),l=[d];function c(a,t){return i(),n("div",null,l)}var m=e(r,[["render",c],["__file","my-promise.html.vue"]]);export{m as default};
