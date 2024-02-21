<script setup>
// You might choose this based on an API call or logged-in status
const layout = "tvz";
</script>

<template>
  <NuxtLayout
    :name="layout"
    image="url('/media.gif')"
  >
    <div class="w-full flex flex-col justify-center items-center gap-5 md:gap-10 h-60 sm:h-72 md:h-96 md:mt-10">
      <h1 class="text-white font-bold text-xl md:text-3xl sm:pt-5 md:pt-10 z-10">
        {{ $t('directedbyzebra') }}
      </h1>
      <nuxt-link
        :to="localePath('/media/videos')"
        class="text-white font-bold  text-xl md:text-3xl"
      >
        {{ $t('videos') }}
      </nuxt-link>
      <nuxt-link
        :to="localePath('/media/pictures')"
        class="text-white font-bold  text-xl md:text-3xl"
      >
        {{ $t('pictures') }}
      </nuxt-link>
    </div>
  </NuxtLayout>
</template>