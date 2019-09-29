<!--
/**
 * src/views/layout/SiteMain.vue
 * Global <main> element of the site.
 * © George Pickering 2019, https://github.com/tedjenkins
 */
-->

<template>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SiteMain extends Vue {}
</script>

<style lang="scss" scoped>
</style>
