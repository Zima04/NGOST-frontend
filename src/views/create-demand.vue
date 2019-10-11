<template>
  <div class="demandCreate">
    <div class="tabs">
      <div class="tabs__row">
        <div class="tabs__btnGroup">
          <v-btn
            tile
            @click="handleTab('typesDemand')">
            Тип требований
          </v-btn>
          <v-btn
            tile
            @click="handleTab('pageParams')">
            Параметры страницы
          </v-btn>
          <v-btn
            tile
            @click="handleTab('headersFooters')">
            Колонтитулы
          </v-btn>
          <v-btn
            tile
            @click="handleTab('')">
            Текст
          </v-btn>
          <v-btn
            tile
            @click="handleTab('headline')">
            Заголовки
          </v-btn>
        </div>

        <div class="tabs__btnGroup">
          <v-btn
            tile
            @click="handleTab('tableContets')">
            Содержание
          </v-btn>
          <v-btn
            tile
            @click="handleTab('images')">
            Рисунки
          </v-btn>
          <v-btn
            tile
            @click="handleTab('')">
            Таблицы
          </v-btn>
          <v-btn
            tile
            @click="handleTab('formuls')">
            Формулы
          </v-btn>
          <v-btn
            tile
            @click="handleTab('')">
            Списки
          </v-btn>
        </div>
        <div class="tabs__btnGroup">
          <v-btn
            tile
            @click="handleTab('')">
            Литература
          </v-btn>
          <v-btn
            tile
            @click="handleTab('')">
            Примечания
          </v-btn>
          <v-btn
            tile
            @click="handleTab('')">
            Приложения
          </v-btn>
          <v-btn
            tile
            @click="handleTab('')">
            Конструктор источников
          </v-btn>
        </div>
      </div>
    </div>
    <component
      :is="components[currentTab]"
    />
  </div>
</template>

<script>
import TypesDemand from '@/components/CreateDemand/TypesDemand.vue';
import HeadersFooters from '@/components/CreateDemand/HeadersFooters.vue';
import PageParams from '@/components/CreateDemand/PageParams.vue';
import Formuls from '@/components/CreateDemand/Formuls.vue';
import Headline from '@/components/CreateDemand/Headline.vue';
import TableContents from '@/components/CreateDemand/TableContents.vue';
import Images from '@/components/CreateDemand/Images.vue';

export default {
  data() {
    return {
      TypesDemand,
      HeadersFooters,
      currentTab: 'typesDemand',
      components: {
        typesDemand: TypesDemand,
        headersFooters: HeadersFooters,
        pageParams: PageParams,
        formuls: Formuls,
        headline: Headline,
        tableContets: TableContents,
        images: Images,
      }
    };
  },
  methods: {
    handleTab(name) {
      this.currentTab = name;
    }
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
      flex-direction: column;
    }

    &__btnGroup {
      & > button {
        height: 48px!important;
        box-shadow: none;
        border: 1px solid rgba(0, 0, 0, 0.12) !important;
      }
    }
  }
}
</style>
