<template>
  <div id="app">
    <SiteHeader/>
    <SiteMain/>
    <SiteFooter/>
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
</style>
