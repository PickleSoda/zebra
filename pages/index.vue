<template>
  <div>
    <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-6xl px-2 pt-0 pb-64">
      <zebraHeader />
    </div>
    <div class="absolute top-1/2 -translate-y-1/2 left-1/2  -translate-x-1/2 w-full max-w-6xl pt-64 flex">
      <NuxtLink
        :to="localePath('home')"
        class="p-2 md:p-5 bg-zinc-700 text-white text-xl md:text-2xl center shadow-inner border-gray-500 border-4 border-b-gray-700 border-r-gray-600 mx-auto"
        @click.prevent="handleButtonClick"
      >
        {{ $t('start') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const SoundStore = useSoundStore();
const { playSound } = SoundStore;
const handleButtonClick = () => {
  playSound("sound-3");
};
</script>