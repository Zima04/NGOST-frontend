<template>
  <div class="container">
    <h1 class="headline">
      Создание новости
    </h1>
    <v-form
      ref="form"
      @submit.prevent="onSubmit">
      <div class="form-group">
        <v-text-field
          v-model="formData.title"
          label="Заголовок"
          required
          :rules="required"
        />
      </div>
      <div class="form-group">
        <v-text-field
          v-model="formData.short_desc"
          label="Краткое описание"
          required
          :rules="required"
        />
      </div>
      <div class="form-group">
        <v-file-input
          v-model="image_holder"
          required
          label="Превью изображение"
          accept="image/*"
          :rules="required"
        />
      </div>
      <h2 class="headline">
        Содержмое новости
      </h2>
      <v-expansion-panels
        :multiple="true"
      >
        <v-expansion-panel
          v-for="(component, index) in formData.description"
          :key="index"
        >
          <v-expansion-panel-header>
            Секция
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <template v-if="component.type === 'text'">
              <tinymce-editor v-model="component.value" />
            </template>
            <template v-else-if="component.type === 'image'">
              <images-section
                :value="component.value"
                @onChange="onChangeSection($event, index)" />
            </template>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
    </v-form>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
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
		const id = this.$route.params.id;
		if (id) {
			this.fetchData(id);
		}
	},
	methods: {
		async fetchData(id) {
			const response = await axios.get(`/api/news/${id}`);
		},
		async onSubmit() {
			if(this.$refs.form.validate()) {
				try {
					let imageId = null;
					if (this.image_holder) {
						const imageResponse = await this.saveImage();
						imageId = imageResponse.data.id;
					}
					const response = await this.saveNews(imageId);
					this.$refs.form.reset()
				} catch (error) {
					console.log(error);
				}
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
