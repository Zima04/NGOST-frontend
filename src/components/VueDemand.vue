<template>
    <main class="documents">
        <h1 class="main-title">Список требований</h1>
        <div class="documents-switch">
            <ul class="documents-switch__list">
                <li class="documents-switch__item">
                    <a class="switch__btn switch__btn--blue" v-bind:href="url">Все</a>
                </li>
                <li class="documents-switch__item">
                    <a class="switch__btn switch__btn--blue" v-bind:href="url">Стандартные</a>
                </li>
                <li class="documents-switch__item">
                    <a class="switch__btn switch__btn--blue" v-bind:href="url">Мое</a>
                </li>
            </ul>
            <form class="documents-switch__form">
                <input type="text" name="" id="">
                <button class="switch__btn switch__btn--green">Поиск</button>
            </form>
        </div>
        <div class="documents__table-wrapper">
            <button class="switch__btn switch__btn--red">Удалить...</button>
            <table class="documents__table">
                <thead>
                    <tr>
                        <th><input type="checkbox" name="" id=""></th>
                        <th>Название</th>
                        <th>Дата создания</th>
                        <th>Тип</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in rows" v-bind:key="row.id" class="switch__row">
                        <td><input type="checkbox" name="" id=""></td>
                        <td> <a v-bind:href="row.link" class="table__link">{{ row.name }}</a></td> 
                        <td> {{ row.date }} </td>
                        <td> {{ row.type }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button class="switch__btn switch__btn-green">Создать требование</button>
    </main>
</template>

<script>
export default {
    name: "VueDemand",
    data: function() {
        return {
            rows: [
            { 
                id: '1',
                link: '#!',
                name: 'IZDAT BSUIR',
                date: '25.08.2019',
                type: 'Стандартное'
             },
             { 
                id: '2',
                link: '#!',
                name: 'English STP',
                date: '11.06.2019',
                type: 'Стандартное'
             },
             { 
                id: '3',
                link: '#!',
                name: 'IZDAT',
                date: '01.07.2019',
                type: 'Стандартное'
             },
             { 
                id: '4',
                link: '#!',
                name: 'STP BSEU',
                date: '15.07.2019',
                type: 'Стандартное'
             },
             { 
                id: '5',
                link: '#!',
                name: 'MAGISTR',
                date: '27.07.2019',
                type: 'Стандартное'
             },
             { 
                id: '6',
                link: '#!',
                name: 'STP BSUIR',
                date: '27.07.2019',
                type: 'Стандартное'
             }
        ]
        };
    }
        
    
}
</script>

<style>
    .documents {
        display: flex;
        flex-direction: column;
    }

    .main-title {
        justify-self: center;
    }
</style>