<script lang="ts" setup>
import HowToFind from '../../components/HowToFind.vue'
</script>

<template>
    <div>
        <div class="flex items-center px-28 bg-gradient-hydrate h-96">
            <h2 class="text-6xl font-bold text-white">About Us</h2>
        </div>

        <div class="flex justify-center mt-28">
            <div class="flex w-full max-w-screen-lg gap-20">
                <div class="flex-1">
                    <h4 class="text-xl text-hydrate font-questrial">
                        Our
                        <br />Promise
                    </h4>
                    <p class="mt-10 text-gray-600 font-questrial">
                        PT Dermedic Phar Este is established in 2022 as the first local brand
                        with premium and professional skin care products in Indonesia. Our
                        mission is to improve people’s skin health by providing the most
                        advance products, proven by science, and also partnering with
                        physicians to deliver this experience to their patients
                    </p>
                </div>

                <div class="flex-1">
                    <h4 class="text-xl text-hydrate font-questrial">
                        Expertise In beauty
                        <br />&amp; personal Care
                    </h4>
                    <p class="mt-10 text-gray-600 font-questrial">
                        With our expertise in research &amp; innovation, we are committed to
                        continuously improve and provide the best service and products to
                        all of our customers. We are the expert’s choice for physician and
                        patients, for daily homecare and to complement aesthetic
                        procedures. We are the Expertise in Beauty and Personal Care
                    </p>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center gap-10 mt-20">
            <div class="">
                <a href="https://instagram/dpelab.id" target="_blank" class="flex items-center gap-2">
                    <img src="/img/instagram-gray.svg" class="w-[30px]" />
                    <span class="text-gray-500 font-questrial">@dpelab.id</span>
                </a>
            </div>

            <div class="flex flex-col items-center">
                <img src="/img/barcode.svg" class="w-[115px]" />
            </div>
            <div>
                <img src="/img/logo-blue.svg" class="w-[115px]" />
            </div>
            <div class="w-52">
                <p class="text-sm font-bold font-din-next-lt-pro-bold">
                    For more info and references,
                    please contact us:
                </p>
                <p class="mt-3 text-sm font-din-next-lt-pro-light">
                    PT Dermedic Phar Este
                    Jl. Kerkof No. 182, Leuwigajah,
                    Kec. Cimahi Selatan, Kota Cimahi 40532
                    www.dpelab.com
                    Tel / Fax : (022) xxxxxx
                </p>
            </div>
        </div>

        <div class="mt-28">
            <HowToFind />
        </div>
    </div>
</template>

<style scoped>
.bg-gradient-hydrate {
    background: linear-gradient(
        90deg,
        rgb(99 196 180) 5%,
        rgba(255, 255, 255, 0) 50%
    );
}
</style>