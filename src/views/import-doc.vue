<template>
    <v-container>
        <h1 class="headline">Загрузка документов</h1>
        <v-row align="center">
            <v-col class="d-flex py-0" cols="12" sm="6" >
                <v-select
                    :items="requirements"
                    label="Требования"
                    item-text="name"
                    outlined
                ></v-select>
            </v-col>
            <v-col class="d-flex py-0" cols="12" sm="6"></v-col>
            <v-col class="d-flex py-0" cols="12" sm="6">
                <v-file-input label="File input"></v-file-input>
            </v-col>
        </v-row>
        <div class="buttons">
            <v-btn color="error" class="mx-2">Удалить</v-btn>
            <v-btn color="primary" class="mx-2">Начать обработку</v-btn>
        </div>
      <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header>Требования к входному документу для корректной работы основных функций</v-expansion-panel-header>
            <v-expansion-panel-content>
                <ul>
                    <li>
                        загружать нужно всё одним файлом без титульного листа, листа задания, реферата и содержания, созданного в ручную
                    </li>
                    <li>
                        заголовки первого уровня (главы и разделы) должны быть набраны БОЛЬШИМИ (ЗАГЛАВНЫМИ) БУКВАМИ (комбинация "SHIFT+F3" делает выделенный фрагмент текста заглавными буквами), Документ должен содержать как минимум один такой заголовок
                    </li>
                    <li>
                        заголовки второго уровня (подразделы) должны быть набраны жирным шрифтом строчными (не заглавными) буквами
                    </li>
                    <li>
                        формулы должны быть набраны в редакторе формул, который встроен в Microsoft Office (не ниже 2010), или MathTipe 
                    </li>
                    <li>
                        приложение, его атрибут (вид) и заголовок должны быть набраны в три строки подряд. В первой строке заглавными буквами следует вставить слово «ПРИЛОЖЕНИЕ» и соответствующую заглавную букву (номер приложения). Во второй строке следует вставить атрибут (вид приложения), если он необходим. В третьей строке строчными буквами следует вставить название  приложения
                    </li>
                    <li>
                        все абзацы не должны иметь "Стиля" (рекомендуем перед загрузкой документа очистить "Стили" всех абзацев во вкладке «ГЛАВНАЯ» панели управления Microsoft Word)
                    </li>
                    <li>
                        рисунки сделанные средствами Microsoft Word в документе должны отсутствовать
                    </li>
                </ul>
            </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
</template>

<script>
export default {
    name: 'import-doc',
    data: () => ({
        requirements: [
            {
                name: 'STP BSUIR',
                value: 15
            },
            {
                name: 'MAGISTR',
                value: 16
            },
            {
                name: 'STP BSEU',
                value: 20
            },
            {
                name: 'IZDAT',
                value: 24
            },
            {
                name: 'English STP',
                value: 25
            },
            {
                name: 'IZDAT BSUIR',
                value: 26
            },
        ]
    })
}
</script>

<style>
    .buttons {
        margin-bottom: 1rem;
    }
</style>