<template>

    <div>
        <p>
            <router-link :to="{ name: 'sign-in' }">
                Login
            </router-link>
        </p>
        <form>
            <fieldset>
                <input
                        type="text"
                        v-model="username"
                        placeholder="Имя"
                />
            </fieldset>
            <fieldset>
                <input
                        type="text"
                        v-model="email"
                        placeholder="Электронная почта"
                />
            </fieldset>
            <fieldset>
                <input
                        type="password"
                        v-model="password"
                        placeholder="Пароль"
                />
            </fieldset>
            <fieldset>
                <input
                        type="password"
                        v-model="repeatPassword"
                        placeholder="Повторите пароль"
                />
            </fieldset>
            <fieldset>
                <input
                        type="tel"
                        v-model="phone"
                        placeholder="Мобильный телефон"
                />
            </fieldset>
            <button v-on:click="onSubmit()">
                Create new account
            </button>
        </form>
    </div>

</template>

<script>
    export default {

        name: "sign-up",

        data() {
            return {
                username: "",
                email: "",
                password: "",
                repeatPassword: "",
                phone: ""
            };
        },

        methods: {
            onSubmit() {

            }
        }

    };
</script>

<style scoped>

</style>