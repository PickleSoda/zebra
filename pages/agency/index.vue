<script setup>
const nav = [
  { title: "artists" },
  { title: "release" },
  { title: "about" },
]
const SoundStore = useSoundStore();
const { playSound } = SoundStore; 
const handleButtonClick = () => {
  playSound("sound-3");
};
</script>
<template>
  <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-6xl px-2 pt-0 pb-30">
    <zebraHeader
      class="pb-40"
      star
    />
    <div class="grid grid-cols-3 max-w-3xl mx-auto">
      <AgencyNav
        v-for="navitem in nav"
        :key="navitem.title"
        class="mx-auto"
        :title="navitem.title"
        :link="localePath(`/agency/${navitem.title}`)"
        @click="handleButtonClick"
      />
    </div>
  </div>
</template>