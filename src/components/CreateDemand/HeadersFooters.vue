<template>
  <div class="headersFooters">
    <div class="headersFooters__item">
      <div class="item__title">
        Настройки текста
      </div>
      <div class="item__data text">
        <div class="text__font">
          <v-select
            :items="fonts"
            class="text__fontType"
            label="Select font"
            dense />
          <v-select
            :items="sizes"
            label="Select font size"
            dense />
        </div>
        <div class="text__params">
          <v-btn-toggle
            v-model="align"
            class="text__align">
            <v-btn>
              <v-icon>mdi-format-align-left</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>mdi-format-align-center</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>mdi-format-align-right</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>mdi-format-align-justify</v-icon>
            </v-btn>
          </v-btn-toggle>
          <v-btn-toggle
            v-model="fontType"
            class="text__paramsText"
            dense
            multiple>
            <v-btn>
              <v-icon>mdi-format-bold</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>mdi-format-italic</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>mdi-format-underline</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>mdi-format-color-fill</v-icon>
            </v-btn>
          </v-btn-toggle>
          <v-select
            class="text__color"
            :items="sizes"
            label="A"
            dense />
          <v-select
            class="text__any"
            :items="sizes"
            label="ab"
            dense />
        </div>
      </div>
    </div>
    <div class="headersFooters__item">
      <div class="item__title">
        Расположение номера страницы
      </div>
      <div class="item__data">
        <div class="item__template">
          Выбрать шаблон настроек
        </div>
        <v-select
          label="Расположение номера страницы"
          dense />
      </div>
    </div>
    <div class="headersFooters__item">
      <div class="item__title">
        Фильтрация нумерации страниц
      </div>
      <div class="filtersPage">
        <div class="filtersPage__start">
          <div class="filtersPage__text">
            Начать с
          </div>
          <v-text-field/>
        </div>
        <div class="filtersPage__end">
          <div class="filtersPage__text">
            Пропустить с
          </div>
          <v-text-field/>
        </div>
      </div>
    </div>
    <div class="headersFooters__item">
      <div class="item__title">
        Расстояние от края листа до нижнего
        номера страницы
      </div>
      <div class="item__data">
        <v-text-field/> мм
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fonts: [
        'Arial',
        'Calibri',
      ],
      sizes: [1, 5, 10, 15],
      align: null,
      fontType: null
    };
  }
};
</script>

<style lang="scss">
.headersFooters {
  &__item {
    display: flex;

    .item__title {
      display: flex;
      align-items: center;
      width: 240px;
    }
    .item__data {
      display: flex;
      align-items: center;
    }

    .item__template {
      margin-right: 8px;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      &__font {
        width: 100%;
        display: flex;
      }

      &__fontType {
        margin-right: 8px;
      }

      &__params {
        display: flex;
        align-items: center;
      }

      &__paramsText {
        margin-right: 8px;
      }

      &__align {
        margin-right: 8px;
      }

      &__color {
        width: 50px;
        margin-right: 8px;
      }

      &__any {
        width: 50px;
      }
    }
  }

  .filtersPage {

    &__start {
      display: flex;
      align-items: center;
    }

    &__end {
      display: flex;
      align-items: center;
    }

    &__text {
      width: 110px;
      margin-right: 8px;
    }
  }
}
</style>
