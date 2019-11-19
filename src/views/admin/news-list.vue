<template>
	<div class="container">
		<div class="title-wrapper">
			<h1 class="headline">
				Новости
			</h1>
			<v-btn color="primary" small link to="news/edit">Добавить</v-btn>
		</div>
		<v-data-table
			:headers="headers"
			:items="news"
			:items-per-page="5"
			class="elevation-1"
			hide-default-footer
			:loading="isLoading"
			loading-text="Loading... Please wait"
		>
		</v-data-table>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'NewsList',
	data() {
		return {
			isLoading: true,
			error: false,
			news: [],
			headers: [
				{
					text: 'Заголовок',
					align: 'left',
					sortable: false,
					value: 'title'
				},
				{
					text: 'Краткое описание',
					align: 'center',
					sortable: false,
					value: 'short_descr'
				},
				{
					text: 'Дата создания',
					align: 'center',
					sortable: false,
					value: 'title'
				}
			]
		};
	},
	created() {
		console.log('sss');
		this.fetchData();
	},
	methods: {
		async fetchData() {
			this.error = false;
			this.isLoading = true;
			try {
				const response = await this.getNews();
				this.news = response.data;
				this.isLoading = false;
			} catch (err) {
				this.isLoading = false;
				this.error = err;
			}
		},
		async getNews() {
			return axios.get('/api/news');
		}
	}
};
</script>
<style lang="scss" scoped>
.title-wrapper {
	display: flex;
	flex-direction: row;
	align-items: center;
	a {
		margin-left: 0.5rem;
	}
}
</style>
