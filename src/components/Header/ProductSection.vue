<script lang="ts" setup>
  import {toRefs, ref} from 'vue';
  import ProductCard from './ProductCard.vue';
  import useGetQueries from "../../composable/useGetQueries";
  import {Product} from "../../typings/Product";

  type Prop = {
    hovered: number | null;
  }
  const props = defineProps<Prop>();
  const { hovered } = toRefs(props);

  const show = ref<number>(0);
  const search = ref<string>('');

  const { data: products, setSearch } = useGetQueries<Product>('product', {
    perPage: 5,
    autoFetch: false
  });

  // const productSeries = [
  //   {
  //     title: 'REPAIR',
  //     usedAs: [
  //       'Skin Tranquilty',
  //       'Refine Night'
  //     ]
  //   },
  //   {
  //     title: 'PREVENT',
  //     usedAs: [
  //       'Antioxidant Antaxhanthin',
  //       'Antioxidant Resveratrol',
  //     ]
  //   },
  //   {
  //     title: 'GLOW',
  //     usedAs: [
  //       'C & E with Ferulic',
  //       'Antioxidant C Ferulic',
  //       'Antioxidant C Sylmarin',
  //       'Tranex & Kojic with B3'
  //     ]
  //   },
  //   {
  //     title: 'HYDRATE',
  //     usedAs: [
  //       'Caffeine Hydrating',
  //       'Phyto Hydro',
  //       'Antioxidant C Sylmarin',
  //       'Tranex & Kojic with B3'
  //     ]
  //   },
  //   {
  //     title: 'PRESERVE',
  //     usedAs: [
  //       'Caffeine Hydrating',
  //       'Phyto Hydro',
  //       'Antioxidant C Sylmarin',
  //       'Tranex & Kojic with B3'
  //     ]
  //   }
  // ];

  const repairQuery = new URLSearchParams();
  repairQuery.set("category", "repair");
  const { data: repair } = useGetQueries<Product>("product", {
    autoFetch: true,
    query: repairQuery,
    perPage: 5,
  });

  const preventQuery = new URLSearchParams();
  preventQuery.set("category", "prevent");
  const { data: prevent } = useGetQueries<Product>("product", {
    autoFetch: true,
    query: preventQuery,
    perPage: 5,
  });

  const glowQuery = new URLSearchParams();
  glowQuery.set("category", "glow");
  const { data: glow } = useGetQueries<Product>("product", {
    autoFetch: true,
    query: glowQuery,
    perPage: 5,
  });

  const hydrateQuery = new URLSearchParams();
  hydrateQuery.set("category", "hydrate");
  const { data: hydrate } = useGetQueries<Product>("product", {
    autoFetch: true,
    query: hydrateQuery,
    perPage: 5,
  });

  const preserveQuery = new URLSearchParams();
  preserveQuery.set("category", "preserve");
  const { data: preserve } = useGetQueries<Product>("product", {
    autoFetch: true,
    query: preserveQuery,
    perPage: 5,
  });

  let timeout: any;
  const handleSearch = (e: KeyboardEvent) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (e.code === 'Enter') {
      setSearch(search.value)
    }

    timeout = setTimeout(() => {
      setSearch(search.value)
    }, 0)
  }
</script>

<template>
  <Transition name="fade">
    <div
      v-show="hovered === 0"
      class="absolute left-0 flex flex-col xl:flex-row w-full px-0 xl:px-20 bg-white shadow-lg top-14 lg:top-32"
    >
      <div class="w-full xl:w-[360px] xl:-ml-24">
        <div class="flex items-center h-full pl-4 sm:pl-9 py-4 xl:pl-24 xl:py-0 bg-gray-100">
          <a href="/product-line-up" class="text-4xl text-hydrate">Explore Our Products</a>
        </div>
      </div>
      <div class="relative flex-1">
        <div class="grid flex-1 w-full px-5 xl:px-0 h-full grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-5 xl:gap-10 xl:pt-14 pb-10">
          <ProductCard
            :data="repair"
            title="Repair"
          />
          <ProductCard
            :data="prevent"
            title="Prevent"
          />
          <ProductCard
            :data="glow"
            title="Glow"
          />
          <ProductCard
            :data="hydrate"
            title="Hydrate"
          />
          <ProductCard
            :data="preserve"
            title="Preserve"
          />
        </div>
        <div class="absolute top-0 right-[0px] gap-10 left-1 hidden xl:flex">
          <div class="h-20 xl:basis-[26.5%] 2xl:basis-[15.5%]"/>
          <div class="xl:basis-[73.5%] 2xl:basis-[84.5%]">
            <div class="flex order-2 w-full h-20 col-span-3">
              <div class="relative flex-1 h-14 bg-white-smoke">
                <input
                  class="w-full h-full text-gray-600 font-din-next-lt-pro-light px-14 bg-white-smoke focus:outline-none"
                  v-model="search"
                  placeholder="Search..."
                  @keyup="handleSearch"
                />
                <Transition name="fade">
                  <div
                    class="absolute w-full bg-gray-200 top-12 px-14"
                    v-show="search && search.length > 3"
                  >
                    <ul>
                      <li
                        v-for="item in products"
                        :key="item.id"
                        class="py-3 text-gray-400 font-din-next-lt-pro-bold"
                      >
                        <a
                          :href="'/products/' + item.slug"
                          @click.prevent="$router.push('/products/' + item.slug)"
                        >
                          <span class="uppercase">{{ item.category.name }}</span> | {{ item.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </Transition>
              </div>
              <button class="flex items-center justify-center w-14 h-14 bg-hydrate">
                <div>
                
                </div>
                <img src="/img/search.svg" class="w-6 h-6 ml-[0.35rem] mt-[0.15rem]"/>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>
