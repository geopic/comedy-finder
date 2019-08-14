<template>
  <div id="home">
    <l-map id="map-display" :center="center" :zoom="zoom">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
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
  center = L.latLng(53.4808, -2.2426);
  style = 'border: 1px solid black; height: 80%; margin: 0px auto; width: 80%;';
  zoom = 14;

  // l-tile-layer props
  url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

  // l-marker props
  marker = L.latLng(53.4808, -2.2426);
}
</script>

<style lang="scss" scoped>
#home {
  height: 100%;

  #map-display {
    width: 100%;
  }
}

@media all and (min-width: $medquery-min-width-03) {
  #home {
    #map-display {
      border: 1px solid black;
      margin: 0px auto;
      width: 80%;
    }
  }
}
</style>
