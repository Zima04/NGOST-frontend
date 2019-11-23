<template>
  <v-skeleton-loader
    height="100%"
    type="list-item-two-line"
  />
</template>

<script>
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import axios from 'axios';
export default {
	name: 'NewsPage',
	data: () => ({
		format,
		ru,
		news: null,
		isLoading: true,
		errors: false
	}),
	created() {
		const id = this.$route.params.id;
		this.fetchNews(id);
	},
	methods: {
		async fetchNews(id) {
			try {
				const response = await axios.get(`/api/news/${id}`);
				this.news = response.data.response;
			} catch (err) {}
		}
	}
};
</script>

<style>
</style>
