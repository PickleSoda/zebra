<script setup>
defineProps({
    title:{
        type:String,
        required:true
    },
    image: {
      type: String
    },
    link:{
      type: String
    }
})
</script>
<template>
    <NuxtLink :to="link">
        <div class="mx-auto p-4 flex flex-col items-center w-20 md:w-28">
            <div class="w-20 md:w-28 h-24 md:h-32">
                <img :src="image||'question.png'" class="mx-auto"  :alt="title">
                </div>
                <h1 class="text-white font-semibold">{{ title.toLocaleUpperCase() }}</h1>
                
                </div>
                </NuxtLink>
</template>