<script setup>
// You might choose this based on an API call or logged-in status
import { videos } from '@/assets/content/videos.js';
const layout = "default";
console.log(videos);
</script>

<template>
  <NuxtLayout :name="layout">
    <h1 class="p-5 absolute top-0 left-10 z-[10000]">
      <nuxt-link
        :to="localePath('/media/')"
        class="text-white font-bold text-3xl md:text-4xl "
      >
        {{ $t('back') }}
      </nuxt-link>
    </h1>
    <tvOverlay image="url('/media.gif')" />
    <div
      class="absolute w-full h-[calc(100%-165px)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-20 overflow-scroll"
    >
      <div class="overflow-y-scroll h-full">
        <div class="flex flex-row justify-center items-center gap-5 ">
          <h1 class="text-white font-bold text-3xl md:text-4xl sm:pt-5 md:pt-10">
            {{ $t('videos') }}
          </h1>
        </div>
        <div class="w-full flex flex-col justify-center items-center gap-5 md:gap-10">
          <div
            v-for="(video, index) in videos"
            :key="index"
            class="lg:my-10 w-full"
          >
            <VideoDetails :video="video" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>