<template>
  <div class="formuls">
    <div class="d-flex">
      <div class="formuls__title">
        Интервал
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex align-center">
          <span class="mr-4">От текста до формулы:</span>
          <v-text-field class="mr-4"/>
          <v-select
            :items="sizes"/>
        </div>
        <div class="d-flex align-center">
          <span class="mr-4">От формулы до текста:</span>
          <v-text-field class="mr-4"/>
          <v-select
            :items="sizes"/>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="formuls__title">
        Настройки нумерации
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex align-center">
          <span class="mr-4">Формат номера</span>
          <v-select
            label="(нет)"/>
        </div>
        <div class="d-flex align-center">
          <span class="mr-4">Тип нумерации</span>
          <v-select
            label="(нет)"/>
        </div>
        <div class="d-flex">
          <v-checkbox
            label="Применить настройки основного текста"/>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="formuls__title">
        Настойки формул
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex flex-column">
          <span>Шрифт номера</span>
          <div class="d-flex">
            <v-select
              :items="fonts"
              class="mr-4 w-250"
              label="Select font"
              dense />
            <v-select
              :items="fontSizes"
              class="w-250"
              label="Select font size"
              dense />
          </div>
          <div class="d-flex">
            <v-btn-toggle
              v-model="align"
              class="mr-4">
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
              class="mr-4"
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
              class="w-70 mr-4"
              :items="sizes"
              label="A"
              dense />
            <v-select
              class="w-70"
              :items="sizes"
              label="ab"
              dense />
          </div>
        </div>
        <div class="d-flex flex-column">
          <span>Шрифт формулы</span>
          <div class="d-flex">
            <v-select
              :items="fonts"
              class="mr-4 w-250"
              label="Select font"
              dense />
            <v-select
              :items="fontSizes"
              class="w-250"
              label="Select font size"
              dense />
          </div>
          <div class="d-flex">
            <v-btn-toggle
              v-model="align"
              class="mr-4">
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
              class="mr-4"
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
              class="w-70 mr-4"
              :items="sizes"
              label="A"
              dense />
            <v-select
              class="w-70"
              :items="sizes"
              label="ab"
              dense />
          </div>
        </div>
        <div class="d-flex flex-column">
          <span>Допустимый символ умножить</span>
          <v-radio-group
            v-model="radioGroup">
            <v-radio
              label="˟"/>
            <v-radio
              label="·"/>
            <v-radio
              label="*"/>
          </v-radio-group>
        </div>
        <div class="d-flex flex-column">
          <span>Допустимый символ разделить</span>
          <v-radio-group
            v-model="radioGroup">
            <v-radio
              label="/"/>
            <v-radio
              label="÷"/>
            <v-radio
              label="Проставить номер для числовых расчетов"/>
          </v-radio-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'Formuls',
	data() {
		return {
			sizes: ['mm', 'cm'],
			fonts: [
				'Arial',
				'Calibri',
			],
			fontSizes: [1, 5, 10, 15],
		};
	}
};
</script>

<style lang="scss">
.formuls {
  display: flex;
  flex-direction: column;
  &__title {
    display: flex;
    align-items: center;
    width: 200px;
  }
  .w-250 {
    max-width: 250px;
  }
  .w-70 {
    max-width: 70px;
  }
}
</style>
