<template>
  <div class="demandCreate">
    <div class="tabs">
      <v-btn-toggle group class="tabs__row">
        <v-btn>Тип требований</v-btn>
        <v-btn>Параметры страницы</v-btn>
        <v-btn>Колонтитулы</v-btn>
        <v-btn>Текст</v-btn>
        <v-btn>Заголовки</v-btn>
      </v-btn-toggle>
      <v-btn-toggle class="tabs__row">
        <v-btn>Содержание</v-btn>
        <v-btn>Рисунки</v-btn>
        <v-btn>Таблицы</v-btn>
        <v-btn>Формулы</v-btn>
        <v-btn>Списки</v-btn>
      </v-btn-toggle>
      <v-btn-toggle class="tabs__row">
        <v-btn>Литература</v-btn>
        <v-btn>Примечания</v-btn>
        <v-btn>Приложения</v-btn>
        <v-btn>Конструктор источников</v-btn>
      </v-btn-toggle>
    </div>
    <component
      :is="TypesDemand">
    </component>
    <component
      :is="HeadersFooters">
    </component>
  </div>
</template>

<script>
import TypesDemand from '@/components/CreateDemand/TypesDemand.vue';
import HeadersFooters from '@/components/CreateDemand/HeadersFooters.vue';

export default {
  data() {
    return {
      TypesDemand,
      HeadersFooters
    };
  }
};
</script>

<style lang="scss">
.demandCreate {
  padding: 10px;
  .tabs {
    display: flex;
    flex-direction: column;

    &__row {
      display: flex;

      &> div {
        width: 150px;
        border: 1px solid black;
        padding: 5px;
      }
    }
  }
}
</style>
