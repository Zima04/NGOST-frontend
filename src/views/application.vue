<template>
  <div class="app-container">
    <v-navigation-drawer permanent>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.name"
          :to="item.linkTo"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="application">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Application',
  data() {
    return {
      items: [
        {
          name: 'Загрузка документа',
          linkTo: '/app/import-doc'
        },
        {
          name: 'Формирование требований',
          linkTo: '/app/create-demand'
        },
        {
          name: 'Список требований',
          linkTo: '/'
        },
        {
          name: 'Список документов',
          linkTo: '/'
        },
        {
          name: 'Личная информация',
          linkTo: '/app/my-profile'
        },
        {
          name: 'Состояние счета',
          linkTo: '/app/account-state'
        }
      ]
    };
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
    .app-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: stretch;
    }
    .navigation {
        height: 100%;
    }
    .application {
        width: 100%;
    }
</style>
