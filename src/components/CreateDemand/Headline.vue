<template>
  <div>
    <h1 class="headline">
      Заголовки
    </h1>
    <v-row
      no-gutters
      fluid
      align="center"
      justify="start">
      <v-col
        cols="12"
        md="2"
        align-self="start">
        <h2 class="title">
          Основное
        </h2>
      </v-col>
      <v-col
        cols="12"
        md="5">
        <v-row
          no-gutters
          align="center">
          <v-col cols="4">
            <span>Уровень заголовка</span>
          </v-col>
          <v-col cols="8">
            <v-select
              id="level-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="center">
          <v-col cols="4">
            <span>Написание</span>
          </v-col>
          <v-col cols="8">
            <v-select
              id="spelling-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="center">
          <v-col cols="4">
            <span>Шаблон нумерации заголовка</span>
          </v-col>
          <v-col cols="8">
            <v-select
              id="spelling-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="center">
          <v-col cols="4">
            <span>Свой вариант</span>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="brief_name"
            />
          </v-col>
          <v-checkbox
            v-model="info_change"
            label="Применить настройки основного текста"
          />
        </v-row>
        <v-row
          no-gutters
          align="center">
          <v-col cols="4">
            <span>Интервал до заголовка</span>
          </v-col>
          <v-col cols="8">
            <v-select
              id="spelling-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="center">
          <v-col cols="4">
            <span>Интервал после заголовка</span>
          </v-col>
          <v-col cols="8">
            <v-select
              id="spelling-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="center">
          <v-col cols="4">
            <span>Первая строка</span>
          </v-col>
          <v-col cols="4">
            <v-select
              id="spelling-1"
              :items="fonts"
              dense />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="brief_name"
              label="мм"
            />
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="center">
          <v-col cols="4">
            <span>Вторая строка</span>
          </v-col>
          <v-col cols="4">
            <v-select
              id="spelling-1"
              :items="fonts"
              dense />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="brief_name"
              label="мм"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider/>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="2"
        align-self="start">
        <h2 class="title">
          Шрифт
        </h2>
      </v-col>
      <v-col
        cols="12"
        md="5">
        <v-row
          no-gutters
          align="center">
          <v-col cols="4">
            <v-select
              id="spelling-1"
              :items="fonts"
              dense />
          </v-col>
          <v-col cols="4">
            <v-select
              id="spelling-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="center">
          <v-col cols="5">
            <v-btn-toggle
              v-model="fontType"
              class="mr-4"
              dense
              multiple
            >
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
          </v-col>
          <v-col cols="5">
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
          </v-col>
          <v-col cols="1">
            <v-select
              class="w-70 mr-4"
              :items="sizes"
              label="A"
              dense />
          </v-col>
          <v-col cols="1">
            <v-select
              class="w-70"
              :items="sizes"
              label="ab"
              dense />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider/>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="2"
        align-self="start">
        <h2 class="title">
          Нумерация
        </h2>
      </v-col>
      <v-col
        cols="12"
        md="5">
        <v-row
          no-gutters
          align="center">
          <v-col cols="4">
            <span>Тип нумерации</span>
          </v-col>
          <v-col cols="8">
            <v-select
              id="spelling-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="center">
          <v-col cols="12">
            <span>Формат номеров</span>
          </v-col>
          <v-col cols="12">
            <v-btn-toggle
              v-model="fontType"
              dense
            >
              <v-btn class="square">
                <img src="@/assets/demand/8.png" >
              </v-btn>
              <v-btn class="square">
                <img src="@/assets/demand/9.png" >
              </v-btn>
              <v-btn class="square">
                <img src="@/assets/demand/10.png" >
              </v-btn>
              <v-btn class="square">
                <img src="@/assets/demand/11.png" >
              </v-btn>
            </v-btn-toggle>
          </v-col>
          <v-col cols="12">
            <v-btn-toggle
              v-model="fontType"
              dense
            >
              <v-btn class="square">
                <img src="@/assets/demand/12.png" >
              </v-btn>
              <v-btn class="square">
                <img src="@/assets/demand/13.png" >
              </v-btn>
              <v-btn class="square">
                <img src="@/assets/demand/14.png" >
              </v-btn>
              <v-btn class="square">
                <img src="@/assets/demand/15.png" >
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="center">
          <v-col cols="4">
            <span>Свой формат номера</span>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="brief_name"
            />
          </v-col>
          <v-checkbox
            v-model="info_change"
            label="Применить настройки основного текста"
          />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Headline',
  data: () => ({
    field_title_main_level: null,
    field_title_main_spelling: null,
    field_title_main_pattern: null,
    field_title_main_own: null,
    field_title_main_interval: null,
    field_title_main_after: null,
    field_title_main_first: null,
    field_title_main_firstan: null,
    field_title_main_second: null,
    field_title_main_secondan: null,
    field_title_font_font: null,
    field_title_font_size: null,
    field_title_font_color: null,
    field_title_font_background: null,
    field_title_number_type2: null,
    field_title_number_view2: null,
    field_title_number_ownview2: null,
    weight: null,
  })
};
</script>

<style lang="scss">
	.square {
		width: 76px !important;
		height: 76px !important;
	}
</style>
