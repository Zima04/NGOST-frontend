<template>
	<div class="container">
		<NewsItem />
		<NewsItem />
		<NewsItem />
		<NewsItem />
		<NewsItem />
	</div>
</template>

<script>
import NewsItem from '../components/NewsItem.vue';
export default {
	name: 'News',
	components: {
		NewsItem
	},
	data() {
		return {};
	},
	methods: {}
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
		@media (min-width: 481px) and (max-width: 767px) {
			width: 50%;
			padding: 0.5rem;
		}
		@media (min-width: 768px) and (max-width: 1280px) {
			width: 33%;
			padding: 0.3rem;
		}
	}
}
</style>
