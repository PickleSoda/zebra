<script setup>
import { ref } from 'vue';

const SoundStore = useSoundStore();

const isMuted = ref(false);

const toggleMute = () => {
    isMuted.value = !isMuted.value;
    SoundStore.toggleMute();
};
</script>

<template>
  <div class="absolute top-3 right-6 text-white cursor-pointer z-30">
    <button @click="toggleMute">
      <div
        v-if="isMuted"
        class="text-white h-4 w-4 pt-1 opacity-60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="24px"
        ><title>volume-off</title><path
          fill="white"
          d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
        /></svg>
      </div>
      <div
        v-else
        class="text-white h-4 w-4 pt-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="24px"
          class="text-white"
        ><title>volume-high</title><path
          fill="white"
          d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
        /></svg>
      </div>
    </button>
  </div>
</template>