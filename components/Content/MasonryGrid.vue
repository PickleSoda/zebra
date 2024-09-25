<script setup lang="ts">
import { computed } from 'vue';

// Define props
const props = defineProps({
  images: {
    type: String,
    required: true,
  },
});

// Parse the JSON string into an array
const imageList = computed(() => {
  try {
    return JSON.parse(props.images);
  } catch (e) {
    console.error('Invalid JSON string for images:', e);
    return [];
  }
});
</script>

<template>
  <div class="my-20 columns-1 sm:columns-2 md:columns-3 gap-5">
    <div
      v-for="(image, index) in imageList"
      :key="index"
      class="overflow-hidden rounded-lg mt-5"
    >
      <img
        :src="image"
        alt="Artist Photo"
        class="w-full object-cover"
      >
    </div>
  </div>
</template>
