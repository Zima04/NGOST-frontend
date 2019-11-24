<template>
  <div class="news-content">
    <template v-if="!isLoading">
      <div class="text">
        <div class="container">
          <h1 class="headline">
            {{ news.title }}
          </h1>
        </div>
      </div>
      <div
        v-for="(description, index) in news.description"
        :key="index">
        <template v-if="description.type === 'text'">
          <div class="container">
            <div v-html="description.value" />
          </div>
        </template>
        <template v-else-if="description.type === 'image'">
          <div class="text-images">
            <img
              :src="description.value"
              :alt="description.value" >
          </div>
        </template>
      </div>
    </template>
  </div>
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
				this.isLoading = false;
			} catch (err) {
				this.errors = true;
				this.isLoading = false;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.news-content {
	width: 100%;
}
.text-images {
		max-width: 1700px;
    margin: 70px auto 125px;
    padding: 0 12px;

		img {
			max-width: 100%;
			height: auto;
		}
}
</style>
