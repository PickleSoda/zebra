<script setup>
defineProps({
  videoId: {
    type: String,
    required: true,
  },
})
const isLoaded = ref(false)
const isPlaying = ref(false)
const video = ref()
function stateChange(event) {
    isPlaying.value = event.data === 1
}
const width = ref(0);

const updateWidth = () => {
  width.value = window.innerWidth;
};

onMounted(async() => {
  updateWidth();
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});

const divStyle = computed(() => {
  if (width.value < 500) {
    return {
      width: '320px',
    };
  } else {
    return {
      width: '100%',
    };
  }
});
</script>

<template>
  <div>
    <div class="flex items-center justify-center p-5">
      <ScriptYouTubePlayer
        ref="video"
        :video-id="videoId"
        class="h-60 md:h-80 lg:h-96  xl:h-[500px] border-2 border-[7F8672] focus:outline-none w-full"
        :style="divStyle"
        @ready="isLoaded = true"
        @state-change="stateChange"
      >
        <template #awaitingLoad>
          <div
            class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[100px] w-[128px]"
          >
            <svg
              height="100%"
              version="1.1"
              viewBox="0 0 68 48"
              width="100%"
            >
              <path
                d="M 45,24 27,14 27,34"
                fill="#fff"
              />
            </svg>
          </div>
        </template>
      </ScriptYouTubePlayer>
    </div>
  </div>
</template>
