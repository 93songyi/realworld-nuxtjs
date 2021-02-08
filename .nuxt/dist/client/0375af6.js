(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{187:function(t,e,r){"use strict";r.d(e,"g",(function(){return o})),r.d(e,"i",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"e",(function(){return d})),r.d(e,"f",(function(){return f})),r.d(e,"h",(function(){return m})),r.d(e,"b",(function(){return v})),r.d(e,"a",(function(){return h})),r.d(e,"d",(function(){return O}));var n=r(60),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},h=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},O=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e),data:data})}},271:function(t,e,r){"use strict";r.r(e);r(61),r(25),r(26),r(11),r(49),r(36);var n=r(3),o=r(16),c=r(38),article=r(187);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={middleware:"authenticated",name:"edit",data:function(){return{article:{title:"",description:"",body:"",tagList:[]},tagInput:null,errors:{},inProgress:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["user"])),methods:{onPublish:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.inProgress=!0,e.next=3,Object(article.a)({article:t.article});case 3:r=e.sent,data=r.data,t.$router.push({path:"article/".concat(data.article.slug)}),t.inProgress=!1;case 7:case"end":return e.stop()}}),e)})))()},addTag:function(t){this.article.tagList.push(t),this.tagInput=null},removeTag:function(t){var e=this;this.article.tagList.filter((function(r,n){if(r===t)return e.article.tagList.splice(n),!0}))}}},f=r(24),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.onPublish(e)}}},[r("fieldset",{attrs:{disabled:t.inProgress}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tagInput,expression:"tagInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.tagInput},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.addTag(t.tagInput))},input:function(e){e.target.composing||(t.tagInput=e.target.value)}}}),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e,n){return r("span",{key:e+n,staticClass:"tag-default tag-pill"},[r("i",{staticClass:"ion-close-round",on:{click:function(r){return t.removeTag(e)}}}),t._v("\n                  "+t._s(e)+"\n                ")])})),0)])]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{disabled:t.inProgress,type:"submit"}},[t._v("\n            Publish Article\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);