<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  sm: Boolean
})
</script>
<template>
  <div
    :class="'absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none'"
    style="background-repeat: repeat;  background-size: 100% "
    :style="{ backgroundImage: image } "
  >
    <div
      style="background-image: url('/tvz.png');  width: 100vw;
    height:100%; background-size: 100%;
    z-index: 1000;
    pointer-events: none;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: visible;
    position: absolute;
    "
    >
      <slot />
    </div>
  </div>
</template>
