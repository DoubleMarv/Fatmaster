// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// JS import
import Vue from 'vue'
import App from './App.vue'
import VueOnsen from 'vue-onsenui'; 

Vue.use(VueOnsen); 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
