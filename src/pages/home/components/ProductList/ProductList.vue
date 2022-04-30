<script lang="ts" setup>
import { computed, provide, ref, watch } from "vue";
import { gsap } from "gsap";
import { useRouter } from "vue-router";

// Import Components
import ProductCard from "../../../../components/ProductCard.vue";
import Button from "./Button.vue";

// Import Composable
import useGetProductSeries from "../../../../composable/useGetProductSeries";
import useGetQueries from "../../../../composable/useGetQueries";
import { Product } from "../../../../typings/Product";
import LayoutCard from "./LayoutCard.vue";

const emit = defineEmits(["categoryChange"]);

// Initialization Composable
const router = useRouter();
const { data: series } = useGetProductSeries();

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
</script>

<template>
  <div class="sm:px-0 md:px-20 grid grid-cols-5 justify-between sm:gap-0 md:gap-[40px]">
    <Button
      v-for="item in ['repair', 'prevent', 'glow', 'hydrate', 'preserve']"
      :key="item"
      :text="item"
      :category="item"
      :selected="selectedCategory"
      @click="handleButtonClick(item)"
      @mouseenter="handleButtonHover(item)"
      @mouseleave="handleButtonBlur"
    />
  </div>
  <!-- <div class="relative flex justify-center px-10 mt-16 md:px-20 product-list-wrapper"> -->
    <!-- <div
      class="grid items-center gap-10 overflow-hidden md:grid-cols-5 xs:grid-cols-1 sm:grid-cols-2 flex-nowrap items-wrapper"
    > -->
      <!-- <ProductCard
        v-for="index in [0, 1, 2, 3, 4]"
        :item="data[index]"
        :key="index"
        @click="handleCardClick(data[index])"
        @mouseenter="cardHoverHandler(data[index])"
        @mouseleave="cardBlurHandler()"
      /> -->
      <LayoutCard 
        :items="data" 
        @click="handleCardClick"
        @hover="cardHoverHandler"
        @blur="cardBlurHandler"
      />
    <!-- </div> -->
  <!-- </div> -->
  <div class="flex items-center gap-10 px-20 mt-10">
    <div class="flex-1">
      <hr />
    </div>
    <div>
      <a
        href="/products"
        @click.prevent
        @click="$router.push('/product-line-up')"
        class="text-xl text-hydrate"
        >See More</a
      >
    </div>
  </div>
</template>
