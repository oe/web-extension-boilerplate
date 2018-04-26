import Vue from 'vue'{{#i18n}}
import i18n from '@/common/i18n'{{#vueI18n}}
import VueI18n from 'vue-i18n'
import locales from '@/common/locales'{{/vueI18n}}{{/i18n}}{{#router}}
import router from './router'{{/router}}{{#vuex}}
import store from './store'{{/vuex}}
import App from './main'{{#i18n}}{{#vueI18n}}

Vue.use(VueI18n)
Vue.config.lang = i18n.lang
// register custom locale
for (var key in locales) {
  if (locales.hasOwnProperty(key)) {
    Vue.locale(key, locales[key])
  }
}{{/vueI18n}}

// translate text out of vue app
document.documentElement.innerHTML = i18n.internationalize(
  document.documentElement.innerHTML
){{/i18n}}

/* eslint-disable no-new */
new Vue({
  el: '#app',{{#vuex}}
  store,{{/vuex}}{{#router}}
  router,{{/router}}
  render (h) {
    return h('app')
  },
  components: { App }
})
