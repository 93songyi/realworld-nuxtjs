(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{187:function(t,e,r){"use strict";r.d(e,"g",(function(){return c})),r.d(e,"i",(function(){return o})),r.d(e,"c",(function(){return l})),r.d(e,"e",(function(){return f})),r.d(e,"f",(function(){return v})),r.d(e,"h",(function(){return d})),r.d(e,"b",(function(){return m})),r.d(e,"a",(function(){return _})),r.d(e,"d",(function(){return h}));var n=r(60),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},m=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},_=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},h=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e),data:data})}},188:function(t,e,r){var n=r(6),c=r(28),o=r(12),l=r(189),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},189:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},190:function(t,e,r){"use strict";var n=r(4),c=r(22),o=r(27),l=r(124),f=r(62),v=r(12),d=r(50).f,m=r(63).f,_=r(10).f,h=r(188).trim,C=n.Number,O=C,y=C.prototype,x="Number"==o(r(78)(y)),E="trim"in String.prototype,j=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=E?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(x?v((function(){y.valueOf.call(r)})):"Number"!=o(r))?l(new O(j(e)),r,C):j(e)};for(var k,N=r(7)?d(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;N.length>w;w++)c(O,k=N[w])&&!c(C,k)&&_(C,k,m(O,k));C.prototype=y,y.constructor=C,r(13)(n,"Number",C)}},191:function(t,e,r){var n=r(6),c=r(192);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},192:function(t,e,r){var n=r(4).parseInt,c=r(188).trim,o=r(189),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},197:function(t,e,r){var content=r(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("a44df956",content,!0,{sourceMap:!1})},206:function(t,e,r){"use strict";r(197)},207:function(t,e,r){(e=r(79)(!1)).push([t.i,".your_feed_txt{text-align:left;margin-top:20px}",""]),t.exports=e},266:function(t,e,r){"use strict";r.r(e);r(61),r(25),r(49);var n=r(16),c=(r(26),r(11),r(37),r(9)),o=(r(190),r(191),r(36),r(3)),l=r(38),f=r(187),v=r(60);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"home",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,d,m,_,h,C,O,y,x,E,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=Number.parseInt(r.page||1),o=20,l=r.tab||"global_feed",d=r.tag,m="global_feed"===l?f.g:f.i,d&&(m=f.g),e.next=9,Promise.all([m({limit:o,offset:(n-1)*o,tag:d}),Object(v.b)({method:"GET",url:"/api/tags"})]);case 9:return _=e.sent,h=Object(c.a)(_,2),C=h[0],O=h[1],y=C.data,x=y.articles,E=y.articlesCount,j=O.data.tags,x.forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{articles:x,articlesCount:E,tags:j,limit:o,page:n,tab:l,tag:d});case 17:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tag","tab"],computed:m(m({},Object(l.d)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:{onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(article),article.favoriteDisabled=!0,!article.favorited){t.next=9;break}return t.next=5,Object(f.e)(article.slug);case 5:article.favorited=!1,article.favoritesCount+=-1,t.next=13;break;case 9:return t.next=11,Object(f.c)(article.slug);case 11:article.favorited=!0,article.favoritesCount+=1;case 13:article.favoriteDisabled=!1;case 14:case"end":return t.stop()}}),t)})))()}}},h=(r(206),r(24)),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"your_feed"}}}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"global_feed"}}}},[t._v("Global Feed")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"tag",tag:t.tag}}}},[t._v("# "+t._s(t.tag))])],1):t._e()])]),t._v(" "),0===t.articlesCount?r("div",{staticClass:"your_feed_txt"},[t._v("\n          No articles are here... yet.\n        ")]):r("div",t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v("\n                  "+t._s(article.author.username)+"\n                ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n              ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),0),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])]),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tab:"tag",tag:e}}}},[t._v(t._s(e))])})),1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[this._v("conduit")]),this._v(" "),e("p",[this._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);