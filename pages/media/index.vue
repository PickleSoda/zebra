<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'bounce',
    mode: 'out-in'
  },
  layoutTransition: false
})
</script>


<template>
  <NuxtLayout>
    <h1 class="p-5 absolute top-0 left-10 z-[10000]">
      <nuxt-link
        :to="localePath('/home')"
        class="text-white font-bold text-3xl md:text-4xl "
      >
        {{ $t('back') }}
      </nuxt-link>
    </h1>
    <tvOverlay image="url('/media.gif')" />
    <div
      class="w-full h-full absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex flex-col justify-center items-center gap-5 md:gap-10"
    >
      <h1 class="text-white font-bold text-3xl md:text-4xl sm:pt-5 md:pt-10 z-10">
        <nuxt-link
          :to="localePath('/media/directedbyzebra')"
          class="text-white font-bold text-3xl md:text-4xl "
        >
          {{ $t('directedbyzebra') }}
        </nuxt-link>
      </h1>
      <h1 class="sm:pt-5 md:pt-10 z-10">
        <nuxt-link
          :to="localePath('/media/videos')"
          class="text-white font-bold text-3xl md:text-4xl "
        >
          {{ $t('videos') }}
        </nuxt-link>
      </h1>
    </div>
  </NuxtLayout>
</template>