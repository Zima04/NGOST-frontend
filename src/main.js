import Vue from 'vue';
import Vuelidate from 'vuelidate';
import router from './router';
import vuetify from './plugins/vuetify';

import 'tinymce/tinymce';
import 'tinymce/themes/silver/theme';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/content/default/content.min.css';
import App from './App.vue';

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
