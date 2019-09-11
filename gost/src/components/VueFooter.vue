<template>
    <div class="inline__block">
        <div class="block">
            <p>О ресурсе</p>
            <p>Пользовательское соглашение</p>
            <p>Часто задаваемые вопросы (FAQ)</p>
            <p>Правила сайта</p>
            <p>Публичная оферта</p>
        </div>
        <div class="block">
            <h2>Новости</h2>
            <h2>Возможности</h2>
            <h2>Корпоративным клиентам</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VueFooter"
    }
</script>

<style scoped>
    .inline__block {
        background: #31183F;
        display: flex;
        height: 250px;
        justify-content: center;
        margin: 0 60px;
    }
    p, h2 {
        text-align: start;
        color: #FFF
    }
    .block {
        margin-right: 200px;
    }
</style>