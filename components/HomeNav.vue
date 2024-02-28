<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    default: "question.png",
    type: String
  },
  link: {
    default: "",
    type: String
  }
})
</script>
<template>
  <NuxtLink :to="link">
    <div class="mx-auto p-4 flex flex-col items-center w-20 md:w-32">
      <div class="w-20 md:w-40 h-24 md:h-40">
        <img
          :src="`/${image || 'question.png'}`"
          class="mx-auto md:h-28"
          :alt="title"
        >
      </div>
      <h1 class="text-white font-semibold text-lg">
        {{ $t(title) }}
      </h1>
    </div>
  </NuxtLink>
</template>