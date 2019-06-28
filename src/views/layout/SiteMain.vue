<template>
  <main>
    <router-view/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SiteMain extends Vue {}
</script>

<style lang="scss" scoped>
</style>
