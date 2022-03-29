<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { gsap } from "gsap"

const carouselSlides = reactive([
  {
    img: "bg-1",
    title: "Lorem 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: "bg-2",
    title: "Lorem 2",
    text: "Walaupun terlihat acak dan seperti tidak memiliki makna khusus, teks ini memiliki beberapa fungsi yang vital. Lorem ipsum berfungsi untuk menghindari terganggunya fokus atau perhatian seseorang ketika sedang membuat layout desain",
  },
  {
    img: "bg-3",
    title: "Lorem 3",
    text: "Alasan lainnya mengapa sampai saat ini masih menggunakan format teks tersebut karena kalimat ini memiliki penyebaran huruf yang normal dan dinilai merata. Sehingga, penggunaan kalimat tersebut terus digunakan daripada menggunakan kalimat pendek seperti dan semacamnya.",
  },
]);

const loadImage = (path: String) => {
  return "/img/" + path + ".jpg";
};

const currentSlide = ref(3);
const getSlideCount = ref(carouselSlides.length);



const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value){
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;

  
}

const prevSlide = () => {
  if (currentSlide.value === 1){
    currentSlide.value = getSlideCount.value;
    return;
  }
  currentSlide.value -= 1;
}



onMounted(() => {
  console.log(getSlideCount.value)
})

</script>

<template>
  <div class="relative w-full items-center justify-center mx-auto ">
    <div
      class="absolute flex overflow-hidden bg-gray-100"
      v-for="(slide, index) in carouselSlides" 
      :key="index"
      v-show="currentSlide === index + 1"
    >
      <div class="justify-space-beetwen item-center">
        <button
          @click="prevSlide"
          class="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border-2 border-black"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          @click="nextSlide"
          class="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border-2 border-black"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div 
        class="grid grid-cols-2 bg-gray-100 place-items-center"
      >
        <div class="h-72 lg:h-[30vw] box-content flex items-center md:px-16 lg:px-20">
          <img
            class="object-cover h-full"
            
            :src="loadImage(slide.img)"
            alt="image"
          />
        </div>
        
        <div class="flex flex-col justify-center align-middle py-3 pr-20">
          <h1 class="text-4xl font-normal lg:text-5xl">
            {{ slide.title }}
          </h1>
          <p class="mt-4 text-sm font-normal lg:text-base">
            {{ slide.text }}
          </p>
        </div>
      </div>
      
    </div>
  </div>
</template>
