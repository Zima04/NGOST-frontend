<template>
  <v-dialog
    v-model="isOpen"
    persistent
    class="dialog">
    <v-card class="card-content">
      <v-card-title class="headline">
        Select image
      </v-card-title>
      <div class="images-list">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="image"
          :class="{ active: selectedImage.id === image.id }"
          @click="selectedImage = image"
        >
          <img
            alt="image"
            :src="image.path" >
        </div>
      </div>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          color="green darken-1"
          text
          @click="onClose">
          Disagree
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="onSubmit">
          Agree
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
		selectedImage: {},
		isLoading: true,
		errors: false,
		images: []
	}),
	async created() {
		try {
			const response = await this.getImages();
			this.images = response.data.response;
		} catch (err) {
			this.errors = true;
		}
	},
	methods: {
		onClose() {
			this.$emit('close');
		},
		onSubmit() {
			this.$emit('onSelect', this.selectedImage);
		},
		async getImages() {
			return axios.get('/api/media');
		}
	}
};
</script>

<style lang="scss" scoped>
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
