<script setup>
defineProps({
    image:{
        type:String,
        required:true,
    },
    sm:Boolean
})
</script>
<template>
       
        <div :class="sm ? 'w-60 h-36 lg:w-72 lg:h-44 mx-auto ':'w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'" :style="{ backgroundImage: image }" style="
 background-size: 100%;
position: absolute;
z-index: 0;
pointer-events: none;
object-fit:scale-down;
background-repeat: no-repeat;
">
     <div style="background-image: url('/tvz.png');  width: 100%;
                height:100%; background-size: 100%;
    position: absolute;
    z-index: 0;
    pointer-events: none;
    object-fit:cover;
    background-repeat: no-repeat;
    overflow: visible;
    ">
    <div class="absolute w-full h-full z-10">
        <slot />
        </div>
        </div>
        </div>
        
</template>
