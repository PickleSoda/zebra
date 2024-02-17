<script setup>
import { useRouter } from 'vue-router'
defineProps({
    image: {
        type: String,
        required: true,
    },
})
const router = useRouter();
defineI18nRoute(false)
const goTo = () => {
    if (process.client) {
        window.history.length > 1 ? router.go(-1) : router.push(localePath('/home'))
    }
}
</script>
<template>
    <div class="top-0 bottom-0 left-0 right-0"> 
        <div
            class="absolute max-w-xs w-full h-[700px] md:max-w-4xl max-h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <tvContainer :image="image"></tvContainer>
        </div>
        <div class="absolute w-full h-[700px] max-w-4xl max-h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <slot />
        </div>

        <div
            class="lg:block absolute top-3/4 mt-20 md:mt-0  md:bottom-40 lg:bottom-auto left-1/2 lg:top-20 lg:left-10 lg:translate-x-0 transform -translate-x-1/2 translate-y-1/2 text-white">
            <NuxtLink :to="localePath('/home')"
                class="w-fit p-5  border-zebraBorder border-2 s text-white text-xl md:text-2xl">
                {{ $t('home') }}
            </NuxtLink>
        </div>
    </div>
</template>