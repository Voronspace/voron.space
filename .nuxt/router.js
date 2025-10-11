import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2e684394 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _c7973a9e = () => interopDefault(import('../pages/connect.vue' /* webpackChunkName: "pages/connect" */))
const _37e282e7 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _b8ef0386 = () => interopDefault(import('../pages/delivery.vue' /* webpackChunkName: "pages/delivery" */))
const _25790665 = () => interopDefault(import('../pages/deposit.vue' /* webpackChunkName: "pages/deposit" */))
const _01511c2e = () => interopDefault(import('../pages/start.vue' /* webpackChunkName: "pages/start" */))
const _c67c880a = () => interopDefault(import('../pages/legal/agreement.vue' /* webpackChunkName: "pages/legal/agreement" */))
const _e6b7cbf0 = () => interopDefault(import('../pages/legal/personal-data.vue' /* webpackChunkName: "pages/legal/personal-data" */))
const _40e9b576 = () => interopDefault(import('../pages/legal/privacy-policy.vue' /* webpackChunkName: "pages/legal/privacy-policy" */))
const _9597eabe = () => interopDefault(import('../pages/legal/sign-act.vue' /* webpackChunkName: "pages/legal/sign-act" */))
const _4e201e59 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _c8a39a58 = () => interopDefault(import('../pages/_slug/index.vue' /* webpackChunkName: "pages/_slug/index" */))
const _26f66290 = () => interopDefault(import('../pages/_slug/_auto.vue' /* webpackChunkName: "pages/_slug/_auto" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2e684394,
    name: "about"
  }, {
    path: "/connect",
    component: _c7973a9e,
    name: "connect"
  }, {
    path: "/contact",
    component: _37e282e7,
    name: "contact"
  }, {
    path: "/delivery",
    component: _b8ef0386,
    name: "delivery"
  }, {
    path: "/deposit",
    component: _25790665,
    name: "deposit"
  }, {
    path: "/start",
    component: _01511c2e,
    name: "start"
  }, {
    path: "/legal/agreement",
    component: _c67c880a,
    name: "legal-agreement"
  }, {
    path: "/legal/personal-data",
    component: _e6b7cbf0,
    name: "legal-personal-data"
  }, {
    path: "/legal/privacy-policy",
    component: _40e9b576,
    name: "legal-privacy-policy"
  }, {
    path: "/legal/sign-act",
    component: _9597eabe,
    name: "legal-sign-act"
  }, {
    path: "/",
    component: _4e201e59,
    name: "index"
  }, {
    path: "/:slug",
    component: _c8a39a58,
    name: "slug"
  }, {
    path: "/:slug/:auto",
    component: _26f66290,
    name: "slug-auto"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
