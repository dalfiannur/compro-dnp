<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

const buttonTop = reactive({
  show: false
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', (ev) => {
    if (window.scrollY > 400) {
      buttonTop.show = true
    } else {
      buttonTop.show = false
    }
  })
})
</script>

<template>
  <footer class="text-center text-gray-100 lg:text-left bg-zinc-700">
    <div class="py-10 mx-6 text-center md:text-left px-28">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="items-center justify-center hidden lg:flex">
          <img src="/img/logo-white.svg" class="w-32" />
        </div>

        <div class="mx-auto">
          <h6 class="flex justify-center mb-4 md:justify-start font-questrial">Contact Us</h6>
          <p class="mb-4 text-xs font-questrial">
            PT Dermedic Phar Este
            <br />Jl. Kerkof No. 182,
            <br />Phones : +62 22-xxxx
            <br />E-mail : help@dpelab.com
            <br />
          </p>
        </div>

        <div class="mx-auto">
          <h6 class="flex justify-center mb-4 md:justify-start font-questrial">Follow Us</h6>
          <a
            href="#!"
            type="button"
            class="m-1 leading-normal text-black uppercase transition duration-150 ease-in-out border-2 border-black rounded-full hover:border-gray-300 hover:bg-opacity-5 focus:outline-none focus:ring-0 w-9 h-9"
          >
            <img src="/img/facebook.svg" />
          </a>

          <a
            href="#!"
            type="button"
            class="m-1 leading-normal uppercase transition duration-150 ease-in-out border-2 border-black rounded-full hover:border-gray-300 hover:bg-opacity-5 focus:outline-none focus:ring-0 w-9 h-9"
          >
            <img src="/img/instagram.svg" />
          </a>

          <a
            href="#!"
            type="button"
            class="m-1 leading-normal uppercase transition duration-150 ease-in-out border-2 border-black rounded-full hover:border-gray-300 hover:bg-opacity-5 focus:outline-none focus:ring-0 w-9 h-9"
          >
            <img src="/img/twitter.svg" />
          </a>

          <a
            href="#!"
            type="button"
            class="m-1 leading-normal uppercase transition duration-150 ease-in-out border-2 border-black rounded-full hover:border-gray-300 hover:bg-opacity-5 focus:outline-none focus:ring-0 w-9 h-9"
          >
            <img src="/img/youtube.svg" />
          </a>
        </div>
      </div>
    </div>
    <div class="p-6 text-center bg-stone-900">
      <span>Copyright © 2022 DPE LAB.All right reserved | PT Dhermedic Par Este</span>
    </div>
  </footer>

  <button
    v-if="buttonTop.show"
    @click="scrollToTop"
    class="fixed items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg none md:flex bottom-24 right-16"
  >
    <img src="/img/top.svg" class="w-5 h-5" />
  </button>
</template>