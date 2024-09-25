<script setup>
const { data } = await useAsyncData('privacyPolicy', () => queryContent('en', 'about').findOne())
</script>

<template>
  <div>
    <div class="pt-10 pl-10 text-white">
      <NuxtLink
        :to="localePath('/home')"
        class="w-fit p-5 border-zebraBorder border-2 text-white text-xl md:text-2xl"
      >
        {{ $t('home') }}
      </NuxtLink>
    </div>
    <div class="absolut top-1/2 pt-10 w-full z-10 mx-auto max-w-5xl bg-zebraBackground pb-10">
      <ContentRendererContainer
        v-if="data"
        :data="data"
      />
    </div>
  </div>
</template>
