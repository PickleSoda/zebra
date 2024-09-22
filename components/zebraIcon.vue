<template>
  <nuxt-link
    :to="localePath('/home')"
    @click="handleButtonClick"
  >
    <img
      v-if="star"
      src="/zebraStar.png"
      alt=""
      class="w-full"
    > 
    <img
      v-else
      class="w-full"
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
const { chooseSound } = SoundStore; 
const handleButtonClick = () => {
  chooseSound("3");
};
</script>
