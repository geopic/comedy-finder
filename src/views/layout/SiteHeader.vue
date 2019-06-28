<template>
  <header>
    <div id="site-title">{{ title }}</div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { props } from '@/utils';

@Component
export default class SiteHeader extends Vue {
  title = props.siteName;
}
</script>

<style lang="scss" scoped>
</style>
