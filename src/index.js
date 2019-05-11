import EasyGoTop from './EasyGoTop'
import easyGoTopMixin from './easyGoTopMixin'

const Plugin = {}

Plugin.install = function (Vue, params = {}) {
  Vue.prototype.$goTopGlobalParams = params
  Vue.component('easy-go-top', EasyGoTop)
  Vue.mixin(easyGoTopMixin)
}

if (typeof window !== 'undefined' && window.Vue) {
  Plugin.install(window.Vue)
}

export { EasyGoTop, easyGoTopMixin }
export default Plugin
