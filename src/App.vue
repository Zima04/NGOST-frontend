<template>
  <div id="app">
    <VueHeader />
    <div class="content">
      <router-view></router-view>
    </div>
    <VueFooter />
  </div>
</template>

<script>
import VueHeader from './components/VueHeader.vue';
import VueFooter from './components/VueFooter.vue'
import '../src/assets/normalize.css';

export default {
  name: 'app',
  components: {
    VueHeader,
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
