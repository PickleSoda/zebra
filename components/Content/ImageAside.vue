<script setup lang="ts">
import { computed } from 'vue';

// Define enum manually
enum Side {
  Left = "Left",
  Right = "Right",
}

// Define props
const props = defineProps({
  side: {
    type: String as () => Side,
    required: true,
    default: "Left",
  },
  image: {
    type: String,
    required: true,
  },
});

// Dynamic class based on side
const imageOrder = computed(() => (props.side === Side.Left ? 'order-1' : 'order-2'));
const contentOrder = computed(() => (props.side === Side.Left ? 'order-2' : 'order-1'));
</script>

<template>
  <div class="flex flex-wrap my-20">
    <div :class="['w-full lg:w-2/5', imageOrder]">
      <img
        :src="image"
        alt="Artist Image"
        class="w-full object-cover"
      >
    </div>
    <div :class="['w-full lg:w-3/5 lg:pl-8 flex flex-col justify-center', contentOrder]">
      <slot />
    </div>
  </div>
</template>
