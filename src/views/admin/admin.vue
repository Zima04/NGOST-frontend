<template>
  <div class="app-container">
    <v-navigation-drawer permanent>
      <v-list
        dense
        nav>
        <v-list-item
          v-for="item in items"
          :key="item.name"
          :to="item.linkTo"
          link>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="admin">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
	name: 'Admin',
	data() {
		return {
			items: [
				{
					name: 'Новости',
					linkTo: '/admin/news'
				},
			]
		};
	},
	methods: {}
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
.admin {
	width: calc(100% - 256px);
}
</style>
