<template>
  <div id="app">
    <VueHeader />
    <div class="content">
      <VueDemand />
      <router-view></router-view>
    </div>
    <VueFooter />
  </div>
</template>

<script>
import VueHeader from './components/VueHeader.vue';
import VueFooter from './components/VueFooter.vue';
import VueDemand from './components/VueDemand.vue';

export default {
  name: 'app',
  components: {
    VueHeader,
    VueDemand,
    VueFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .content {
    margin: 0 60px;
  }
</style>
