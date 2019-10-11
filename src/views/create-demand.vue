<template>
	<div class="demandCreate">
		<v-tabs center-active>
			<v-tab tile @click="handleTab('typesDemand')">Тип требований</v-tab>
			<v-tab tile @click="handleTab('pageParams')">Параметры страницы</v-tab>
			<v-tab tile @click="handleTab('headersFooters')">Колонтитулы</v-tab>
			<v-tab tile @click="handleTab('')">Текст</v-tab>
			<v-tab tile @click="handleTab('headline')">Заголовки</v-tab>
			<v-tab tile @click="handleTab('tableContets')">Содержание</v-tab>
			<v-tab tile @click="handleTab('images')">Рисунки</v-tab>
			<v-tab tile @click="handleTab('')">Таблицы</v-tab>
			<v-tab tile @click="handleTab('formuls')">Формулы</v-tab>
			<v-tab tile @click="handleTab('')">Списки</v-tab>
			<v-tab tile @click="handleTab('')">Литература</v-tab>
			<v-tab tile @click="handleTab('')">Примечания</v-tab>
			<v-tab tile @click="handleTab('')">Приложения</v-tab>
			<v-tab tile @click="handleTab('')">Конструктор источников</v-tab>
		</v-tabs>
		<div class="tabs-content">
			<component :is="components[currentTab]" />
		</div>
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
				images: Images
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
}
</style>
