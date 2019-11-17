<template>
	<div class="container">
		<form>
			<div class="form-group">
				<h2>Название</h2>
				<input type="text" />
			</div>
			<div class="form-group">
				<h2>Дата</h2>
				<input type="text" />
			</div>
			<div class="form-group">
				<h2>Текст предпоказа</h2>
				<input type="text" />
			</div>
			<div class="form-group">
				<h2>Содержмое новости</h2>
				<tinymce-editor api-key="API_KEY" :init="{ plugins: 'wordcount' }"></tinymce-editor>
			</div>
		</form>
	</div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
export default {
	name: 'NewsEdit',
	data() {
		return {};
	},
	methods: {},
	components: {
		'tinymce-editor': Editor
	}
};
</script>
<style lang="scss" scoped></style>
