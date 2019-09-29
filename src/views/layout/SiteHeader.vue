<!--
/**
 * src/views/layout/SiteHeader.vue
 * Global header of the site.
 * © George Pickering 2019, https://github.com/tedjenkins
 */
-->

<template>
  <header>
    <div id="site-title">{{ title }} Manchester</div>
    <div id="site-tagline">A map of all recurring comedy events in Manchester.</div>
    <nav>
      <router-link to="/map">Map</router-link>
      <router-link to="/help">Help Out</router-link>
    </nav>
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
  line-height: 1.5em;
  padding: 10px;
  text-align: center;

  #site-title {
    font-size: 18px;
  }

  #site-tagline {
    font-size: 14px;
  }

  nav {
    align-items: center;
    display: flex;
    justify-content: space-evenly;

    & > * {
      padding: 5px;
    }
  }
}

@media all and (min-width: $medquery-min-width-01) {
  header {
    #site-title {
      font-size: 20px;
    }
  }
}

@media all and (min-width: $medquery-min-width-02) {
  header {
    #site-title {
      font-size: 22px;
    }
  }
}

@media all and (min-width: $medquery-min-width-03) {
  header {
    #site-title {
      font-size: 24px;
    }
  }
}

@media all and (min-width: $medquery-min-width-04) {
  header {
    #site-title {
      font-size: 26px;
    }
  }
}

@media all and (min-width: $medquery-min-width-05) {
  header {
    #site-title {
      font-size: 30px;
    }
  }
}
</style>
