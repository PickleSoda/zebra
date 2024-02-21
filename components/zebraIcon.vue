<template>
  <nuxt-link :to="localePath('/')">
    <img
      v-if="star"
      src="/zebraStar.png"
      alt=""
      class="max-w-sm mx-auto md:max-w-xl"
    > 
    <img
      v-else
      class="max-w-sm mx-auto p-10 md:max-w-xl"
      src="/zebraIcon.png"
      alt="Zebra Icon"
    >
  </nuxt-link>
</template>
<script setup>
defineProps({
    star: Boolean
})

</script>
