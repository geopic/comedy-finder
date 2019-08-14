<template>
  <footer>
    <div id="site-credits">
      Website developed by
      <a href="https://github.com/tedjenkins">George Pickering</a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SiteFooter extends Vue {}
</script>

<style lang="scss" scoped>
footer {
  font-size: 15px;
  padding: 10px;
  text-align: center;
}

@media all and (min-width: $medquery-min-width-03) {
  footer {
    font-size: 16px;
    text-align: right;
  }
}
</style>
