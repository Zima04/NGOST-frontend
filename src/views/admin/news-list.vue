<template>
  <div class="container">
    <div class="title-wrapper">
      <h1 class="headline">
        Новости
      </h1>
      <v-btn
        color="primary"
        small
        link
        to="news/edit">
        Добавить
      </v-btn>
    </div>
    <v-data-table
      :headers="headers"
      :items="news"
      class="elevation-1"
      hide-default-footer
      :loading="isLoading"
      loading-text="Loading... Please wait"
    >
      <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editNews(item)">
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteNews(item)">
          mdi-delete
        </v-icon>
      </template>
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
					value: 'short_desc'
				},
				{
					text: 'Дата создания',
					align: 'center',
					sortable: false,
					value: 'created_at.date'
				},
				{ text: 'Actions', value: 'action', sortable: false, align: 'center' }
			]
		};
	},
	created() {
		this.fetchData();
	},
	methods: {
		async fetchData() {
			this.error = false;
			try {
				const response = await this.getNews();
				this.news = response.data.response;
				this.isLoading = false;
			} catch (err) {
				this.isLoading = false;
				this.error = err;
			}
		},
		async getNews() {
			return axios.get('/api/news');
		},
		async editNews(item) {
			this.$router.push({ path: `news/edit/${item.id}` })
		},
		async deleteNews(news) {
			this.isLoading = true;
			try {
				await axios.delete(`/api/news/${news.id}`)
				this.fetchData();
			} catch(err) {
				console.log(err);
			}
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
