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

// function dummy(index: number) {
//     let MinNumber = useGetProductLineUp.length
//     if (MinNumber > 4) {
//         document.getElementById("dummy").classList.add('hidden');
//         document.getElementById("product").classList.remove('justify-center');
//     }
// }
if(useGetProductLineUp.length > 1){
  console.log("Hello World!")
}

</script>

<template>
  <div class="py-4">
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

    <div id="product" class="flex flex-nowrap gap-16 mx-8 overflow-x-auto overflow-y-hidden">
      <div
        class="
          h-fit
          my-6
          overflow-hidden
        "
        style="flex: 0 0 auto"
      >
        <div class="w-full aspect-square md:aspect-video bg-gray-200">
          <img
            alt="Placeholder"
            id="dummy"
            class="m-auto hover:bg-repair p-6 invisible "
            src="/img/bottle_box.png"
          />
        </div>
      </div>
      <ProductLineUp
        v-for="(page, index) in ProductRepair"
        :key="index"
        :data="page"
      />
      
      <div
        class="
          h-fit
          my-6
          overflow-hidden
        "
        style="flex: 0 0 auto"
      >
        <div class="w-full aspect-square md:aspect-video bg-gray-200">
          <img
            alt="Placeholder"
            id="dummy"
            class="m-auto hover:bg-repair p-6 invisible"
            src="/img/bottle_box.png"
          />
        </div>
      </div>

    </div>
  </div>

  <div class="py-4">
    <div class="w-full h-[70px] items-center">
      <div
        class="flex flex-wrap justify-between h-full items-center gap-4 px-12"
      >
        <p class="text-xl text-prevent">P R E V E N T</p>
        <p
          class="text-prevent w-8 h-8 pl-2 text-2xl md:text-3xl"
          data-v-4e44e668
        >
          &#709;
        </p>
        <span
          class="flex-1 my-auto border-[1px] bg-prevent border-prevent"
        ></span>
      </div>
    </div>

    <div
      class="
        grid grid-cols-1
        gap-10
        overflow-hidden
        p-1
        md:grid-cols-4
        justify-between
        items-center
      "
    >
      <div class="w-full grayscale hover:grayscale-0">
        <img
          class="block p-4 m-auto aspect-square md:aspect-video"
          src="/img/bottle_box.png"
        />
        <p class="text-prevent text-center">Refined Night Serum</p>
      </div>

      <div class="w-full grayscale hover:grayscale-0">
        <img
          class="block p-4 m-auto aspect-square md:aspect-video"
          src="/img/bottle_box.png"
        />
        <p class="text-prevent text-center">Skin Tranquility</p>
      </div>
    </div>
  </div>

  <div class="py-4">
    <div class="w-full h-[70px] items-center">
      <div
        class="flex flex-wrap justify-between h-full items-center gap-4 px-12"
      >
        <p class="text-xl text-glow">G L O W</p>
        <p class="text-glow w-8 h-8 pl-2 text-2xl md:text-3xl" data-v-4e44e668>
          &#709;
        </p>
        <span class="flex-1 my-auto border-[1px] bg-glow border-glow"></span>
      </div>
    </div>

    <div
      class="
        grid grid-cols-1
        gap-10
        overflow-hidden
        p-1
        md:grid-cols-4
        justify-between
        items-center
      "
    >
      <div class="w-full grayscale hover:grayscale-0">
        <img
          class="block p-4 m-auto aspect-square md:aspect-video"
          src="/img/bottle_box.png"
        />
        <p class="text-glow text-center">Refined Night Serum</p>
      </div>

      <div class="w-full grayscale hover:grayscale-0">
        <img
          class="block p-4 m-auto aspect-square md:aspect-video"
          src="/img/bottle_box.png"
        />
        <p class="text-glow text-center">Skin Tranquility</p>
      </div>
    </div>
  </div>

  <div class="py-4">
    <div class="w-full h-[70px] items-center">
      <div
        class="flex flex-wrap justify-between h-full items-center gap-4 px-12"
      >
        <p class="text-xl text-hydrate">H Y D R A T E</p>
        <p
          class="text-hydrate w-8 h-8 pl-2 text-2xl md:text-3xl"
          data-v-4e44e668
        >
          &#709;
        </p>
        <span
          class="flex-1 my-auto border-[1px] bg-hydrate border-hydrate"
        ></span>
      </div>
    </div>

    <div
      class="
        grid grid-cols-1
        gap-10
        overflow-hidden
        p-1
        md:grid-cols-4
        justify-between
        items-center
      "
    >
      <div class="w-full grayscale hover:grayscale-0">
        <img
          class="block p-4 m-auto aspect-square md:aspect-video"
          src="/img/bottle_box.png"
        />
        <p class="text-hydrate text-center">Refined Night Serum</p>
      </div>

      <div class="w-full grayscale hover:grayscale-0">
        <img
          class="block p-4 m-auto aspect-square md:aspect-video"
          src="/img/bottle_box.png"
        />
        <p class="text-hydrate text-center">Skin Tranquility</p>
      </div>
    </div>
  </div>

  <div class="py-4">
    <div class="w-full h-[70px] items-center">
      <div
        class="flex flex-wrap justify-between h-full items-center gap-4 px-12"
      >
        <p class="text-xl text-preserve">P R E S E R V E</p>
        <p
          class="text-preserve w-8 h-8 pl-2 text-2xl md:text-3xl"
          data-v-4e44e668
        >
          &#709;
        </p>
        <span
          class="flex-1 my-auto border-[1px] bg-preserve border-preserve"
        ></span>
      </div>
    </div>

    <div
      class="
        grid grid-cols-1
        gap-10
        overflow-hidden
        p-1
        md:grid-cols-4
        justify-between
        items-center
      "
    >
      <div class="w-full grayscale hover:grayscale-0">
        <img
          class="block p-4 m-auto aspect-square md:aspect-video"
          src="/img/bottle_box.png"
        />
        <p class="text-preserve text-center">Refined Night Serum</p>
      </div>

      <div class="w-full grayscale hover:grayscale-0">
        <img
          class="block p-4 m-auto aspect-square md:aspect-video"
          src="/img/bottle_box.png"
        />
        <p class="text-preserve text-center">Skin Tranquility</p>
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