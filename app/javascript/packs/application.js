import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from '../components/app.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  document.body.appendChild(document.createElement('app'))
  const app = new Vue({
    el: 'app',
    template: '<App/>',
    components: { App }
  })
})
