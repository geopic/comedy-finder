<template>
  <div id="home">
    <l-map :center="center" :style="style" :zoom="zoom">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
    <div id="calendar">
      <!-- Calendar goes here -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

@Component({
  components: {
    'l-map': LMap,
    'l-tile-layer': LTileLayer,
    'l-marker': LMarker
  }
})
export default class Home extends Vue {
  // l-map props
  center = L.latLng(47.41322, -1.219482);
  style = 'border: 1px solid black; height: 50%; width: 50%;';
  zoom = 13;

  // l-tile-layer props
  url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  attribution = 'Test attribution';

  // l-marker props
  marker = L.latLng(47.41322, -1.219482);
}
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
}
</style>
