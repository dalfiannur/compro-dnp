<script setup lang="ts">
import { ref } from "vue";
import ProductImage from "../../../components/Slider/ProductImage.vue";
</script>

<template>
  <div>
    <div>
      <ProductImage class="mt-12 lg:hidden" />
    </div>
    <div class="flex mt-20">
      <div class="">
        <div class="flex mx-28 lg:mr-10 mb-16">
          <h1>Description</h1>
        </div>
        <div class="mx-28 lg:mr-10 text-justify">
          <div>
            Blue light has the highest energy on the visible light spectrum, and
            it's all around us. From the sun, TV screens, laptops, and also
            cellphones. Blue light energy triggers the formation of free
            radicals on the skin. Therefore, may lead to skin-aging and also
            skin damage. This serum contains ingredients like Lutein,
            Astaxanthin, β-Carotene, and Blueberry extract aid the absorption
            and dispersion of blue light that contributes to premature aging,
            pigmentation, and wrinkles
          </div>
          <ul class="list-disc ml-5 my-4">
            <li>
              Astaxanthin, Lutein, and β-Carotene is a group of carotenoids
            </li>
            <li>
              that protects skin from blue-light and UV induced skin damage.
              They also provide skin hydration and improve elasticity.
            </li>
            <li>
              Astaxanthin is the strongest antioxidant, that will prevents signs
              of aging (e.g. wrinkles and fine lines) Blueberry extract, that
              rich in polyphenol content, also show photoprotection against
              UV-induced skin damage and premature aging.
            </li>
          </ul>
          <div>
            <div>Skin Concern</div>
            <ul class="list-disc ml-5">
              <li>Aging</li>
              <li>Discoloration</li>
              <li>Dehydrated</li>
            </ul>
          </div>
          <div>
            <div>Skin Type</div>
            <ul class="list-disc ml-5">
              <li>All Skin Type</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div>
        <ProductImage class="hidden lg:block lg:mr-28" />
      </div>
    </div>

    <div class="mt-20">
      <div class="flex mx-28 lg:mr-10 mb-16">
        <h1>Description</h1>
      </div>
      <div class="flex mx-28 gap-12">
        <div class="">
          <p>Category</p>
          <p>Glow</p>
        </div>
        <div class="">
          <p>SKU</p>
          <p>10 mL, 30mL</p>
        </div>
        <div class="">
          <p>Key Ingredients</p>
          <p>Vitamin C, Vitamin E, Ferulic Acid</p>
        </div>
        <div>
          Product Value
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>