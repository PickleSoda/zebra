<template>
  <nuxt-link
    :to="localePath('/')"
    @click="handleButtonClick"
  >
    <img
      v-if="star"
      src="/zebraStar.png"
      alt=""
      class="max-w-sm mx-auto md:max-w-5xl"
    > 
    <img
      v-else
      class="max-w-sm mx-auto p-10 md:max-w-3xl w-full"
      src="/zebraIcon.png"
      alt="Zebra Icon"
    >
  </nuxt-link>
</template>
<script setup>
defineProps({
    star: Boolean
})
const SoundStore = useSoundStore();
const { playSound } = SoundStore; 
const handleButtonClick = () => {
  playSound("sound-3");
};
</script>
