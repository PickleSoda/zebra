<script setup>
const nav = [
  { title: "artists" },
  { title: "release" },
  { title: "about" },
]
</script>

<template>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4x ">
    <zebraHeader
      class="pb-40"
      star
    />
    <div class="grid grid-cols-3">
      <AgencyNav
        v-for="navitem in nav"
        :key="navitem.title"
        class="mx-auto"
        :title="navitem.title"
        :link="localePath(`/agency/${navitem.title}`)"
      />
    </div>
  </div>
</template>