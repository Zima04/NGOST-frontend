<template>
    <div class="inline__block">
        <img alt="Vue logo" src="../assets/logo.png">
        <div class="nav">
            <p>Возможности</p>
            <p>О ресурсе</p>
            <p>Новости</p>
            <router-link :to="{ name: 'sign-in' }">
                <p class="sign_in_system">Вход в систему</p>
            </router-link>
        </div>

    </div>

</template>

<script>
    export default {
        name: "VueHeader"
    }
</script>

<style scoped>
    .inline__block {
        background: linear-gradient(to right, #FFF, #31183F);
        display: flex;
        margin: 0 60px;
        color: #FFF;
    }
    .nav {
        margin-left: auto;
        width: 1000px;
        display: flex;
    }
    img {
        margin: 20px 20px;
    }
    p {
        font-size: 20px;
        margin: 40px 30px;
    }
    .sign_in_system {
        margin-left: 300px;
    }
</style>