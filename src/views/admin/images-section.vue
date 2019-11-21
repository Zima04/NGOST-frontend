<template>
  <v-card class="mx-auto card-wrapper">
    <template v-if="imagesControl">
      <images-control
        :is-open="imagesControl"
        @close="onClose"
        @onSelect="onSelectImage" />
    </template>
    <v-card-title>Изображение</v-card-title>
    <v-img
      v-if="value"
      class="white--text align-end"
      minheight="300px">
      <img :src="value.path" >
    </v-img>
    <v-card-text>
      <p v-if="!value">
        Изображение не выбранно
        <v-btn
          color="primary"
          @click="onSelect">
          Добавить
        </v-btn>
      </p>
      <v-btn
        v-if="value"
        color="error"
        @click="onDelete">
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
	props: {
		value: Object
	},
	data: () => ({
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
			this.$emit('onChange', image);
			this.imagesControl = false;
		},
		onDelete() {
			this.$emit('onChange', null);
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
