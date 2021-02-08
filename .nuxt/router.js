import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _53b1e41d = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _60837e92 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _9fb6c7d4 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _5d799754 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _0d41fb3a = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _6081f7bd = () => interopDefault(import('..\\pages\\edit' /* webpackChunkName: "" */))
const _1294bf16 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))

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
    component: _53b1e41d,
    children: [{
      path: "",
      component: _60837e92,
      name: "home"
    }, {
      path: "/login",
      component: _9fb6c7d4,
      name: "login"
    }, {
      path: "/register",
      component: _9fb6c7d4,
      name: "register"
    }, {
      path: "/settings",
      component: _5d799754,
      name: "settings"
    }, {
      path: "/article/:slug",
      component: _0d41fb3a,
      name: "article"
    }, {
      path: "/edit",
      component: _6081f7bd,
      name: "edit"
    }, {
      path: "/profile",
      component: _1294bf16,
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
