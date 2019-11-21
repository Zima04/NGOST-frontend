<template>
  <div class="container">
    <v-container grid-list-xl>
      <h1>Сбросить пароль</h1>
      <form>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="Электронная почта"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        />

        <v-btn
          class="mr-4"
          @click="submit"
        >
          Сбросить
        </v-btn>
      </form>
    </v-container>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

export default {
	name: 'RestorePassword',
	mixins: [validationMixin],
	validations: {
		email: { required, email }
	},
	data: () => ({
		email: ''
	}),
	computed: {
		emailErrors() {
			const errors = [];
			if (!this.$v.email.$dirty) return errors;
			!this.$v.email.email && errors.push('Введена неккоректная электронная почта.');
			!this.$v.email.required && errors.push('Введите элекстронную почту.');
			return errors;
		},
	},
	methods: {
		submit() {
			this.$v.$touch();
		},
		clear() {
			this.$v.$reset();
			this.email = '';
		},
	},
};
</script>
<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1024px;
        padding: 2rem;
        margin: 0 auto;
        color: black;
    }
</style>
