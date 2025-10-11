export const AdvantageItem = () => import('../../components/AdvantageItem.vue' /* webpackChunkName: "components/advantage-item" */).then(c => wrapFunctional(c.default || c))
export const AdvantagePartnerItem = () => import('../../components/AdvantagePartnerItem.vue' /* webpackChunkName: "components/advantage-partner-item" */).then(c => wrapFunctional(c.default || c))
export const BrandItem = () => import('../../components/BrandItem.vue' /* webpackChunkName: "components/brand-item" */).then(c => wrapFunctional(c.default || c))
export const CarInvest = () => import('../../components/CarInvest.vue' /* webpackChunkName: "components/car-invest" */).then(c => wrapFunctional(c.default || c))
export const CarInvestOld = () => import('../../components/CarInvestOld.vue' /* webpackChunkName: "components/car-invest-old" */).then(c => wrapFunctional(c.default || c))
export const CarModel = () => import('../../components/CarModel.vue' /* webpackChunkName: "components/car-model" */).then(c => wrapFunctional(c.default || c))
export const CarModelInfo = () => import('../../components/CarModelInfo.vue' /* webpackChunkName: "components/car-model-info" */).then(c => wrapFunctional(c.default || c))
export const Modal = () => import('../../components/Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const SchemeItem = () => import('../../components/SchemeItem.vue' /* webpackChunkName: "components/scheme-item" */).then(c => wrapFunctional(c.default || c))
export const Navigationlagal = () => import('../../components/navigationlagal.vue' /* webpackChunkName: "components/navigationlagal" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
