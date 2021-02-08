exports.ids = [3];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getYourArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteComments; });
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 获取首页公共文章列表

const getArticles = params => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取个人文章列表

const getYourArticle = params => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 新增文章评论

const addComments = (slug, data) => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  });
}; // 提交新增文章

const addArticles = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
}; // 删除评论
// 新增文章评论

const deleteComments = (slug, id) => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`,
    data
  });
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/edit/index.vue?vue&type=template&id=03b32077&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset"+(_vm._ssrAttr("disabled",_vm.inProgress))+"><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.tagInput)))+" class=\"form-control\"> <div class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(tag,index){return ("<span class=\"tag-default tag-pill\"><i class=\"ion-close-round\"></i>"+_vm._ssrEscape("\n                  "+_vm._s(tag)+"\n                ")+"</span>")}))+"</div></fieldset></fieldset> <button"+(_vm._ssrAttr("disabled",_vm.inProgress))+" type=\"submit\" class=\"btn btn-lg pull-xs-right btn-primary\">\n            Publish Article\n          </button></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/edit/index.vue?vue&type=template&id=03b32077&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/edit/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var editvue_type_script_lang_js_ = ({
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'edit',

  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
      tagInput: null,
      errors: {},
      inProgress: false
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['user'])
  },
  methods: {
    async onPublish() {
      this.inProgress = true;
      const {
        data
      } = await Object(article["a" /* addArticles */])({
        article: this.article
      });
      this.$router.push({
        path: `article/${data.article.slug}`
      });
      this.inProgress = false;
    },

    addTag(tag) {
      this.article.tagList.push(tag);
      this.tagInput = null;
    },

    removeTag(tag) {
      this.article.tagList.filter((item, index) => {
        if (item === tag) {
          this.article.tagList.splice(index);
          return true;
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/edit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/edit/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "067f09c4"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map