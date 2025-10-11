import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ea7995c2 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _4d991d7c = () => interopDefault(import('../pages/connect.vue' /* webpackChunkName: "pages/connect" */))
const _2d71849c = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _1ebb1cd2 = () => interopDefault(import('../pages/delivery.vue' /* webpackChunkName: "pages/delivery" */))
const _52447da0 = () => interopDefault(import('../pages/deposit.vue' /* webpackChunkName: "pages/deposit" */))
const _5bb26374 = () => interopDefault(import('../pages/start.vue' /* webpackChunkName: "pages/start" */))
const _15df0874 = () => interopDefault(import('../pages/legal/agreement.vue' /* webpackChunkName: "pages/legal/agreement" */))
const _c6b0075a = () => interopDefault(import('../pages/legal/personal-data.vue' /* webpackChunkName: "pages/legal/personal-data" */))
const _31621c8b = () => interopDefault(import('../pages/legal/privacy-policy.vue' /* webpackChunkName: "pages/legal/privacy-policy" */))
const _6578a576 = () => interopDefault(import('../pages/legal/sign-act.vue' /* webpackChunkName: "pages/legal/sign-act" */))
const _ab09e038 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4352901f = () => interopDefault(import('../pages/_slug/index.vue' /* webpackChunkName: "pages/_slug/index" */))
const _62ca804a = () => interopDefault(import('../pages/_slug/_auto.vue' /* webpackChunkName: "pages/_slug/_auto" */))

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
    component: _ea7995c2,
    name: "about"
  }, {
    path: "/connect",
    component: _4d991d7c,
    name: "connect"
  }, {
    path: "/contact",
    component: _2d71849c,
    name: "contact"
  }, {
    path: "/delivery",
    component: _1ebb1cd2,
    name: "delivery"
  }, {
    path: "/deposit",
    component: _52447da0,
    name: "deposit"
  }, {
    path: "/start",
    component: _5bb26374,
    name: "start"
  }, {
    path: "/legal/agreement",
    component: _15df0874,
    name: "legal-agreement"
  }, {
    path: "/legal/personal-data",
    component: _c6b0075a,
    name: "legal-personal-data"
  }, {
    path: "/legal/privacy-policy",
    component: _31621c8b,
    name: "legal-privacy-policy"
  }, {
    path: "/legal/sign-act",
    component: _6578a576,
    name: "legal-sign-act"
  }, {
    path: "/",
    component: _ab09e038,
    name: "index"
  }, {
    path: "/:slug",
    component: _4352901f,
    name: "slug"
  }, {
    path: "/:slug/:auto",
    component: _62ca804a,
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
