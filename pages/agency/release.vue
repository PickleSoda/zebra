<script setup>
const SoundStore = useSoundStore();
const { playSound } = SoundStore; 
const handleButtonClick = () => {
  playSound("sound-1");
};
</script>

<template>
  <nuxt-link
    :to="localePath('/agency')"
    @click="handleButtonClick"
  >
    <div class="w-full flex flex-col justify-center items-center gap-5 md:gap-10 h-60 md:h-96">
      <h1 class="text-white font-bold text-xl md:text-3xl sm:pt-5 md:pt-10">
        comming soon ...
      </h1>
    </div>
  </nuxt-link>
</template>