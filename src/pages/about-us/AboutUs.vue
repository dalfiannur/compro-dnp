<script lang="ts" setup>
import HowToFind from '../../components/HowToFind.vue'
</script>

<template>
    <div>
        <div class="flex items-center bg-banner pl-12 pr-36 sm:px-36 h-80 sm:h-[30rem] w-full bg-cover bg-bottom">
            <h2 class="text-5xl sm:text-6xl font-inter text-white">About Us</h2>
        </div>

        <div class="flex justify-center mt-12 sm:mt-20">
            <div
                class="flex flex-col md:flex-row w-full max-w-screen-xl gap-10 md:gap-20 mx-8 sm:mx-16 md:mx-32 lg:mx-40">
                <div class="flex-1">
                    <h4 class="text-2xl text-hydrate font-questrial text-center sm:text-left">
                        Our
                        <br />Promise
                    </h4>
                    <p class="mt-6 text-baseColor font-questrial text-center sm:text-justify">
                        PT Dermedic Phar Este is established in 2022 as the first local brand
                        with premium and professional skin care products in Indonesia. Our
                        mission is to improve people’s skin health by providing the most
                        advance products, proven by science, and also partnering with
                        physicians to deliver this experience to their patients
                    </p>
                </div>
                <div class="flex-1">
                    <h4 class="text-2xl text-hydrate font-questrial text-center sm:text-left">
                        Expertise In beauty
                        <br />&amp; personal Care
                    </h4>
                    <p class="mt-6 text-baseColor font-questrial text-center sm:text-justify">
                        With our expertise in research &amp; innovation, we are committed to
                        continuously improve and provide the best service and products to
                        all of our customers. We are the expert’s choice for physician and
                        patients, for daily homecare and to complement aesthetic
                        procedures. We are the Expertise in Beauty and Personal Care
                    </p>
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center gap-10 m-8 sm:m-20">
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
            <div class="w-full md:w-60">
                <p class="text-sm font-bold font-din-next-lt-pro-bold text-baseColor">
                    For more info and references,
                    please contact us:
                </p>
                <p class="mt-3 text-sm font-din-next-lt-pro-light text-baseColor">
                    PT Dermedic Phar Este <br>
                    Jl. Kerkof No. 182, Leuwigajah, <br>
                    Kec. Cimahi Selatan, Kota Cimahi 40532 <br>
                    www.dpelab.com <br>
                    Tel / Fax : (022) xxxxxx
                </p>
            </div>
        </div>

        <div class="mt-12 sm:mt-28">
            <HowToFind />
        </div>
    </div>
</template>

<style scoped>
.bg-banner {
    background-image: linear-gradient(90deg,
            rgb(99 196 180) 5%,
            rgba(255, 255, 255, 0) 100%), url(img/about-us.png)
}


@media screen and (min-width: 800px) {
    .bg-banner {
        background-image: linear-gradient(110deg,
                rgb(99 196 180) 5%,
                rgba(255, 255, 255, 0) 60%), url(img/about-us.png)
    }
}
</style>
