<template>
  <div class="pageParams">
    <div class="d-flex">
      <div class="pageParams__title">
        Название *
      </div>
      <div class="pageParams__info">
        <v-text-field></v-text-field>
      </div>
    </div>
    <div class="d-flex">
      <div class="pageParams__title">
        Примечание
      </div>
      <div class="pageParams__info">
        <v-text-field></v-text-field>
      </div>
    </div>
    <div class="d-flex">
      <div class="pageParams__title">
        Выбрать шаблон настроек
      </div>
      <div class="pageParams__info">
        <v-select
          :items="templatesSetting"
          dense />
      </div>
    </div>
    <div class="d-flex">
      <div class="pageParams__title">
        Поля
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex">
          <v-text-field class="mr-4" label="Верхнее"/>
          <v-text-field label="Левое"/>
        </div>
        <div class="d-flex">
          <v-text-field class="mr-4" label="Нижнее"/>
          <v-text-field label="Правое"/>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="pageParams__title">
        Размер бумаги
      </div>
      <div class="d-flex">
        <v-select
          :items="sizePage"
          class="mr-4"
          label="Размер бумаги"
          dense/>
        <v-select
          :items="orientations"
          label="Ориентация"
          dense/>
      </div>
    </div>
    <div class="d-flex">
      <div class="pageParams__title">
        Несколько страниц
      </div>
      <div class="d-flex">
        <v-select
          :items="pageVariant"
          dense/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageParams',
  data() {
    return {
      templatesSetting: ['1', '2'],
      sizePage: ['A1', 'A2', 'A3', 'A4'],
      orientations: ['Книжная', 'альбомная'],
      pageVariant: [
        'Обычный',
        'Зеракальные поля',
        '2 страницы на листе',
        'Брошюра',
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.pageParams {

  &__title {
    display: flex;
    align-items: center;
    width: 240px;
  }
}
</style>
