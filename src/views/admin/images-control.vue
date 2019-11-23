<template>
  <v-dialog
    v-model="isOpen"
    persistent
    class="dialog">
    <v-card class="card-content">
      <v-card-title class="title">
        <h1 class="headline">
          Select image
        </h1>
        <v-btn
          small
          color="primary"
          @click="$refs.fileInput.click()">
          Добавить
        </v-btn>
        <input
          ref="fileInput"
          style="display: none;"
          type="file"
          @change="uploadImage" >
      </v-card-title>
      <div class="images-list">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="image"
          :class="{ active: selectedImage === image.path }"
          @click="selectedImage = image.path"
        >
          <img
            alt="image"
            :src="image.path" >
        </div>
      </div>
      <v-pagination
        v-model="pagination.page"
        :length="pagination.length"
        :page="pagination.page"
        :total-visible="pagination.totalVisible"
      />
      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          @click="onClose">
          Отмена
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="onSubmit">
          Применить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
	name: 'ImagesControl',
	props: {
		isOpen: Boolean
	},
	data: () => ({
		selectedImage: null,
		isLoading: true,
		errors: false,
		images: [],
		image_holder: null,
		pagination: {
			length: 2,
			page: 1,
			totalVisible: 10
		}
	}),
	async created() {
		this.getImages();
	},
	methods: {
		onClose() {
			this.$emit('close');
		},
		onSubmit() {
			this.$emit('onSelect', this.selectedImage);
		},
		async getImages() {
			try {
				const response = await axios.get('/api/media');
				this.images = response.data.response;
			} catch (err) {
				this.errors = true;
			}
		},
		async uploadImage(e) {
			const input = this.$refs.fileInput
			const image = input.files[0];
			if (!image || image.type.indexOf('image/') < 0) {
				return;
			}
			this.isLoading = true;
			const formData = new FormData();
			formData.append('file', image);
			await axios.post('/api/media', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});
			input.type = 'text';
			input.type = 'file';
			this.getImages();
		}
	}
};
</script>

<style lang="scss" scoped>
.title {
	> button {
		margin-left: 1rem;
	}
}
.card-content {
	height: 90vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.images-list {
	width: 100%;
	height: 100%;
	display: grid;
	grid-gap: 1.25em;
	grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
	grid-template-rows: repeat(auto-fit, minmax(200px, 200px));
	padding: 1rem;
	overflow: auto;
}
.image {
	display: flex;
	flex-direction: column;
	margin: 0;
	max-width: 100%;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05);
	&.active {
		box-shadow: 0 0 0 3px #fff, 0 0 0 7px #0073aa;
	}
	img {
		height: 100%;
		width: 100%;
	}
}
</style>
