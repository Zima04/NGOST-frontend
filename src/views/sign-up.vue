<template>
  <div class="container">
    <v-container grid-list-xl>
      <h1>Регистрация</h1>
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          label="Имя"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        />
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="Электронная почта"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        />
        <v-text-field
          v-model="password"
          :error-messages="passwordErrors"
          label="Пароль"
          :append-icon="showPassword ? 'visibility' : 'visibility_off'"
          :type="showPassword ? 'text' : 'password'"
          required
          @click:append="showPassword = !showPassword"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        />
        <v-text-field
          v-model="passwordConfirm"
          :error-messages="passwordConfirmErrors"
          label="Подтвердите пароль"
          :append-icon="showPasswordConfirm ? 'visibility' : 'visibility_off'"
          :type="showPasswordConfirm ? 'text' : 'password'"
          required
          @click:append="showPasswordConfirm = !showPasswordConfirm"
          @input="$v.passwordConfirm.$touch()"
          @blur="$v.passwordConfirm.$touch()"
        />
        <v-text-field
          v-model="phone"
          :error-messages="phoneErrors"
          label="Мобильный телефон"
          required
          @input="$v.phone.$touch()"
          @blur="$v.phone.$touch()"
        />

        <v-btn
          class="mr-4"
          @click="submit"
        >
          Зарегистрироваться
        </v-btn>
        <v-btn @click="clear">
          Очистить форму
        </v-btn>
      </form>
      <br>
      <p class="text-xs-center">
        У Вас уже есть аккаунт?
        <router-link :to="{ name: 'sign-in' }">
          Вход
        </router-link>
      </p>
    </v-container>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate';
import {
  required, minLength, email, sameAs
} from 'vuelidate/lib/validators';

export default {
  name: 'SignUp',
  mixins: [validationMixin],
  validations: {
    name: { required },
    email: { required, email },
    password: { required, minLength: minLength(10) },
    passwordConfirm: { required, sameAsPassword: sameAs('password') },
    phone: { required }
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    showPassword: false,
    showPasswordConfirm: false,
  }),
  computed: {
    nameErrors () {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push('Введите имя.');
      return errors;
    },
    emailErrors () {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Введена неккоректная электронная почта.');
      !this.$v.email.required && errors.push('Введите элекстронную почту.');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push('Пароль должен быть больше 10 символов.');
      !this.$v.password.required && errors.push('Введите пароль.');
      return errors;
    },
    passwordConfirmErrors() {
      const errors = [];
      if (!this.$v.passwordConfirm.$dirty) return errors;
      !this.$v.passwordConfirm.sameAsPassword && errors.push('Пароли не совпадают.');
      !this.$v.passwordConfirm.required && errors.push('Потвердите пароль.');
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push('Введите мобильный телефон.');
      return errors;
    }
  },
  methods: {
    submit () {
      this.$v.$touch();
    },
    clear () {
      this.$v.$reset();
      this.name = '';
      this.email = '';
      this.password = '';
      this.passwordConfirm = '';
      this.phone = '';
    },
  },
};
</script>
<style scoped>
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
