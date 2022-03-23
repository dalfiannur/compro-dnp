<script setup lang="ts">
import { ref, reactive, onMounted, computed } from "vue";

const carouselSlides = [
  {
    id: 1,
    img: "bg-1",
    title: "Pori Pori Wajahmu Besar? Ikuti Cara Ini Untuk Mengecilkannya",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    date: "20/05/2021"
  },
  {
    id: 2,
    img: "bg-2",
    title: "Pori Pori Wajahmu Besar? Ikuti Cara Ini Untuk Mengecilkannya",
    text: "Walaupun terlihat acak dan seperti tidak memiliki makna khusus, teks ini memiliki beberapa fungsi yang vital. Lorem ipsum berfungsi untuk menghindari terganggunya fokus atau perhatian seseorang ketika sedang membuat layout desain",
    date: "20/05/2021"
  },
  {
    id: 3,
    img: "bg-3",
    title: "Pori Pori Wajahmu Besar? Ikuti Cara Ini Untuk Mengecilkannya",
    text: "Alasan lainnya mengapa sampai saat ini masih menggunakan format teks tersebut karena kalimat ini memiliki penyebaran huruf yang normal dan dinilai merata. Sehingga, penggunaan kalimat tersebut terus digunakan daripada menggunakan kalimat pendek seperti dan semacamnya.",
    date: "20/05/2021"
  },
];

const loadImage = (path: String) => {
  return "/img/" + path + ".jpg";
};

const currentSlide = ref(0);
const getSlideCount = ref(carouselSlides.length);
const direction = ref<string>("right")


function setCurrentSlide(index: number) {
    currentSlide.value = index
}

const nextSlide = () => {
  const index = currentSlide.value < carouselSlides?.length - 1 ? currentSlide.value + 1 : 0
  setCurrentSlide(index)
  direction.value = "right"
}

const prevSlide = () => {
  const index = currentSlide.value > 0 ? currentSlide.value - 1 : carouselSlides?.length - 1
    setCurrentSlide(index)
    direction.value = "left"
}

const swiper = computed(() => {
    return direction.value === 'right' ? 'slide-out' : 'slide-in'
})


onMounted(() => {
  console.log(currentSlide.value)
})

</script>

<template>
<div class="flex justify-center">
  <div class="flex-nowrap relative overflow-hidden h-[500px]">

    <Transition
      :name="swiper"
      v-for="(slide, index) in carouselSlides" 
      :key="index"
      v-show="currentSlide === index"
    >
      
      <div 
        class="flex-none grid grid-cols-2 bg-gray-100 place-items-center"
      >
        <div class="h-72 lg:h-[500px] box-content flex items-center md:px-12 lg:px-16">
          <img
            class="object-cover h-full"
            :src="loadImage(slide.img)"
            alt="image"
          />
        </div>
        
        <div class="flex flex-col justify-between align-middle h-full py-3 pr-40">
          <div class="flex mt-12 mb-6">
            <p class="text-[#77c6bc]"># B E A U T Y</p>
            <p class="ml-2 text-gray-600">- by Dr Sed</p>
          </div>
          <h1 class="text-4xl font-normal lg:text-5xl text-[#77c6bc]">
            {{ slide.title }}
          </h1>
          <p class="mt-8 mb-12 text-sm font-normal text-gray-600 text-ellipsis lg:text-base">
            {{ slide.text }}
          </p>
          <div class="flex mb-6 justify-between">
            <p class="text-base font-normal text-gray-600">
              {{ slide.date }}
            </p>
            <button class="text-base font-normal text-[#77c6bc]">
              Read More
            </button>
          </div>
          
        </div>
      </div>
      
    </Transition>

    <div class="justify-space-beetwen item-center">
      <button
        @click="prevSlide"
        class="top-1/2 pb-1 absolute left-6 h-10 w-10 text-black border white border-black "
      >
        &lt
      </button>
      <button
        @click="nextSlide"
        class="top-1/2 pb-1 absolute right-6 h-10 w-10 border border-black"
      >
        &gt
      </button>
    </div>
  </div>
</div>
  
</template>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
    transition: all 1s ease-in-out;
}
.slide-in-enter-from {
    transform: translateX(-100%);
}
.slide-in-leave-to {
    transform: translateX(100%);
}
.slide-out-enter-from {
    transform: translateX(100%);
}
.slide-out-leave-to {
    transform: translateX(-100%);
}
</style>