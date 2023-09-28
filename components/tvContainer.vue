<script setup>
defineProps({
    image:{
        type:String,
        required:true,
    }
})
</script>
<template>
       
        <div class="max-w-4xl mx-auto" :style="{ backgroundImage: image }" style="
width: 100%;
height:90%; background-size: 100%;
position: absolute;
z-index: 0;
pointer-events: none;
object-fit:scale-down;
background-repeat: no-repeat;
">
     <div class="max-w-4xl" style="background-image: url('tvz.png');  width: 100%;
                height:100%; background-size: 100%;
    position: absolute;
    z-index: 10;
    pointer-events: none;
    object-fit:cover;
    background-repeat: no-repeat;
    overflow: visible;
    ">
    <slot/>
        </div>

    </div>

</template>
