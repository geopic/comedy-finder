<template>
  <footer>
    <div id="site-credits">
      &copy; 2019
      <a href="https://twitter.com/bobpicksby123">George Pickering</a>
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
  padding: 10px;
  text-align: right;
}
</style>
