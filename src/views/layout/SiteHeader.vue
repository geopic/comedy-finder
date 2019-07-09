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
header {
  font-size: 18px;
  line-height: 1.5em;
  padding: 10px;
  text-align: center;
}

@media all and (min-width: $medquery-min-width-01) {
  header {
    font-size: 20px;
  }
}

@media all and (min-width: $medquery-min-width-02) {
  header {
    font-size: 22px;
  }
}

@media all and (min-width: $medquery-min-width-03) {
  header {
    font-size: 24px;
  }
}

@media all and (min-width: $medquery-min-width-04) {
  header {
    font-size: 26px;
  }
}

@media all and (min-width: $medquery-min-width-05) {
  header {
    font-size: 30px;
  }
}
</style>
