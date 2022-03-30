<script setup lang="ts">
import { ref } from "vue";

const Pages = ref<any[]>([
  {
    pages : "Career",
    route : "#",
  },
  {
    pages : "Corporate",
    route : "#",
  },
  {
    pages : "Partnership",
    route : "#",
  },
  {
    pages : "Have Question",
    route : "#",
  }
]);

const LoadLogo = (path:String) => {
  return "/img/" + path;
};

</script>

<template>
  <footer class="text-center lg:text-left bg-zinc-700 text-gray-100">
    <div class="mx-6 py-10 text-center md:text-left">
      <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="mx-auto hidden lg:block">
          <img :src="LoadLogo('logo.png')" />
        </div>
        <div class="mx-auto">
          <h6
            class="
              uppercase
              font-semibold
              mb-4
              flex
              justify-center
              md:justify-start
            "
          >
            About Us
          </h6>
          <p class="mb-4" v-for='(page, index) in Pages' :key="index">
            <a :href="(page.route)" class="hover:text-gray-400 hover:underline">{{ page.pages }}</a>
          </p>
        </div>
        <div class="mx-auto">
          <h6
            class="
              uppercase
              font-semibold
              mb-4
              flex
              justify-center
              md:justify-start
            "
          >
            Contact Us
          </h6>
          <p class="mb-4 text-xs">
            PT Dermedic Phar Este<br />
            Jl. Kerkof No. 182,<br />
            Phones : +62 22-xxxx<br />
            E-mail : help@dpelab.com<br />
          </p>
        </div>
        <div class="mx-auto">
          <h6
            class="
              uppercase
              font-semibold
              mb-4
              flex
              justify-center
              md:justify-start
            "
          >
            Follow Us
          </h6>
          <a
            href="#!"
            type="button"
            class="
              rounded-full
              border-2 border-black
              text-black
              leading-normal
              uppercase
              hover:border-gray-300 hover:bg-opacity-5
              focus:outline-none focus:ring-0
              transition
              duration-150
              ease-in-out
              w-9
              h-9
              m-1
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 64 64"
              class="fill-black hover:fill-gray-300
              transition
              duration-150
              ease-in-out
              "
            >
              <path
                d="M32,6C17.642,6,6,17.642,6,32c0,13.035,9.603,23.799,22.113,25.679V38.89H21.68v-6.834h6.433v-4.548	c0-7.529,3.668-10.833,9.926-10.833c2.996,0,4.583,0.223,5.332,0.323v5.965h-4.268c-2.656,0-3.584,2.52-3.584,5.358v3.735h7.785	l-1.055,6.834h-6.73v18.843C48.209,56.013,58,45.163,58,32C58,17.642,46.359,6,32,6z"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            class="
              rounded-full
              border-2 border-black
              leading-normal
              uppercase
              hover:border-gray-300 hover:bg-opacity-5
              focus:outline-none focus:ring-0
              transition
              duration-150
              ease-in-out
              w-9
              h-9
              m-1
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 64 64"
              class="fill-black hover:fill-gray-300
              transition
              duration-150
              ease-in-out
              "
            >
              <path
                d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            class="
              rounded-full
              border-2 border-black
              leading-normal
              uppercase
              hover:border-gray-300 hover:bg-opacity-5
              focus:outline-none focus:ring-0
              transition
              duration-150
              ease-in-out
              w-9
              h-9
              m-1
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="27"
              height="27"
              viewBox="0 0 64 64"
              class="fill-black hover:fill-gray-300
              transition
              duration-150
              ease-in-out
              mt-0.5
              mx-auto
              "
            >
              <path
                d="M61.932,15.439c-2.099,0.93-4.356,1.55-6.737,1.843c2.421-1.437,4.283-3.729,5.157-6.437	c-2.265,1.328-4.774,2.303-7.444,2.817C50.776,11.402,47.735,10,44.366,10c-6.472,0-11.717,5.2-11.717,11.611	c0,0.907,0.106,1.791,0.306,2.649c-9.736-0.489-18.371-5.117-24.148-12.141c-1.015,1.716-1.586,3.726-1.586,5.847	c0,4.031,2.064,7.579,5.211,9.67c-1.921-0.059-3.729-0.593-5.312-1.45c0,0.035,0,0.087,0,0.136c0,5.633,4.04,10.323,9.395,11.391	c-0.979,0.268-2.013,0.417-3.079,0.417c-0.757,0-1.494-0.086-2.208-0.214c1.491,4.603,5.817,7.968,10.942,8.067	c-4.01,3.109-9.06,4.971-14.552,4.971c-0.949,0-1.876-0.054-2.793-0.165C10.012,54.074,16.173,56,22.786,56	c21.549,0,33.337-17.696,33.337-33.047c0-0.503-0.016-1.004-0.04-1.499C58.384,19.83,60.366,17.78,61.932,15.439"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            class="
              rounded-full
              border-2 border-black
              leading-normal
              uppercase
              hover:border-gray-300 hover:bg-opacity-5
              focus:outline-none focus:ring-0
              transition
              duration-150
              ease-in-out
              w-9
              h-9
              m-1
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 64 64"
              class="fill-black hover:fill-gray-300
              transition
              duration-150
              ease-in-out
              "
            >
              <path
                d="M56.456,17.442c-0.339-1.44-1.421-2.595-2.866-3.053C49.761,13.174,41.454,12,32,12s-17.761,1.174-21.591,2.389 c-1.445,0.458-2.527,1.613-2.866,3.053C6.903,20.161,6,25.203,6,32c0,6.797,0.903,11.839,1.544,14.558 c0.339,1.44,1.421,2.595,2.866,3.053C14.239,50.826,22.546,52,32,52s17.761-1.174,21.591-2.389 c1.445-0.458,2.527-1.613,2.866-3.053C57.097,43.839,58,38.797,58,32C58,25.203,57.097,20.161,56.456,17.442z M27,40V24l14.857,8 L27,40z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center p-6 bg-stone-900">
      <span
        >Copyright © 2022 DPE LAB.All right reserved | PT Dhermedic Par Este</span
      >
    </div>
  </footer>
</template>