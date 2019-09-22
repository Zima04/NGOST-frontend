<template>
    <div>
    <h1 class="headline">Информация о компании</h1>
        <v-form
            ref="form"
            lazy-validation
        >
            <v-text-field
                v-model="trade_name"
                label="Полное название"
            />
            <v-text-field
                v-model="brief_name"
                label="Сокращенное название"
            />
            <h2 class="subtitle-1">Юридический адрес</h2>
            <v-text-field
                v-model="legal_state"
                label="Страна"
            />
            <v-text-field
                v-model="legal_city"
                label="Город"
            />
            <v-text-field
                v-model="legal_post"
                label="Почтовый индекс"
            />
            <v-text-field
                v-model="legal_address"
                label="Адрес"
            />
            <h2 class="subtitle-1">Почтовый адрес</h2>
            <v-text-field
                v-model="post_state"
                label="Страна"
            />
            <v-text-field
                v-model="post_city"
                label="Город"
            />
            <v-text-field
                v-model="post_index"
                label="Почтовый индекс"
            />
            <v-text-field
                v-model="post_address"
                label="Адрес"
            />
            <h2 class="subtitle-1">Руководство (кто подписывает договор)</h2>
            <v-text-field
                v-model="direction_job"
                label="Должность"
            />
            <v-text-field
                v-model="direction_proxy"
                label="На основании чего действует"
            />
            <v-text-field
                v-model="direction_name"
                label="ФИО (полностью)"
            />
            <h2 class="subtitle-1">Контактная информация</h2>
            <v-text-field
                v-model="contact_fax"
                label="Телефон/факс"
            />
            <v-text-field
                v-model="contact_phone"
                label="Телефон"
            />
            <v-text-field
                v-model="contact_email"
                label="Электронная почта"
            />
            <h2 class="subtitle-1">Банковские и другие реквизиты</h2>
            <v-text-field
                v-model="bank_unn"
                label="УНН"
            />
            <v-text-field
                v-model="bank_okpo"
                label="ОКПО"
            />
            <v-text-field
                v-model="bank_account"
                label="Расчетный счет"
            />
            <v-text-field
                v-model="bank_name"
                label="Банк"
            />
            <v-text-field
                v-model="bank_code"
                label="Код банка"
            />
            <v-text-field
                v-model="bank_address"
                label="Адрес банка"
            />
            <v-btn>Сохранить</v-btn>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "CompanyInfo",
        data: () => ({
            trade_name: '', 
            brief_name: '', 
            legal_state: '', 
            legal_city: '', 
            legal_post: '', 
            legal_address: '', 
            post_state: '', 
            post_city: '', 
            post_index: '', 
            post_address: '', 
            direction_job: '', 
            direction_proxy: '', 
            direction_name: '', 
            contact_fax: '', 
            contact_phone: '', 
            contact_email: '', 
            bank_unn: '', 
            bank_okpo: '', 
            bank_account: '', 
            bank_name: '', 
            bank_code: '', 
            bank_address: '', 
        })
    }
</script>

<style>

</style>