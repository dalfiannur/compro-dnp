<script lang="ts" setup>
import ClinicItem from './ClinicItem.vue';

const items = ['1', '2'];
</script>

<template>
    <div class="w-4/5">
        <ClinicItem v-for="n in 4"></ClinicItem>
    </div>
</template>