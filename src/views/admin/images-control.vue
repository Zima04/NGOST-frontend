<template>
	<v-dialog v-model="isOpen" persistent>
		<v-card>
			<v-card-title class="headline">Use Google's location service?</v-card-title>
			<v-card-text>
				Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps
				are running.
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="green darken-1" text @click="onClose">
					Disagree
				</v-btn>
				<v-btn color="green darken-1" text @click="onSubmit">
					Agree
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	name: 'ImagesControl',
	data: () => ({
		selectedImage: null,
		ImagesControl: false,
	}),
	props: {
		isOpen: Boolean
	},
	methods: {
		onClose() {
			this.$emit('close');
		},
		onSubmit() {
			this.$emit('onSelect', this.selectedImage);
		}
	},

};
</script>

<style></style>
