import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2cead4dc = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _f720d9de = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _09bb1777 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _4002f155 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _47442984 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _f723e788 = () => interopDefault(import('..\\pages\\edit' /* webpackChunkName: "" */))
const _6079e637 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _2cead4dc,
    children: [{
      path: "",
      component: _f720d9de,
      name: "home"
    }, {
      path: "/login",
      component: _09bb1777,
      name: "login"
    }, {
      path: "/register",
      component: _09bb1777,
      name: "register"
    }, {
      path: "/settings",
      component: _4002f155,
      name: "settings"
    }, {
      path: "/article/:slug",
      component: _47442984,
      name: "article"
    }, {
      path: "/edit",
      component: _f723e788,
      name: "edit"
    }, {
      path: "/profile",
      component: _6079e637,
      name: "profile"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
