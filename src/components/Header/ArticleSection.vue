<script lang="ts" setup>
  import {toRefs, ref} from 'vue'
  import useGetQueries from "../../composable/useGetQueries";
  import {Article} from "../../typings/Article";
  import {Product} from "../../typings/Product";

  type Prop = {
    hovered: number | null
  }
  const props = defineProps<Prop>();
  const {hovered} = toRefs(props);

  const {setSearch: setSearchArticle, data: articles} = useGetQueries<Article>('articles', {
    perPage: 1,
    autoFetch: false
  });
  const {setSearch: setSearchProduct, data: products} = useGetQueries<Product>('product', {
    perPage: 1,
    autoFetch: false
  });

  const search = ref<string|null>(null);

  let timeout: any;
  const handleSearch = (e: KeyboardEvent) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    if (e.code === 'Enter') {
      if (search) {
        setSearchArticle(search.value as string);
        setSearchProduct(search.value as string);
      }
    }
    timeout = setTimeout(() => {
      if (search) {
        setSearchArticle(search.value as string);
        setSearchProduct(search.value as string);
      }
    }, 1500)
  }
  const goToSearch = () => {
    const domain = window.location.origin;
    window.location.assign(domain + "/search?search=" + search.value);
  }
</script>

<template>
  <Transition name="fade">
    <div
      v-show="hovered === 1"
      class="absolute left-0 lg:flex w-full lg:px-20 bg-white shadow-lg top-[6.5rem] lg:top-32"
    >
      <div class="block lg:hidden flex-1 lg:mt-5">
        <div class="flex justify-center lg:mt-6 border-t-2 border-hydrate">
          <div class="flex w-full">
            <div class="relative w-full">
              <input
                v-model="search"
                type="search"
                placeholder="Search..."
                class="w-full bg-gray-200 h-14 focus:outline-none px-5"
                @keyup="handleSearch"
              />
              <transition name="fade">
                <div v-if="search && search.length > 3"
                     class="absolute w-full p-5 bg-gray-300">
                  <a
                    v-if="articles[0]"
                    :href="'/articles/' + articles[0].slug"
                    class="flex items-center justify-between pb-2 border-b-2 border-gray-400"
                  >
                    <h3 class="text-gray-600">{{ articles[0]. title }}</h3>
                    <span class="text-sm text-hydrate">Article</span>
                  </a>
                  <div v-if="products[0]" class="flex items-center justify-between pt-2">
                    <h3 class="text-gray-600">{{products[0].name}}</h3>
                    <a class="text-sm text-hydrate">Product</a>
                  </div>
                </div>
              </transition>
            </div>
            <button class="flex items-center justify-center text-white w-14 h-14 bg-hydrate">
              <img src="/img/search.svg" class="w-5 h-5"/>
            </button>
          </div>
        </div>
      </div>
      <div class="h-full lg:-ml-24">
        <div class="lg:pl-24 bg-gray-100 px-10 lg:w-[380px] h-[300px] py-10">
          <a href="/articles" @click.prevent="$router.push('/articles')"
             class="text-4xl text-hydrate">Article</a>
          <p class="mt-5 text-gray-500">
            Search specific articles and
            related products by typing on
            search bar
          </p>
        </div>
      </div>
      <div class="hidden lg:block flex-1 my-10 -ml-32">
        <div class="flex justify-end mt-6 border-t-2 border-hydrate">
          <div class="flex">
            <div class="relative">
              <input
                v-model="search"
                type="search"
                placeholder="Search..."
                class="w-[500px] bg-gray-200 h-14 focus:outline-none px-5"
                @keyup="handleSearch"
                @keypress.enter="goToSearch"
              />
              <!-- <transition name="fade">
                <div v-if="search && search.length > 3"
                     class="absolute w-full p-5 bg-gray-300">
                  <a
                    v-if="articles[0]"
                    :href="'/articles/' + articles[0].slug"
                    @click.prevent="$router.push('/articles/' + articles[0].slug)"
                    class="flex items-center justify-between pb-2 border-b-2 border-gray-400"
                  >
                    <h3 class="text-gray-600">{{ articles[0]. title }}</h3>
                    <span class="text-sm text-hydrate">Article</span>
                  </a>
                  <div v-if="products[0]" class="flex items-center justify-between pt-2">
                    <h3 class="text-gray-600">{{products[0].name}}</h3>
                    <a class="text-sm text-hydrate">Product</a>
                  </div>
                </div>
              </transition> -->
            </div>
            <button  
              @click.prevent="goToSearch" 
              class="flex items-center justify-center text-white w-14 h-14 bg-hydrate"
            >
              <img src="/img/search.svg" class="w-6 h-6 ml-[0.35rem] mt-[0.15rem]"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
