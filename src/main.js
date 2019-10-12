import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.use(Vuelidate);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	document.title = to.meta.title ? `gost | ${to.meta.title}` : 'gost';
	next();
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
