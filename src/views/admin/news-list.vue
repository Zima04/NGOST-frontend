<template>
	<div>
		<div class="container">
			<NewsItem is-edit />
			<NewsItem is-edit />
			<NewsItem is-edit />
			<NewsItem is-edit />
			<NewsItem is-edit />
		</div>
	</div>
</template>

<script>
import NewsItem from '@/components/NewsItem';
export default {
	name: 'NewsList',
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
	padding: 0 2rem;
	margin: 0 auto;
	font-size: 14px;

	@media only screen and (max-width: 479px) {
		padding: 0 0.2rem;
	}
	@media (min-width: 481px) and (max-width: 767px) {
		padding: 0 0.8rem;
	}
	@media (min-width: 768px) and (max-width: 1280px) {
		padding: 0 1rem;
	}
}
</style>
