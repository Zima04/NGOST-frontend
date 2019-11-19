<template>
	<div class="container">
		<h1 class="headline">
			Создание новости
		</h1>
		<form v-on:submit.prevent="onSubmit">
			<div class="form-group">
				<v-text-field
					label="Заголовок"
					v-model="title"
					@input="$v.title.$touch()"
					@blur="$v.title.$touch()"
					:rules="required"
				/>
			</div>
			<div class="form-group">
				<v-text-field
					label="Краткое описание"
					v-model="short_desc"
					@input="$v.short_desc.$touch()"
					@blur="$v.short_desc.$touch()"
					:rules="required"
				/>
			</div>
			<div class="form-group">
				<v-file-input label="Изображение" accept="image/*" v-model="image_holder" />
			</div>
			<div class="form-group">
				<h2>Содержмое новости</h2>
				<tinymce-editor :init="{ plugins: 'wordcount' }" v-model="description"></tinymce-editor>
			</div>
			<div class="controls">
				<v-btn color="primary" type="submit">Сохранить</v-btn>
			</div>
		</form>
	</div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import axios from 'axios';

export default {
	name: 'NewsEdit',
	mixins: [validationMixin],
	validations: {
		title: { required },
		description: { required },
		short_desc: { required }
	},
	data: () => ({
		title: '',
		description: '',
		short_desc: '',
		image_holder: null,
		required: [v => !!v || 'Field is required']
	}),
	methods: {
		async onSubmit() {
			try {
				let imageId = null;
				if (this.image_holder) {
					const imageResponse = await this.saveImage();
					imageId = imageResponse.data.id;
				}
				const response = await this.saveNews(imageId);
			} catch (error) {
				console.log(error);
			}
		},
		async saveNews(imageId) {
			return axios.post('/api/news', {
				title: this.title,
				description: this.description,
				image: imageId,
				short_desc: this.short_desc
			});
		},
		async saveImage() {
			const formData = new FormData();
			formData.append('file', this.image_holder);
			return axios.post('/api/media', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});
		}
	},
	created: () => {
		console.log('eee');
	},
	components: {
		'tinymce-editor': Editor
	}
};
</script>
<style lang="scss" scoped>
	.controls {
		margin: .5rem 0;
	}
</style>
