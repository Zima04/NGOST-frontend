<template>
    <div class="container">
        <h1 class="title">Система онлайн форматирования документов "Змест"</h1>
        <p class="text">Быстро и легко отредактируйте свои документы по шаблону</p>
        <button>Начать работу</button>
        <div class="description">
            <h2 class="title">О проекте</h2>
            <div class="container">
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about",
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
<style lang="scss" scoped>

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            margin: 0 0 1rem;
            text-align: center;
        }
        p {
            margin: 0 0 1rem;
            text-align: center;
        }
        button {
            all: unset;
            padding: 0;
            border: none;
            font: inherit;
            color: white;
            cursor: pointer;
            background: #3F3955;
            padding: .5rem 2rem;

            &:focus,
            &:hover {
                background: #3F3940;
            }

        }
    }

</style>