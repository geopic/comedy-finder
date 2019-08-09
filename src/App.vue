<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
    <SiteFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SiteHeader from '@/views/layout/SiteHeader.vue';
import SiteMain from '@/views/layout/SiteMain.vue';
import SiteFooter from '@/views/layout/SiteFooter.vue';

@Component({
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  }
})
export default class App extends Vue {}
</script>


<style lang="scss">
#app {
  align-items: stretch;
  background-color: #eee;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}

@media all and (min-width: $medquery-min-width-05) {
  #app {
    border: 1px solid forestgreen;
    border-bottom: 0px;
    border-top: 0px;
    margin: 0px auto;
    max-width: $medquery-min-width-05;
  }
}
</style>
