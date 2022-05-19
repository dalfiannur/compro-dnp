<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import ProductSection from './ProductSection.vue'
import ArticleSection from './ArticleSection.vue'

const hovered = ref<number | null>(null);
const menu = reactive({
  open: true
});

const onResize = () => {
  if (window.innerWidth < 600) {
    menu.open = false
  }
};

const onMouseLeave = () => {
  hovered.value = null
};

onMounted(() => {
  onResize();
  window.addEventListener('resize', () => {
    onResize()
  })
})
</script>
<template>
  <div id="#header" class="fixed top-0 left-0 z-20 flex items-center justify-between w-full pt-14 md:pt-14 pb-8 px-20 bg-white">
    <a href="#" @click.prevent="$router.push('/')">
      <img class="object-cover h-16" src="/img/logo-black.svg" />
    </a>
    <button class="block md:hidden" @click="menu.open = !menu.open">
      <img src="/img/hamburger-menu.svg" class="w-10 h-10" />
    </button>

    <Transition name="fade">
      <ul
        class="absolute left-0 flex flex-col w-full gap-5 p-5 bg-white md:w-fit md:p-0 md:gap-20 top-[9.3rem] md:flex-row lg:top-0 md:static"
        v-show="menu.open">
        <li>
          <a href="#" @click.prevent="hovered = hovered === 0 ? null : 0"
            class="font-semibold text-gray-600 font-din-next-lt-pro-light">
            Products
          </a>

          <ProductSection :hovered="hovered" />
        </li>

        <li>
          <a href="#" @click.prevent="hovered = hovered === 1 ? null : 1"
            class="font-semibold text-gray-600 font-din-next-lt-pro-light">Articles</a>
          <ArticleSection :hovered="hovered" />
        </li>

        <li>
          <a href="#" @click.prevent="hovered = hovered === 2 ? null : 2"
            class="font-semibold text-gray-600 font-din-next-lt-pro-light">About Us</a>
          <Transition name="fade">
            <div v-show="hovered === 2"
              class="font-questrial absolute left-0 lg:flex w-full lg:px-20 bg-white shadow-lg lg:top-32">
              <div class="lg:-ml-24 cursor-pointer" @click="$router.push('/about-us')">
                <div class="px-5 lg:px-24 bg-gray-100 lg:w-[400px] h-full flex flex-col justify-center py-5 lg:py-14">
                  <a href="/about-us" class="text-4xl text-hydrate">About
                    Us</a>
                  <p class="mt-10 text-justify text-gray-700">
                    PT Dermedic Phar Este is
                    established in 2022 as the first
                    local brand with premium and
                    professional skin care products in
                    Indonesia.
                  </p>
                </div>
              </div>
              <div class="flex flex-col flex-1 px-5 lg:px-20 py-5 lg:py-14">
                <h4 class="text-4xl text-hydrate">Want to know more about us?</h4>
                <p class="max-w-[460px] mt-5 text-gray-700">
                  Caffeine is a powerful antioxidant and anti-aging. While
                  combined with green tea and polyphenol, caffeine can also
                </p>
                <div class="flex gap-5 mt-5">
                  <div>
                    <a target="_blank" href="https://wa.me/6282261050567?text=Hallo"
                      class="flex items-center justify-center rounded-full w-14 h-14 bg-hydrate">
                      <img src="/img/whatsapp.svg" class="w-8 h-8 text-white" />
                    </a>
                  </div>
                  <div>
                    <a target="_blank" href="mailto:support@dpelab.id"
                      class="flex items-center justify-center rounded-full w-14 h-14 bg-hydrate">
                      <img src="/img/mail.svg" class="w-8 h-8 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: all .2s ease-out;
}

.fade-leave-active {
  transition: all .2s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
