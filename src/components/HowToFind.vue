<script setup lang="ts">

</script>

<template>
    <div class="bg-no-repeat bg-cover wrapper h-[720px]">
        <div
            class="flex flex-col items-end justify-between h-full p-10 md:p-20 md:flex-row wrapper__inner"
        >
            <div>
                <h4 class="text-5xl text-hydrate font-questrial">How to find our products</h4>
                <p
                    class="mt-5 font-semibold text-gray-400 font-questrial text-lg"
                >Our products are exclusively available through our partner clinics and dermatologies.</p>
                <p
                    class="font-semibold text-gray-400 font-questrial text-lg"
                >Please make sure to consult with our physician to get the best experience with our product.</p>
            </div>
            <div class="flex items-center w-full md:w-fit">
                <a
                    href="/clinics"
                    @click.prevent
                    @click="$router.push('/clinics')"
                    class="w-full py-5 text-2xl text-center border px-auto md:w-fit md:px-24 md:text-3xl border-hydrate text-hydrate hover:bg-hydrate hover:text-white font-questrial"
                >Find Us</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    background-image: url("/img/medical-building-interior.jpeg");
    background-position: center 70%;

    &__inner {
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 15%,
            rgba(255, 255, 255, 0) 100%
        );
    }
}
</style>