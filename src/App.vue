<template>
  <div id="app">
    <VueHeader />
    <main class="content">
      <router-view></router-view>
      <VueDemand />
      <VueDocs />
    </main>
    <VueFooter />
  </div>
</template>

<script>
import VueHeader from "./components/VueHeader.vue";
import VueDemand from "./components/VueDemand.vue";
import VueDocs from "./components/VueDocs.vue";
import VueFooter from "./components/VueFooter.vue";
import "../src/assets/normalize.css";

export default {
  name: "app",
  components: {
    VueHeader,
    VueDemand,
    VueDocs,
    VueFooter
  }
};
</script>

<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: auto;
}
.content {
  padding-top: 70px;
}
</style>
