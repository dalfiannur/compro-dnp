<script lang="ts" setup>
import { defineEmits, ref } from 'vue'

const searchQuery = ref("")

</script>

<template>
    <div class="flex justify-center">
        <div class="input-group relative flex items-stretch w-full ml-16 mt-7 mb-5">
            <img class="w-5" src="/img/search.svg" />
            <input
                type="search"
                v-model="searchQuery"
                class="form-control font-questrial block w-full px-3 py-1.5 bg-white bg-clip-padding transition ease-in-out m-0 focus:text-gray-500 focus:bg-white focus:border-gray-500 focus:outline-none"
                placeholder="Cari Klinik / Dermatologist"
            />
            <button
                class="btn inline-block font-questrial text-gray-600 mr-10 pt-0.5 w-40 h-11 border border-gray-500"
                type="button"
            >Terdekat</button>
        </div>
    </div>
</template>