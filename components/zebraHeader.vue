<template>
  <div class="pt-8 md:pt-0 z-10">
    <zebraIcon :star="star" />
  </div>
</template>
<script setup>
defineProps({
    star: Boolean
})
</script>