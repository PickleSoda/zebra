<script setup>
// You might choose this based on an API call or logged-in status
const layout = "default";
</script>

<template>
  <NuxtLayout :name="layout">
    <tvOverlay image="url('/media.gif')" />
    <div class="w-full flex flex-col justify-center items-center gap-5 md:gap-10 h-60 sm:h-72 md:h-96 md:mt-10">
      <h1 class="text-white font-bold text-xl md:text-3xl sm:pt-5 md:pt-10 z-10">
        {{ $t('directedbyzebra') }}
      </h1>
      <h1 class="text-white font-bold text-xl md:text-3xl sm:pt-5 md:pt-10 z-10">
        <nuxt-link :to="localePath('/media/videos')">
          {{ $t('videos') }}
        </nuxt-link>
      </h1>
      <h1 class="text-white font-bold text-xl md:text-3xl sm:pt-5 md:pt-10 z-10">
        <nuxt-link
          :to="localePath('/media/pictures')"
          class="text-white font-bold  text-xl md:text-3xl"
        >
          {{ $t('pictures') }}
        </nuxt-link>
      </h1>
    </div>
  </NuxtLayout>
</template>