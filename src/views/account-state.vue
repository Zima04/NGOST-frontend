<template>
    <v-container grid-list-xl>
        <h1 class="headline">Состояние счета</h1>
        <p>Баланс: 5</p>
        <p>Тариф старт <v-btn color="primary" disabled>Сменить тариф</v-btn></p>

        <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="5"
            class="elevation-1"
            :hide-default-footer="true"
        />
        <v-btn disabled>Состояние счета</v-btn>
    </v-container>
</template>

<script>
export default {
    name: 'account-state',
    data: () => ({
        headers: [
            {
                text: 'Дата',
                align: 'left',
                sortable: false,
                value: 'date',
            },
            { 
                text: 'Время', 
                value: 'time' 
            },
            { 
                text: 'Действие', 
                value: 'action' 
            },
            { 
                text: 'Документ', 
                value: 'document' 
            },
            { 
                text: 'Сумма, бел. руб', 
                value: 'price' 
            },
        ],
        items: [
            {
                date: '04.09.2019',
                time: '21.09',
                action: 'Пополнение счета',
                document: '-',
                price: '5',
            }
        ]
    })
}
</script>

<style>
    .elevation-1 {
        margin-bottom: 1rem;
    }
</style>