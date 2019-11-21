<template>
  <div class="container">
    <h1 class="headline">
      Создание новости
    </h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <v-text-field
          v-model="formData.title"
          label="Заголовок"
          :rules="required"
          @input="$v.title.$touch()"
          @blur="$v.title.$touch()"
        />
      </div>
      <div class="form-group">
        <v-text-field
          v-model="formData.short_desc"
          label="Краткое описание"
          :rules="required"
          @input="$v.short_desc.$touch()"
          @blur="$v.short_desc.$touch()"
        />
      </div>
      <div class="form-group">
        <v-file-input
          v-model="image_holder"
          label="Превью изображение"
          accept="image/*" />
      </div>
      <h2 class="headline">
        Содержмое новости
      </h2>
      <div
        v-for="(component, index) in formData.description"
        :key="index"
        class="form-group">
        <template v-if="component.type === 'text'">
          <tinymce-editor v-model="component.value" />
        </template>
        <template v-else-if="component.type === 'image'">
          <images-section
            :value="component.value"
            @onChange="onChangeSection($event, index)" />
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
        <v-btn
          color="primary"
          type="submit">
          Сохранить
        </v-btn>
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
	components: {
		'tinymce-editor': Editor,
		'images-control': ImagesControl,
		'images-section': ImagesSection
	},
	mixins: [validationMixin],
	validations: {
		title: { required },
		description: { required },
		short_desc: { required }
	},
	data: () => ({
		formData: {
			title: '',
			description: [{ type: 'text', value: null }],
			short_desc: '',
			image: null
		},
		image_holder: null,
		required: [v => !!v || 'Field is required'],
		imagesControl: false
	}),
	created() {
		if (this.$route.params.id) {
			this.fetchData();
		}
	},
	methods: {
		async fetchData() {
			console.log(this.$route.params.id);
		},
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
				...this.formData,
				image: imageId
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
					return this.formData.description.push(image);
				case 'text':
					return this.formData.description.push(text);
			}
		},
		onChangeSection(value, index) {
			this.formData.description[index].value = value;
		}
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
