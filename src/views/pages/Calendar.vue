<template>
  <div id="calendar"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Calendar as Cal } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component
export default class Calendar extends Vue {
  mounted() {
    const calendar = new Cal(document.getElementById('calendar')!, {
      plugins: [dayGridPlugin]
    });

    calendar.render();
  }
}
</script>

<style lang="scss" scoped>
</style>
