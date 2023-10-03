<script setup>
  import { useRouter } from 'vue-router'
defineProps({
    image:{
        type:String,
        required:true,
    }, 
})
const router = useRouter();
defineI18nRoute(false)
const goTo = () =>{
    if (process.client) {
window.history.length > 1 ? router.go(-1) : router.push(localePath('/home'))
}}
</script>
<template>
    
    <div class="pt-10 absolute w-screen h-screen max-w-5xl  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <tvContainer :image="image">
            </tvContainer>
            </div>
    <div class="absolute w-screen h-screen left-0 right-0 top-0 bottom-0">
<slot/>
</div>

<div class="lg:block absolute top-2/3 sm:top-3/4 md:bottom-40 lg:bottom-auto left-1/2 lg:top-20 lg:left-10 lg:translate-x-0 transform -translate-x-1/2 -translate-y-1/2 text-white">
    <NuxtLink :to="localePath('/home')" class="w-fit p-5 bg-zinc-700 text-white text-xl md:text-2xl">
            {{$t('home')}}    
            </NuxtLink>
            </div>
</template>