<script setup lang="ts">
import {ref, onMounted} from "vue"

const item = ref<any[]>([
  {
    id: 1,
    title: "Tranex & Kojic with B3",
    text: "Dark spot reducer with triple action",
  },
  {
    id: 2,
    title: "Pytho Hydro",
    text: "Hydrate and snoothe the skin with natural ingredients",
  }
])

function load() {
  document.querySelectorAll('.description').forEach((item, index) => {
    item.innerHTML = Ellipsis(index, item.innerHTML)

    // Ellipsis(index, item.innerHTML).then((text) => {
    //   item.innerHTML = text
    // })
  })
}

onMounted(() => {
  load()
})

function Ellipsis(index: number, str: string) {
  // const textLength = str.length
  // return Promise.resolve(() => {
  //   if (textLength >= 2){
  //     return textLength/2;
  //   }
  //   return 1
  // }).then((num) => {
  //   if (str.length <= num()) {
  //     return item.value[index].text
  //   }
    
  //   var stringLength = ref(0)
  //   const word1 = str.split(' ').filter(item => {
  //     item.length <= 20
  //     stringLength.value = stringLength.value + item.length
  //     if (stringLength.value <= 20){
  //       return true
  //     }
  //     return false
  //   })
  //   str.split(' ')

  //   const word2 = str.slice(num(), str.length).split(' ')
  //   console.log("ths is " + word2)
    
  //   return word1.join(' ') + '<br>' + word2.join(' ')
  // })

  const lenStr = str.length
  const word = str.split(' ')
  
  let count = 0;
  for (let i = 0; i < word.length; i++)   {
      count += word[i].length
      if ( count > lenStr / 2) {
          word[i-1] += "<br>"
          break
      }
  }
  console.log(" Word1 " + word)
  return word.join(' ')
}
</script>

<template>
  <div class="relative py-5 bg-hydrate flex items-center justify-center lg:justify-start h-80 lg:h-96 w-full flex-grow">

    <div class="absolute w-60 lg:w-72 -rotate-90 border-[0.13rem] border-white -left-[6.2rem] lg:-left-[7.7rem]">
      <div class="my-2.5 uppercase font-questrial tracking-[0.5rem] text-white">
        <p class="text-center text-base">
          hydrate
        </p>
      </div>
    </div>

    <div class="absolute flex right-12 lg:left-36">
      <div class="mx-2.5">
        logo
      </div>
    </div>
    
    <div class="items-center lg:flex text-center lg:text-left lg:ml-64">
      <h2 v-html="item[$route.params.id - 1].title" class="description text-5xl lg:text-6xl xl:text-7xl font-questrial font-normal text-white" />
              
      <p v-html="item[$route.params.id - 1].text" class="description text-lg lg:text-xl xl:text-3xl font-questrial font-normal text-white mt-6 lg:ml-12" />
      
    </div>
  </div>
</template>

<style>

</style>