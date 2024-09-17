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
    :class="'absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'"
    :style="{ backgroundImage: image }"
  >
    <div
      style="background-image: url('/tvz.png');  width: 100vw;
    height:100vh; background-size: 100%;
    z-index: 1000;
    pointer-events: none;
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    overflow: visible;
    position: absolute;
    "
    >
      <div class="absolute w-full h-full z-10">
        <slot />
      </div>
    </div>
  </div>
</template>
