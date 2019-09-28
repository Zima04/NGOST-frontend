/* eslint-disable no-unused-vars */
<template>
  <v-app>
    <div id="app">
      <VueHeader />
      <main class="content">
        <router-view/>
      </main>
      <VueFooter />
    </div>
  </v-app>
</template>

<script>
import VueHeader from './components/VueHeader.vue';
import VueFooter from './components/VueFooter.vue';
import './assets/normalize.css';

export default {
  name: 'App',
  components: {
    VueHeader,
    VueFooter,
  }
};
</script>
