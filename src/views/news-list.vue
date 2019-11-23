<template>
  <div class="container">
    <template
      v-for="(item, index) in news"
    >
      <NewsItem
        :key="index"
        :news="item" />
    </template>
  </div>
</template>

<script>
import NewsItem from '../components/NewsItem.vue';
import axios from 'axios';

export default {
	name: 'News',
	components: {
		NewsItem
	},
	data: () => ({
		news: [],
		isLoading: true,
		errors: false,
	}),
	created() {
		this.fetchNews();
	},
	methods: {
		async fetchNews() {
			try {
				const response = await axios.get('/api/news');
				this.news = response.data.response;
				this.isLoading = false;
			} catch(err) {
				this.isLoading = false;
				this.errors = true;
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 2rem;
	margin: 0 auto;
	font-size: 14px;

	@media only screen and (max-width: 479px) {
		padding: 0.2rem;
	}
	@media (min-width: 481px) and (max-width: 767px) {
		padding: 0.8rem;
	}
	@media (min-width: 768px) and (max-width: 1280px) {
		padding: 1rem;
	}

}
</style>
