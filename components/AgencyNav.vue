<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  link: {
    default: "",
    type: String
  }
})
</script>
<template>
  <NuxtLink :to="link">
    <div class="mx-auto p-2 px-4 md:p-4 md:px-8  bg-emerald-600 rounded-full border-2  border-emerald-900 shadow-zebraBackground shadow-md">
      <h1 class="text-white font-light font-stalinist text-xs">
        {{ $t(title) }}
      </h1>
    </div>
  </NuxtLink>
</template>