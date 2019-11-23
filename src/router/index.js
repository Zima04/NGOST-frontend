import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			name: 'sign-in',
			path: '/sign-in',
			meta: {
				title: 'Авторизация'
			},
			component: () => import('@/views/sign-in')
		},
		{
			name: 'sign-up',
			path: '/sign-up',
			meta: {
				title: 'Регистрация'
			},
			component: () => import('@/views/sign-up')
		},
		{
			name: 'restore-password',
			path: '/restore-password',
			meta: {
				title: 'Восстановление пароля'
			},
			component: () => import('@/views/restore-password')
		},
		{
			name: 'about',
			path: '/about',
			meta: {
				title: 'О проекте'
			},
			component: () => import('@/views/about')
		},
		{
			name: 'news',
			path: '/news',
			meta: {
				title: 'Новости'
			},
			component: () => import('@/views/news-list')
		},
		{
			name: 'news',
			path: '/news/:id',
			meta: {
				title: 'Новость'
			},
			component: () => import('@/views/news')
		},
		{
			name: 'application',
			path: '/app',
			component: () => import('@/views/application'),
			children: [
				{
					name: 'my-profile',
					path: 'my-profile',
					meta: {
						title: 'Личная информация'
					},
					component: () => import('@/views/profile')
				},
				{
					name: 'account-state',
					path: 'account-state',
					meta: {
						title: 'Состояние счета'
					},
					component: () => import('@/views/account-state')
				},
				{
					name: 'import-doc',
					path: 'import-doc',
					meta: {
						title: 'Загрузка документа'
					},
					component: () => import('@/views/import-doc')
				},
				{
					name: 'create-demand',
					path: 'create-demand',
					meta: {
						title: 'Формирование требований'
					},
					component: () => import('@/views/create-demand')
				}
			]
		},
		{
			name: 'admin',
			path: '/admin',
			component: () => import('@/views/admin/admin'),
			children: [
				{
					name: 'admin-news',
					path: 'news',
					meta: {
						title: 'Редактирование новостей'
					},
					component: () => import('@/views/admin/news-list')
				},
				{
					name: 'edit-news',
					path: 'news/edit/:id?',
					meta: {
						title: 'Редактирование новости'
					},
					component: () => import('@/views/admin/news-edit')
				},
			]
		}
	]
});
