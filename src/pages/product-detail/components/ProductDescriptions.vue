<script setup lang="ts">
import { ref } from "vue";
import ProductImage from "../../../components/Slider/ProductImage.vue";
</script>

<template>
  <div>
    <div>
      <ProductImage class="mt-12 lg:hidden" />
    </div>
    <div class="flex mt-20 font-questrial text-gray-1">
      <div class="">
        <div class="flex mx-0 lg:mr-10 mb-10">
          <div class="">
            <img src="/img/halfarrow.svg" class="w-16 sm:w-20" />
          </div>
          <h1 class="text-2xl mx-8 text-hydrate">Description</h1>
          <hr />
        </div>
        <div class="mx-24 sm:mx-28 lg:mr-10 text-justify">
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
          <div class="my-12">
            <div class="flex items-center ml-0 sm:ml-5"><img src="/img/checkbox.svg" class="w-10"><p class="text-hydrate ml-4">Skin Concern</p></div>
            <ul class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 list-disc ml-24 mt-2">
              <li>Aging</li>
              <li>Discoloration</li>
              <li>Dehydrated</li>
            </ul>
          </div>
          <div>
            <div class="flex items-center ml-0 sm:ml-5"><img src="/img/checkbox.svg" class="w-10"><p class="text-hydrate ml-4">Skin Type</p></div>
            <ul class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 list-disc ml-24 mt-2">
              <li>All Skin Type</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <ProductImage class="hidden lg:block lg:mr-28" />
      </div>
    </div>

    <div class="mt-20 font-questrial text-gray-1">
      <div class="flex mx-0 lg:mr-10 mb-10">
        <div class="">
          <img src="/img/halfarrow.svg" class="w-16 sm:w-20" />
        </div>
        <h1 class="text-2xl mx-8 text-hydrate">Details</h1>
      </div>
      <div class="flex flex-wrap mx-24 sm:mx-28 gap-12 items-center">
        <div class="">
          <p class="text-hydrate">Category</p>
          <p>Glow</p>
        </div>
        <div class="">
          <p class="text-hydrate">SKU</p>
          <p>10 mL, 30mL</p>
        </div>
        <div class="">
          <p class="text-hydrate">Key Ingredients</p>
          <p>Vitamin C, Vitamin E, Ferulic Acid</p>
        </div>
        <div class="flex items-center"><img src="/img/star.svg" class="w-6 mr-4"> Product Value</div>
      </div>
    </div>

    <div class="my-20 font-questrial text-gray-1">
      <div class="flex mx-0 lg:mr-10 mb-10">
        <div class="">
          <img src="/img/halfarrow.svg" class="w-16 sm:w-20" />
        </div>
        <h1 class="text-2xl mx-8 text-hydrate">How To Use</h1>
      </div>
      <div class="mx-24 sm:mx-28">
        <ul class="list-disc text-justify ml-4">
          <li>Apply 4-5 drops to the face, neck, and chest every morning. Use on
          clean skin before moisturizer and other DPE Lab products. Layer with a
          broad-spectrum SPF 50+ sunscreen for better protection against free
          radicals</li>
          
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
</style>