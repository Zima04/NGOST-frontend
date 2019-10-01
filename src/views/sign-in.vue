<template>
  <div class="container">
    <v-container grid-list-xl>
      <h1>Вход</h1>
      <form>
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
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        />
        <p class="forgot_password">
          <router-link :to="{ name: 'restore-password' }">
            Забыли пароль?
          </router-link>
        </p>

        <v-btn
          class="mr-4"
          @click="submit"
        >
          Вход
        </v-btn>
        <v-btn @click="clear">
          Очистить форму
        </v-btn>
      </form>
      <br>
      <p class="text-xs-center">
        У Вас нет аккаунта?
        <router-link :to="{ name: 'sign-up' }">
          Регистрация
        </router-link>
      </p>
    </v-container>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'SignIn',
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required },
  },
  data: () => ({
    email: '',
    password: '',
    lastUser: null,
  }),
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push('Введите пароль.');
      return errors;
    },
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

      if (!this.$v.$invalid) {
        this.authUser();
      }
    },
    clear() {
      this.$v.$reset();
      this.password = '';
      this.email = '';
    },
    authUser() {
      let email = this.email;
      let password = this.password;
      this.$store
              .dispatch("Auth/login", {email, password})
              .then(() => {
                this.$router.push("/");
              })
              .catch(err => {
                this.clear();
              });

      window.setTimeout(() => {
        this.lastUser = `${this.email}`;
      }, 1500);
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
    .forgot_password {
        margin-left: auto;
    }
</style>
