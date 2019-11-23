<template>
  <div class="container">
    <template v-if="!isLoading">
      <template v-for="(item, index) in news">
        <NewsItem
          :key="index"
          :news="item" />
      </template>
    </template>
    <template v-else-if="isLoading">
      <div class="column">
        <v-skeleton-loader
          type="image, article"
          width="100%" />
      </div>
      <div class="column">
        <v-skeleton-loader
          type="image, article"
          width="100%" />
      </div>
    </template>
  </div>
</template>

<script>
import NewsItem from '../components/NewsItem.vue';
import axios from 'axios';

export default {
	name: 'News',
	inject: ['theme'],
	components: {
		NewsItem
	},
	data: () => ({
		news: [],
		isLoading: true,
		errors: false
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
			} catch (err) {
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
	.column {
		width: 25%;
		padding: 1rem;
		box-sizing: border-box;
		@media only screen and (max-width: 479px) {
			width: 100%;
			padding: 0.2rem;
		}
		@media (min-width: 481px) and (max-width: 1280px) {
			width: 50%;
			padding: 0.5rem;
		}
	}
}
</style>
