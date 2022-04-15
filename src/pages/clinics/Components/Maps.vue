<script lang="ts" setup>
import Mapbox from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { onMounted } from 'vue';

const center = [107.770734, -6.918943]

onMounted(() => {
    Mapbox.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string
    const map = new Mapbox.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [center[0], center[1]],
        zoom: 9
    }).addControl(new Mapbox.AttributionControl({
        customAttribution: 'Map design by me'
    }));

    new Mapbox.Marker()
        .setLngLat([center[0], center[1]])
        .addTo(map)
})

</script>

<template>
    <div class="flex-1 h-[700px] relative overflow-hidden">
        <div id="map" class="w-full h-full" />
    </div>
</template>