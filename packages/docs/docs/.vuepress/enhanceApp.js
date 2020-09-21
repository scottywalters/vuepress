import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default ({ Vue, isServer }) => {
  if (!isServer) {
    import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
      Vue.use(module.default)
    })
  }
  import('bootstrap-vue' /* webpackChunkName: "bootstrap" */).then((module) => {
    Vue.use(BootstrapVue)
  })
}
