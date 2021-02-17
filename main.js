import Vue from 'vue'
import App from './App'
import myComponentName from './components/my-component-name/my-component-name.vue'

Vue.component('my-component-name',myComponentName)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
