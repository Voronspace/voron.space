export { default as AdvantageItem } from '../../components/AdvantageItem.vue'
export { default as AdvantagePartnerItem } from '../../components/AdvantagePartnerItem.vue'
export { default as BrandItem } from '../../components/BrandItem.vue'
export { default as CarInvest } from '../../components/CarInvest.vue'
export { default as CarInvestOld } from '../../components/CarInvestOld.vue'
export { default as CarModel } from '../../components/CarModel.vue'
export { default as CarModelInfo } from '../../components/CarModelInfo.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as SchemeItem } from '../../components/SchemeItem.vue'
export { default as Navigationlagal } from '../../components/navigationlagal.vue'

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
