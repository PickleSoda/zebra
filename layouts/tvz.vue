<script setup>
defineProps({
    image:{
        type:String,
        required:true,
    }
})
</script>
<template>
    <div class="absolute w-screen h-screen left-0 right-0 top-0 bottom-0 bg-zebraBackground">
        <div class="w-full mx-auto max-w-4xl mt-10">
            <tvContainer :image="image"/>
                <slot/>
        </div>
</div>
</template>