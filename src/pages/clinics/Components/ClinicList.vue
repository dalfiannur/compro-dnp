<script lang="ts" setup>
import { defineProps } from 'vue'
// @ts-ignore
import ClinicItem from './ClinicItem.vue';
import { Clinic } from '../../../typings/Clinic'

interface Prop {
    items: Clinic[]
}

const props = defineProps<Prop>()

</script>

<template>
    <ClinicItem v-for="(item, index) in items" :key="`clinic-${index}`" :data="item" :index="index"></ClinicItem>
</template>