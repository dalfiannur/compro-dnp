<script lang="ts" setup>
import { GoogleMap, Marker } from "vue3-google-map";
// import GmapCustomMarker from 'vue3-gmap-custom-marker';

const center = { lat: -6.918943, lng: 107.770734 };
const markerOptions = { position: center};
</script>

<template>
    <GoogleMap
        api-key="AIzaSyBSwLyhWi09hwk6ttamHsmoAnK2M3Fwp8Y"
        style="width: 100%; height: 700px"
        :center="center"
        :zoom="15"
    >
        <Marker :options="markerOptions" />
    </GoogleMap>
</template>