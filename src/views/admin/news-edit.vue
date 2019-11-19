<template>
	<div class="container">
		<images-control v-bind:is-open="imagesControl" @close="onClose" @onSelect="onSelectImage" />
		<h1 class="headline">
			Создание новости
		</h1>
		<form v-on:submit.prevent="onSubmit">
			<div class="form-group">
				<v-text-field
					label="Заголовок"
					v-model="formData.title"
					@input="$v.title.$touch()"
					@blur="$v.title.$touch()"
					:rules="required"
				/>
			</div>
			<div class="form-group">
				<v-text-field
					label="Краткое описание"
					v-model="formData.short_desc"
					@input="$v.short_desc.$touch()"
					@blur="$v.short_desc.$touch()"
					:rules="required"
				/>
			</div>
			<div class="form-group">
				<v-file-input label="Изображение" accept="image/*" v-model="formData.image_holder" />
			</div>
			<h2 class="headline">Содержмое новости</h2>
			<div class="form-group">
				<tinymce-editor v-model="formData.description" />
			</div>
			<div class="form-group" v-for="(component, index) in newsBody" v-bind:key="index">
				<template v-if="component.type === 'text'">
					<tinymce-editor v-model="component.value" />
				</template>
				<template v-else-if="component.type === 'image'">
					<images-section value="component.value" />
				</template>
			</div>
			<div class="controls">
				<v-menu offset-y>
					<template v-slot:activator="{ on }">
						<v-btn v-on="on">
							Добавить секцию
						</v-btn>
					</template>
					<v-list>
						<v-list-item @click="addSection('image')">
							<v-list-item-title>Изображение</v-list-item-title>
						</v-list-item>
						<v-list-item @click="addSection('text')">
							<v-list-item-title>Тест</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
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
import ImagesControl from './images-control';
import ImagesSection from './images-section';

export default {
	name: 'NewsEdit',
	mixins: [validationMixin],
	validations: {
		title: { required },
		description: { required },
		short_desc: { required }
	},
	data: () => ({
		formData: {
			title: '',
			description: '',
			short_desc: '',
			image_holder: null
		},
		newsBody: [],
		required: [v => !!v || 'Field is required'],
		imagesControl: false
	}),
	methods: {
		async onSubmit() {
			try {
				let imageId = null;
				if (this.formData.image_holder) {
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
		onClose() {
			this.imagesControl = false;
		},
		onSelectImage(image) {
			this.imagesControl = false;
		},
		addSection(type) {
			const text = { type: 'text', value: null };
			const image = { type: 'image', value: null };

			switch (type) {
				case 'image':
					return this.newsBody.push(image);
				case 'text':
					return this.newsBody.push(text);
			}
		}
	},
	created: () => {
		console.log('eee');
	},
	components: {
		'tinymce-editor': Editor,
		'images-control': ImagesControl,
		'images-section': ImagesSection
	}
};
</script>
<style lang="scss" scoped>
.controls {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin: 0.5rem 0;
	button {
		margin: 0 0 0 1rem;
	}
}
.form-group {
	margin: 1rem 0;
}
</style>
