<template>
  <div class="h-32 w-32">
    <NuxtLink
      :to="localePath(link)"
      @click.prevent="handleButtonClick"
    >
      <img
        src="/back.gif"
        alt="back"
        class="h-32 w-32"
      >
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
    link: String,
})
const SoundStore = useSoundStore();
const { chooseSound } = SoundStore; 
const handleButtonClick = () => {
  chooseSound("2");
};
</script>
