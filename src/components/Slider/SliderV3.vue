<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount, computed, watch } from "vue";

const carouselSlides = ref<any[]>([
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
]);

const loadImage = (path: String) => {
  return "/img/" + path + ".jpg";
};

const currentSlide = ref(0);
const getSlideCount = ref<number|undefined>(carouselSlides.value.length);
const slideInterval = ref<any>(0)
const direction = ref<string>("right")


function setCurrentSlide(index: number) {
    currentSlide.value = index
}

const nextSlide = () => {
  const dataSlide = getSlideCount.value||0
  const index = currentSlide.value < dataSlide - 1 ? currentSlide.value + 1 : 0 
  setCurrentSlide(index)
  direction.value = "right"
  startSlideTimer()
}

const prevSlide = () => {
  const index = currentSlide.value > 0 ? currentSlide.value - 1 : carouselSlides?.value.length - 1
  setCurrentSlide(index)
  direction.value = "left"
  startSlideTimer()
}

function startSlideTimer() {
    stopSliderTimer()
    slideInterval.value = setInterval(() => {
        nextSlide()
    }, 5000)
}
function stopSliderTimer() {
    clearInterval(slideInterval.value)
}

onMounted(function () {
    startSlideTimer()
})
onBeforeUnmount(function () {
    stopSliderTimer()
})

const swiper = computed(() => {
    return direction.value === 'right' ? 'slide-out' : 'slide-in'
})



function load() {
  const size = window.outerWidth
  document.querySelectorAll('.description').forEach((item, index) => {
    Ellipsis(index, item.innerHTML, size).then((text) => {
      item.innerHTML = text
    })
    console.log(size)
  })
}

onMounted(() => {
  console.log(currentSlide.value)
  load()
  window.addEventListener('resize', () => {
    load()
  })

})

function Ellipsis(index: number, str: string, size: number) {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  return Promise.resolve(() => {
    if (size <= 1280){
      return 150;
    }
    return 200
  }).then((num) => {
    if (str.length <= num()) {
      return carouselSlides.value[index].text
    }
    
    const word = str.slice(0, num()).split(' ')
    word.pop()
    // Return str truncated with '...' concatenated to the end of str.
    return word.join(' ') + ' ' + '...'
  })
}

</script>

<template>
<div class="flex justify-center w-full">
  <div class="relative w-full h-[780px] sm:h-[730px] lg:h-[500px]">

    <Transition
      :name="swiper"
      v-for="(slide, index) in carouselSlides" 
      :key="index"
      v-show="currentSlide === index"
    >
      
      <div 
        class="absolute left-0 top-0 w-full h-full grid grid-cols-1 lg:grid-cols-2 bg-gray-100 place-items-center overflow-hidden"
      >
        <div class="h-72 lg:h-[500px] box-content flex items-center md:px-12 lg:px-6 xl:px-16">
          <img
            class="object-cover h-full"
            :src="loadImage(slide.img)"
            alt="image"
          />
        </div>
        
        <div class="flex flex-col justify-between align-middle h-full py-3 px-20 sm:px-40 lg:pl-0">
          <div class="flex mt-4 lg:mt-10 mb-6 font-questrial">
            <p class="text-[#77c6bc]"># B E A U T Y</p>
            <p class="ml-2 text-gray-600">- by Dr Sed</p>
          </div>
          <h1 class="text-4xl font-questrial lg:text-4xl xl:text-5xl text-[#77c6bc]">
            {{ slide.title }}
          </h1>
          <div class="">
            <p class="mt-8 mb-12 text-sm font-questrial text-gray-600 clamp lg:text-base w-full text-justify description">
              {{ slide.text }}
            </p>
          </div>
          
          <div class="flex mb-6 justify-between">
            <p class="text-base font-questrial text-gray-600">
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
        class="top-1/2 pb-1 absolute left-6 h-10 w-10 text-[#77c6bc] border border-[#77c6bc]"
      >
        &lt;
      </button>
      <button
        @click="nextSlide"
        class="top-1/2 pb-1 absolute right-6 h-10 w-10 border text-[#77c6bc] border-[#77c6bc]"
      >
        &gt;
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