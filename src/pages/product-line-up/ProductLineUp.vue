<script lang="ts" setup>
import { computed, provide, ref, watch } from "vue";
import { gsap } from "gsap";
import { useRouter } from "vue-router";

// Import Components
import Button from "../home/components/ProductList/Button.vue";

// Import Composable
import useGetProductSeries from "../../composable/useGetProductSeries";
import useGetQueries from "../../composable/useGetQueries";
import { Product } from "../../typings/Product";
import LineupCard from "./LineupCard.vue";
import RelatedProduct from "../../components/RelatedProduct.vue";

const emit = defineEmits(["categoryChange"]);

// Initialization Composable
const router = useRouter();
const { data: series } = useGetProductSeries();

const { data: featuredProducts } = useGetQueries<Product>('product', {
  autoFetch: true,
  perPage: 5
});

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

const data = computed<Product[]>(() => {
  return {
    series: series.value,
    repair: repair.value,
    prevent: prevent.value,
    glow: glow.value,
    hydrate: hydrate.value,
    preserve: preserve.value
  }[selectedCategory.value] as Product[];
});

const isHovered = ref<boolean>(false);
provide("isHovered", isHovered);

const hoverCategory = ref<string>("");
provide("hoverCategory", hoverCategory);

const selectedCategory = ref<string>("series");
provide("selectedCategory", selectedCategory);

const isSeries = ref<boolean>(true);
provide("isSeries", isSeries);

const transition = () => {
  gsap.fromTo('.items-wrapper', {
    y: -100,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  })
}

const cardHoverHandler = (category: string) => {
  if (category) {
    isHovered.value = true;
    hoverCategory.value = category;
  }
};
const cardBlurHandler = () => {
  isHovered.value = false;
  hoverCategory.value = "";
};
const handleButtonClick = (slug: string) => {
  isSeries.value = false;
  selectedCategory.value = slug;
  transition()
};
const handleButtonHover = (slug: string) => {
  isHovered.value = true;
  hoverCategory.value = slug;
};
const handleButtonBlur = () => {
  isHovered.value = false;
  hoverCategory.value = "";
};
const handleCardClick = (item: Product) => {
  if (isSeries.value) {
    isSeries.value = false;
    selectedCategory.value = item.category.slug;
    transition()
  } else {
    // router.push("/products/" + item.slug);
    window.location.href = "/products/" + item.slug
  }
};
const SelectData : {[key: string] : any} = {
  repair,
  prevent,
  glow,
  hydrate,
  preserve
}

</script>

<template>
<div v-for="item in data" :key="item.slug">
  <div class="w-full h-[100px] items-center">
      <div
        class="flex flex-wrap justify-between h-full items-center gap-4 px-12"
      >
        <p class="text-xl uppercase tracking-[.5em]"
        :class="[ 'text-' + item.category.slug ]"
        >
          {{ item.category.name }}
        </p>
        <p
          class="w-8 h-8 pl-2 text-2xl md:text-3xl"
          :class="[ 'text-' + item.category.slug ]"
          data-v-4e44e668
        >
          &#709;
        </p>
        <span
          class="flex-1 my-auto border-[1px]"
          :class="[ 'border-' + item.category.slug ]"
        ></span>
      </div>
    </div>

  <LineupCard :items="SelectData[item.category.slug]" @hover="cardHoverHandler" @blur="cardBlurHandler"/>
  <div class="flex items-center gap-10 px-20 mt-10">
    <div class="flex-1">
      <hr />
    </div>

  </div>
</div>

<div id="related-product" class="my-10">
  <RelatedProduct />
</div>


</template>

<style lang="scss" scoped>
$categories: 'repair', 'prevent', 'glow', 'hydrate', 'preserve';
$preserve: '#ae1857';

@each $category in $categories {
  .text-#{$category} {
    color: theme('colors.' + $category);
  }
  .border-#{$category} {
    border-color: theme('colors.' + $category);
  }
  .bg-#{$category} {
    background-color: theme('colors.' + $category);
  }
  .bg-#{$category}-hover {
    --color-repair: rgba(92, 132, 195, .7);
    --color-prevent: rgb(113, 70, 155, .7);
    --color-glow: rgba(247, 191, 111, .7);
    --color-hydrate: rgba(99, 196, 180, .7);
    --color-preserve: rgba(174, 24, 87, .7);
    background-color: var(--color-#{$category});
  }
}
</style>