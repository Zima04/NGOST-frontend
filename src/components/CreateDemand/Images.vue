<template>
  <div>
    <h1 class="headline">Рисунки (иллюстрации)</h1>
    <v-row no-gutters align="center" justify="start">
      <v-col cols="12" md="2" align-self="start">
        <h2 class="title">Размеры</h2>
      </v-col>
      <v-col cols="12" md="5">
        <v-row no-gutters align="center">
          <v-col cols="6">
            <v-select
              id="level-1"
              :items="fonts"
              dense />
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="brief_name"
            />
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="brief_name"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row fluid align="center" justify="start">
      <v-col cols="12" md="2" align-self="start">
        <h2 class="title">Границы рисунка</h2>
      </v-col>
      <v-col cols="12" md="5">
        <v-row no-gutters align="center">
          <v-col cols="4">
            <span>Толщина</span>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="brief_name"
            />
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="4">
            <span>Цвет</span>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="brief_name"
            />
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="4">
            <v-btn-toggle
                v-model="fontType"
                class="mr-4"
                dense
              >
                <v-btn>
                  <img src="@/assets/demand/1.png" />
                </v-btn>

                <v-btn>
                  <img src="@/assets/demand/2.png" />
                </v-btn>

                <v-btn>
                  <img src="@/assets/demand/3.png" />
                </v-btn>

                <v-btn>
                  <img src="@/assets/demand/4.png" />
                </v-btn>

                <v-btn>
                  <img src="@/assets/demand/5.png" />
                </v-btn>

                <v-btn>
                  <img src="@/assets/demand/6.png" />
                </v-btn>

                <v-btn>
                  <img src="@/assets/demand/7.png" />
                </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
     <v-row fluid align="center" justify="start">
      <v-col cols="12" md="2" align-self="start">
        <h2 class="title">Размещение рисунка</h2>
      </v-col>
      <v-col cols="12" md="5">
        <v-row no-gutters align="center">
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

            </v-btn-toggle>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row fluid align="center" justify="start">
      <v-col cols="12" md="2" align-self="start">
        <h2 class="title">Настройки подписи</h2>
      </v-col>
      <v-col cols="12" md="5">
        <v-row no-gutters align="center">
           <v-checkbox
            v-model="info_change"
            label="Применить настройки основного текста"
          />
        </v-row>
        <v-row no-gutters align="center">
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
        <v-row no-gutters align="center">
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
    <v-divider></v-divider>
    <v-row fluid align="center" justify="start">
      <v-col cols="12" md="2" align-self="start">
        <h2 class="title">Отступы и интервалы</h2>
      </v-col>
      <v-col cols="12" md="5">
        <v-row no-gutters align="center">
          <v-col cols="6">
            <span>От верхнего края рисунка до текста</span>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="brief_name"
            />
          </v-col>
          <v-col cols="3">
            <v-select
              id="level-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="6">
            <span>От подписи рисунка до текста</span>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="brief_name"
            />
          </v-col>
          <v-col cols="3">
            <v-select
              id="level-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="6">
            <span>Между подписью и рисунком</span>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="brief_name"
            />
          </v-col>
          <v-col cols="3">
            <v-select
              id="level-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row fluid align="center" justify="start">
      <v-col cols="12" md="2" align-self="start">
        <h2 class="title">Нумерация</h2>
      </v-col>
      <v-col cols="12" md="5">
        <v-row no-gutters align="center">
          <v-col cols="6">
            <span>Тип нумерации</span>
          </v-col>
          <v-col cols="6">
            <v-select
              id="level-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="6">
            <span>Шаблон нумерации рисунка</span>
          </v-col>
          <v-col cols="6">
            <v-select
              id="level-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="6">
            <span>Свой вариант</span>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="brief_name"
            />
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="6">
            <v-select
              id="level-1"
              :items="fonts"
              dense />
          </v-col>
          <v-col cols="6">
            <v-select
              id="level-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="3">
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
        <v-row no-gutters align="center">
           <v-checkbox
            v-model="info_change"
            label="Применить настройки основного текста"
          />
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="12">
            <span>Формат номеров</span>
          </v-col>
          <v-col cols="12">
            <v-btn-toggle
              v-model="fontType"
              dense
            >
              <v-btn class="square">
                <img src="@/assets/demand/8.png" />
              </v-btn>
              <v-btn class="square">
                <img src="@/assets/demand/9.png" />
              </v-btn>
              <v-btn class="square">
                <img src="@/assets/demand/10.png" />
              </v-btn>
              <v-btn class="square">
                <img src="@/assets/demand/11.png" />
              </v-btn>
            </v-btn-toggle>
          </v-col>
          <v-col cols="12">
            <v-btn-toggle
              v-model="fontType"
              dense
            >
							<v-btn class="square">
                <img src="@/assets/demand/12.png" />
              </v-btn>
							<v-btn class="square">
                <img src="@/assets/demand/13.png" />
              </v-btn>
              <v-btn class="square">
                <img src="@/assets/demand/14.png" />
              </v-btn>
              <v-btn class="square">
                <img src="@/assets/demand/15.png" />
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
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
        <v-row align="center">
          <v-col cols="12">
            <h3 class="subtitle">Шрифт цифр номера</h3>
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="4">
            <v-select
              id="level-1"
              :items="fonts"
              dense />
          </v-col>
          <v-col cols="4">
            <v-select
              id="level-1"
              :items="fonts"
              dense />
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="3">
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
  name: 'Images',
  data: () => ({
    field_pic_size_valid: null,
    field_pic_size_1: null,
    field_pic_size_2: null,
    field_pic_border_thickness: null,
    field_pic_border_color: null,
    field_pic_label_font: null,
    field_pic_label_size: null,
    field_pic_label_color: null,
    field_pic_label_background: null,
    field_pic_indents_top: null,
    field_pic_indents_top2: null,
    field_pic_indents_text: null,
    field_pic_indents_text2: null,
    field_pic_indents_pic: null,
    field_pic_indents_pic2: null,
    field_pic_number_type: null,
    field_number_pattern_pic: null,
    field_number_pattern_own: null,
    field_pic_font_font: null,
    field_pic_font_size: null,
    field_pic_font_color: null,
    field_pic_font_background: null,
    field_pic_number_own2: null,
    field_pic_number_font: null,
    field_pic_number_size: null,
    field_pic_number_color: null,
    field_pic_number_background: null,
  })
}
</script>

<style lang="scss">
	.square {
		width: 76px !important;
		height: 76px !important;
	}
</style>
