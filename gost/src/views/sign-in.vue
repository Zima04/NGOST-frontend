<template>
    <div>
        <p class="text-xs-center">
            <router-link :to="{ name: 'sign-up' }">
                Register
            </router-link>
        </p>
        <form>
            <fieldset>
                <input
                        type="text"
                        v-model="email"
                        placeholder="Email"
                />
            </fieldset>
            <fieldset>
                <input
                        type="password"
                        v-model="password"
                        placeholder="Password"
                />
            </fieldset>
            <button v-on:click="onSubmit()">Sign in</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "sign-in",
        data() {
            return {
                email: null,
                password: null
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