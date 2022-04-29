<script setup lang="ts">
import { ref } from "vue";
// Import Composable
import useGetFeaturedProduct from "../../composable/useGetProductLineUp";
import ScrollToPlugin from "gsap/ScrollToPlugin";

// Import Components
// @ts-ignore
import SliderV4 from "../../components/Slider/SliderV4/SliderV4.vue";
import ProductLineUp from "../../components/ProductLineUp.vue";
import useGetProductLineUp from "../../composable/useGetProductLineUp";

// Initial Composable
const { data: ProductRepair } = useGetProductLineUp();

</script>

<template>
<!-- REPAIR -->
  <div class="flex flex-col justify-center">
    <div class="w-full h-[100px] items-center">
      <div
        class="flex flex-wrap justify-between h-full items-center gap-4 px-12"
      >
        <p class="text-xl text-repair">R E P A I R</p>
        <p
          class="text-repair w-8 h-8 pl-2 text-2xl md:text-3xl"
          data-v-4e44e668
        >
          &#709;
        </p>
        <span
          class="flex-1 my-auto border-[1px] bg-repair border-repair"
        ></span>
      </div>
    </div>

    <div class="my-6 overflow-auto mx-auto">
      <div class="grid grid-flow-col justify-center gap-10 h-fit max-w-screen-sm sm:max-w-screen-sm xl:max-w-screen-3xl">
        
        <div class="w-[320px] md:w-[160px] h-[385px] relative my-6 overflow-hidden left-[-50px]">
          <div class="w-full aspect-square md:aspect-video bg-gray-200">
          
            <img
              alt="Placeholder"
              id="dummy"
              class="w-[320px] h-[385px] p-6 invisible "
              src="/img/bottle_box.png"
            />

          </div>
        </div>

        <ProductLineUp v-for="(page, index) in ProductRepair" :key="index" :data="page" />
      
        <div class="w-[320px] md:w-[160px] h-[385px] relative my-6 overflow-hidden left-[-50px]">
          <div class="w-full aspect-square md:aspect-video bg-gray-200">
          
            <img
              alt="Placeholder"
              id="dummy"
              class="w-[320px] h-[385px] p-6 invisible "
              src="/img/bottle_box.png"
            />

          </div>
        </div>
      </div>
    </div>
  </div>

<!-- PREVENT -->
  <div class="flex flex-col justify-center">
    <div class="w-full h-[100px] items-center">
      <div
        class="flex flex-wrap justify-between h-full items-center gap-4 px-12"
      >
        <p class="text-xl text-repair">R E P A I R</p>
        <p
          class="text-repair w-8 h-8 pl-2 text-2xl md:text-3xl"
          data-v-4e44e668
        >
          &#709;
        </p>
        <span
          class="flex-1 my-auto border-[1px] bg-repair border-repair"
        ></span>
      </div>
    </div>

    <div class="my-6 overflow-auto mx-auto">
      <div class="grid grid-flow-col justify-center gap-10 h-fit max-w-screen-sm sm:max-w-screen-sm xl:max-w-screen-3xl">
        
        <div class="w-[320px] md:w-[160px] h-[385px] relative my-6 overflow-hidden left-[-50px]">
          <div class="w-full aspect-square md:aspect-video bg-gray-200">
          
            <img
              alt="Placeholder"
              id="dummy"
              class="w-[320px] h-[385px] p-6 invisible "
              src="/img/bottle_box.png"
            />

          </div>
        </div>

        <ProductLineUp v-for="(page, index) in ProductRepair" :key="index" :data="page" />
      
        <div class="w-[320px] md:w-[160px] h-[385px] relative my-6 overflow-hidden left-[-50px]">
          <div class="w-full aspect-square md:aspect-video bg-gray-200">
          
            <img
              alt="Placeholder"
              id="dummy"
              class="w-[320px] h-[385px] p-6 invisible "
              src="/img/bottle_box.png"
            />

          </div>
        </div>
      </div>
    </div>
  </div>


<!-- GLOW -->
  <div class="flex flex-col justify-center">
    <div class="w-full h-[100px] items-center">
      <div
        class="flex flex-wrap justify-between h-full items-center gap-4 px-12"
      >
        <p class="text-xl text-repair">R E P A I R</p>
        <p
          class="text-repair w-8 h-8 pl-2 text-2xl md:text-3xl"
          data-v-4e44e668
        >
          &#709;
        </p>
        <span
          class="flex-1 my-auto border-[1px] bg-repair border-repair"
        ></span>
      </div>
    </div>

    <div class="my-6 overflow-auto mx-auto">
      <div class="grid grid-flow-col justify-center gap-10 h-fit max-w-screen-sm sm:max-w-screen-sm xl:max-w-screen-3xl">
        
        <div class="w-[320px] md:w-[160px] h-[385px] relative my-6 overflow-hidden left-[-50px]">
          <div class="w-full aspect-square md:aspect-video bg-gray-200">
          
            <img
              alt="Placeholder"
              id="dummy"
              class="w-[320px] h-[385px] p-6 invisible "
              src="/img/bottle_box.png"
            />

          </div>
        </div>

        <ProductLineUp v-for="(page, index) in ProductRepair" :key="index" :data="page" />
      
        <div class="w-[320px] md:w-[160px] h-[385px] relative my-6 overflow-hidden left-[-50px]">
          <div class="w-full aspect-square md:aspect-video bg-gray-200">
          
            <img
              alt="Placeholder"
              id="dummy"
              class="w-[320px] h-[385px] p-6 invisible "
              src="/img/bottle_box.png"
            />

          </div>
        </div>
      </div>
    </div>
  </div>

<!-- HYDRATE -->
  <div class="flex flex-col justify-center">
    <div class="w-full h-[100px] items-center">
      <div
        class="flex flex-wrap justify-between h-full items-center gap-4 px-12"
      >
        <p class="text-xl text-repair">R E P A I R</p>
        <p
          class="text-repair w-8 h-8 pl-2 text-2xl md:text-3xl"
          data-v-4e44e668
        >
          &#709;
        </p>
        <span
          class="flex-1 my-auto border-[1px] bg-repair border-repair"
        ></span>
      </div>
    </div>

    <div class="my-6 overflow-auto mx-auto">
      <div class="grid grid-flow-col justify-center gap-10 h-fit max-w-screen-sm sm:max-w-screen-sm xl:max-w-screen-3xl">
        
        <div class="w-[320px] md:w-[160px] h-[385px] relative my-6 overflow-hidden left-[-50px]">
          <div class="w-full aspect-square md:aspect-video bg-gray-200">
          
            <img
              alt="Placeholder"
              id="dummy"
              class="w-[320px] h-[385px] p-6 invisible "
              src="/img/bottle_box.png"
            />

          </div>
        </div>

        <ProductLineUp v-for="(page, index) in ProductRepair" :key="index" :data="page" />
      
        <div class="w-[320px] md:w-[160px] h-[385px] relative my-6 overflow-hidden left-[-50px]">
          <div class="w-full aspect-square md:aspect-video bg-gray-200">
          
            <img
              alt="Placeholder"
              id="dummy"
              class="w-[320px] h-[385px] p-6 invisible "
              src="/img/bottle_box.png"
            />

          </div>
        </div>
      </div>
    </div>
  </div>

<!-- PRESERVE -->
  <div class="flex flex-col justify-center">
    <div class="w-full h-[100px] items-center">
      <div
        class="flex flex-wrap justify-between h-full items-center gap-4 px-12"
      >
        <p class="text-xl text-repair">R E P A I R</p>
        <p
          class="text-repair w-8 h-8 pl-2 text-2xl md:text-3xl"
          data-v-4e44e668
        >
          &#709;
        </p>
        <span
          class="flex-1 my-auto border-[1px] bg-repair border-repair"
        ></span>
      </div>
    </div>

    <div class="my-6 overflow-auto mx-auto">
      <div class="grid grid-flow-col justify-center gap-10 h-fit max-w-screen-sm sm:max-w-screen-sm xl:max-w-screen-3xl">
        
        <div class="w-[320px] md:w-[160px] h-[385px] relative my-6 overflow-hidden left-[-50px]">
          <div class="w-full aspect-square md:aspect-video bg-gray-200">
          
            <img
              alt="Placeholder"
              id="dummy"
              class="w-[320px] h-[385px] p-6 invisible "
              src="/img/bottle_box.png"
            />

          </div>
        </div>

        <ProductLineUp v-for="(page, index) in ProductRepair" :key="index" :data="page" />
      
        <div class="w-[320px] md:w-[160px] h-[385px] relative my-6 overflow-hidden left-[-50px]">
          <div class="w-full aspect-square md:aspect-video bg-gray-200">
          
            <img
              alt="Placeholder"
              id="dummy"
              class="w-[320px] h-[385px] p-6 invisible "
              src="/img/bottle_box.png"
            />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  border-radius: 2px;
  width: 1px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>