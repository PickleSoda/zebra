<script setup>
const nav = [
  { title: "artists" },
  { title: "release" },
  { title: "about" },
]
</script>

<template>
  <div>
    <Header />
    <div class="grid grid-cols-3">
      <AgencyNav class="mx-auto" v-for="navitem in nav" :key="navitem.title" :title="navitem.title"
        :link="localePath(navitem.title)" />
    </div>
  </div>
</template>