<script setup>
defineProps({
  video: {
    type: Object,
    required: true,
  },
})

</script>

<template>
  <div class="flex flex-col lg:flex-row w-full items-center justify-evenly">
    <YoutubePlayerBox :video-id="video.videoId" />
    <div class="flex flex-col items-center justify-center w-full lg:w-[400px] xl:w-[550px] p-10 gap-5">
      <h1 class="text-white font-bold text-2xl md:text-4xl sm:pt-5 md:pt-10 z-10">
        {{ video.title }}
      </h1>
      <h2 class="text-[#8DAAC8] font-semibold text-xl md:text-2xl">
        {{ video.artist }}
      </h2>
      <h3 class="text-gray-200 font-semibold text-lg md:text-xl lg:mb-24">
        Shot by: {{ video.shotBy }}
      </h3>
    </div>
  </div>
</template>
