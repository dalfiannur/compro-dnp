<script lang="ts" setup>
import { defineProps, toRefs } from 'vue'

import { Clinic } from '../../../typings/Clinic'

interface Prop {
    data: Clinic;
    index: number;
}
const props = defineProps<Prop>()

</script>

<template>
    <div
        class="flex justify-between items-center w-full h-24"
        :class="{ 'bg-gray-100': (index % 2) === 1 }"
    >
        <div class="ml-6 sm:ml-16">
            <p class="font-questrial text-lg text-gray-600">{{ data.name }}</p>
            <p class="font-questrial text-sm text-hydrate -mt-1">{{ data.location }}</p>
        </div>
        <button class="flex text-sm sm:text-base items-center justify-center w-28 sm:w-40 h-11 mr-5 sm:mr-10 border border-gray-500">
            <img class="mr-2 sm:mr-3 w-3 sm:w-4" src="/img/location.svg" />
            <p class="font-questrial text-gray-600 mt-1">Lihat Peta</p>
        </button>
    </div>
</template>