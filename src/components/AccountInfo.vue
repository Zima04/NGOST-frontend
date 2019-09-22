<template>
    <div>
    <h1 class="headline">Личная информация</h1>
        <v-form
            ref="form"
            lazy-validation
        >
            <v-container>
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="name"
                            label="Логин"
                        />
                        <v-text-field
                            v-model="current_password"
                            label="Текущий Пароль"
                            type="password"
                        />
                        <v-text-field
                            v-model="email"
                            label="E-mail"
                            type="email"
                        />
                        <v-text-field
                            v-model="password"
                            label="Пароль"
                            type="password"
                        />
                        <v-text-field
                            v-model="confirm_password"
                            label="Подтвердите пароль"
                            type="password"
                        />
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="firstname"
                            label="Имя"
                        />
                        <v-text-field
                            v-model="phone"
                            label="Мобильный телефон"
                            type="tel"
                        />
                        <v-text-field
                            v-model="county"
                            label="Страна"
                        />
                        <v-file-input multiple label="Загрузить изображение"></v-file-input>
                        <v-text-field
                            v-model="city"
                            label="Город"
                        />
                        <v-text-field
                            v-model="lastname"
                            label="Фамилия"
                        />
                    </v-col>
                </v-row>
                    <v-checkbox
                        v-model="info_change"
                        label="Оповещать об изменении состояния документа по электронной почте"
                    />
                    <v-checkbox
                        v-model="distribution"
                        label="Подписаться на информационную рассылку сервиса"
                    />
                    <v-btn>Сохранить</v-btn>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "AccountInfo",
        data: () => ({
            name: '',
            current_password: '',
            email: '',
            password: '',
            confirm_password: '',
            firstname: '',
            phone: '',
            county: '',
            city: '',
            lastname: '',
            info_change: false,
            distribution: false,
        })
    }
</script>

<style>

</style>