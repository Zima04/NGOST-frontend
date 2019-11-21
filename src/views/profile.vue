<template>
  <v-tabs
    v-model="tab"
    :centered="centered"
    :grow="grow"
    :vertical="vertical"
    :right="right"
  >
    <v-tabs-slider />

    <v-tab
      v-for="i in tabs"
      :key="i.name"
      :href="`#tab-${i.name}`"
    >
      {{ i.name }}
    </v-tab>

    <v-tab-item
      v-for="i in tabs"
      :key="i.name"
      :value="'tab-' + i.name"
    >
      <v-card
        flat
        tile
      >
        <component
          :is="i.component"
        />
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>

import AccountInfo from '../components/AccountInfo.vue';
import CompanyInfo from '../components/CompanyInfo.vue';

export default {
	name: 'Profile',
	components: {
		AccountInfo,
		CompanyInfo
	},
	data () {
		return {
			tab: null,
			icons: false,
			centered: false,
			grow: false,
			vertical: false,
			prevIcon: false,
			nextIcon: false,
			right: false,
			tabs: [
				{ name: 'Account', component: AccountInfo },
				{ name: 'Информация о компании', component: CompanyInfo }
			],
		};
	},
};
</script>

<style>

</style>
