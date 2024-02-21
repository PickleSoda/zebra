<template>
  <div>
    <div class="w-full pt-10">
      <zebraHeader />
      <div class="absolute top-1/2 trasnform translate-y-1/2 left-1/2 trasnform -translate-x-1/2">
        <NuxtLink
        @click.prevent="handleButtonClick"
          :to="localePath('home')"
          class="w-fit p-5 bg-zinc-700 text-white text-xl md:text-2xl center"
        >
          {{ $t('start') }}
        </NuxtLink>
      </div>
    </div>
    <div class="absolute bottom-4 left-1/2 trasnform -translate-x-1/2" />
  </div>
</template>

<script setup>
const SoundStore = useSoundStore();
const { playSound } = SoundStore; 
const handleButtonClick = () => {
  playSound("sound-3");
};
</script>