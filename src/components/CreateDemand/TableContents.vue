<template>
  <div>
    <h1 class="headline">
      Содержание
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
            <span>Расположение содержания</span>
          </v-col>
          <v-col cols="8">
            <v-select
              id="level-1"
              :items="fonts"
              dense />
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
            <span>Символы от текста до цифр</span>
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
            <span>Заголовок содержания</span>
          </v-col>
          <v-col cols="8">
            <v-select
              id="spelling-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-divider/>
        <v-row align="center">
          <v-col cols="12">
            <h3 class="subtitle">
              Заголовки первого уровня
            </h3>
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
        <v-divider/>
        <v-row align="center">
          <v-col cols="12">
            <h3 class="subtitle">
              Заголовки второго уровня
            </h3>
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
        <v-divider/>
        <v-row align="center">
          <v-col cols="12">
            <h3 class="subtitle">
              Заголовки третьего уровня
            </h3>
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
  </div>
</template>

<script>
export default {
	name: 'TableContets',
	data: () => ({
		field_contents_main_position: null,
		field_contents_font_symbol: null,
		field_contents_title: null,
		field_contents_first: null,
		field_contents_firstan: null,
		field_contents_second: null,
		field_contents_secondan: null,
		field_contents_first_02: null,
		field_contents_firstan_02: null,
		field_contents_second_02: null,
		field_contents_secondan_02: null,
		field_contents_first_03: null,
		field_contents_firstan_03: null,
		field_contents_second_03: null,
		field_contents_secondan_03: null,
		field_contents_font_font: null,
		field_contents_font_size: null,
		field_contents_font_color: null,
		field_contents_font_background: null,
	})
};
</script>

<style>

</style>
