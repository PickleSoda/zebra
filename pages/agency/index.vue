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
  <div class="pt-20">
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