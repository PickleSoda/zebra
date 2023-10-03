<script setup>
defineProps({
    image:{
        type:String,
        required:true,
    }
})
</script>
<template>
    <div class="absolute w-screen h-screen max-w-5xl  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <tvContainer :image="image">
            </tvContainer>
            </div>
    <div class="absolute w-screen h-screen left-0 right-0 top-0 bottom-0">
<slot/>
</div>
</template>