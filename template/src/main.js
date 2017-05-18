{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue';
import App from './App';
{{#router}}
import router from './router';
{{/router}}
{{#if_eq uiLib "iview"}}
import iView from 'iview';
{{/if_eq}}

Vue.config.productionTip = false;

{{#if_eq uiLib "iview"}}
Vue.use(iView);

{{/if_eq}}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }
  {{/if_eq}}
});
