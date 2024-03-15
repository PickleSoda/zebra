<!-- <template>
    <div class="w-full h-screen bg-zebraBackground font-mono">
        
        
            <slot />
        </div>
</div>
</template> -->


<template>
  <div @click="handleClick">
    <div
      class="zebra-gradient overflow-y-auto"
    />

    <div
      :class="backgroundClass"
      class="absolute overflow-y-auto w-full h-screen bg-zebraBackground font-mono filter-[url(#pixelate)]"
    >
      <LangSwitcher />
      <VolumeSwitcher />
      <div class="w-full mx-auto max-w-5xl">
        <slot />
      </div>

      <audio
        id="sound-1"
        :src="bomboclatSound"
      />
      <audio
        id="sound-2"
        :src="classicHurtSound"
      />
      <audio
        id="sound-3"
        :src="gtaSanAndreasSound"
      />
      <audio
        id="sound-4"
        :src="plug"
      />
    </div>
  </div>
</template>
  
<script setup>
  import bomboclatSound from '@/assets/sounds/bomboclat.mp3';
    import classicHurtSound from '@/assets/sounds/classic_hurt.mp3';
    import gtaSanAndreasSound from '@/assets/sounds/gta-san-andreas.mp3';
    import plug from '@/assets/sounds/plug.mp3';

//   import { ref, watch } from 'vue';
//   import { useRoute } from 'vue-router';

// Ref for the dynamic background class
const backgroundClass = ref('default-background');
const route = useRoute();

// Function to update background class based on route
const updateBackgroundClass = (path) => {
    backgroundClass.value = path.includes('/media') ? 'media-background' :
        backgroundClass.value = path.includes('/agency') ? backgroundClass.value = path.includes('/agency/artists') ? 'bg-zebraBackground': 'agency-background'
            : 'bg-zebraBackground';
};

// Watch for route changes
watch(() => route.path, (newPath) => {
    updateBackgroundClass(newPath);
});

// Initialize background class
updateBackgroundClass(route.path);

const SoundStore = useSoundStore();
const { playSound } = SoundStore;

const handleClick = () => {
    playSound();
};
</script>
  
<style>
/* Define background colors */
.media-background {
    background-color: #000000;
    /* Default background color */
}

.agency-background {
    background-color: #1F684E;
    /* Specific color for routes under '/something' */
}
html {
    scroll-behavior: smooth;
  }
  
  .zebra-gradient{
    content: '   ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    right: 0;
    background:  linear-gradient(rgba(100, 100, 100, 0) 40%, rgba(56, 56, 56, 0.2) 60%),
    linear-gradient(90deg, rgba(255, 0, 0, 0.10), rgba(2, 255, 2, 0.05), rgba(0,0,255,0.10));
    z-index: 100000;
    background-size: 100% 4px,6px 100%;
    pointer-events: none;
}


</style>
  