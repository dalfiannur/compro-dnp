<script lang="ts" setup>
import Mapbox from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { onMounted, ref, toRefs, watch } from "vue";

const center = [107.770734, -6.918943];

type Prop = {
  location: {
    longitude?: string;
    latitude?: string;
  };
};
const props = defineProps<Prop>();
const { location } = toRefs(props);
const map = ref<Mapbox.Map>();

onMounted(() => {
  Mapbox.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;
  map.value = new Mapbox.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [center[0], center[1]],
    zoom: 9,
  }).addControl(
    new Mapbox.AttributionControl({
      customAttribution: "Map design by me",
    })
  );

  new Mapbox.Marker().setLngLat([center[0], center[1]]).addTo(map.value);
});

watch(
  location,
  (loc) => {
    if (map.value && loc.longitude && loc.latitude) {
      map.value.setCenter([+loc.longitude, +loc.latitude]);
      new Mapbox.Marker().setLngLat([+loc.longitude, +loc.latitude]).addTo(map.value);
    }
  },
  { deep: true }
);
</script>

<template>
  <div class="flex-1 h-[700px] relative overflow-hidden">
    <div id="map" class="w-full h-full" />
  </div>
</template>
