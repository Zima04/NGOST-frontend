<template>
	<v-card class="mx-auto card-wrapper">
		<images-control v-bind:is-open="imagesControl" @close="onClose" @onSelect="onSelectImage" />
		<v-card-title>Изображение</v-card-title>
		<v-img class="white--text align-end" height="400px" v-if="selectedImage" v-bind:src="selectedImage" />
		<v-card-text>
			<p v-if="!selectedImage">
				Изображение не выбранно
				<v-btn color="primary" @click="onSelect">
					Добавить
				</v-btn>
			</p>
			<v-btn color="error" v-if="selectedImage">
				Удалить
			</v-btn>
		</v-card-text>
	</v-card>
</template>

<script>
import ImagesControl from './images-control';

export default {
	components: {
		'images-control': ImagesControl
	},
	data: () => ({
		selectedImage: null,
		imagesControl: false
	}),
	methods: {
		onSelect() {
			this.imagesControl = true;
		},
		onClose() {
			this.imagesControl = false;
		},
		onSelectImage(image) {
			this.imagesControl = false;
			this.selectedImage = image;
		}
	}
};
</script>

<style>
.card-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	min-height: 200;
}
.card-actions {
	display: flex;
	justify-content: flex-end;
}
</style>
