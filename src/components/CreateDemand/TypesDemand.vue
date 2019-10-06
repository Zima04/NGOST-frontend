<template>
  <div class="typesDemand">
    <div class="type">
      <div class="type__title">
        Тип работы
      </div>
      <v-radio-group
        v-model="radioGroup">
        <v-radio
          label="Сборник трудов или журнал">
        </v-radio>
        <v-radio
          label="Книга, диссертация, диплом, курсовая">
        </v-radio>
        <v-radio
          label="Книга, диссертация, диплом, курсовая">
        </v-radio>
      </v-radio-group>
    </div>
    <div class="settings">
      <div class="settings__title">
        Настойки
      </div>
      <div class="settings__select">
        <div class="select__row">
          <v-checkbox
            label="Колонтитулы"/>
          <v-checkbox
            label="Текст"/>
          <v-checkbox
            label="Заголовки"/>
          <v-checkbox
            label="Содержание"/>
        </div>
        <div class="select__row">
          <v-checkbox
            label="Таблицы"/>
          <v-checkbox
            label="Формулы"/>
          <v-checkbox
            label="Списки"/>
          <v-checkbox
            label="Литература"/>
        </div>
        <div class="select__row">
          <v-checkbox
            label="Рисунки"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioGroup: ''
    };
  }
};
</script>

<style lang="scss">
.typesDemand {
  .type {
    display: flex;
    flex-direction: column;

    &__title {

    }

    &__select {
      display: flex;
    }
  }

  .settings {
    &__title {}
    &__select {
      display: flex;
      flex-direction: column;

      .select__row {
        display: flex;

        .v-input {
          margin-right: 12px;

          .v-input__control {
            .v-messages {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
