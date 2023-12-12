<!-- <template>
    <div class="w-full h-screen bg-zebraBackground font-mono">
        
        
            <slot />
        </div>
</div>
</template> -->


<template>
    <div :class="backgroundClass" class="w-full h-screen bg-zebraBackground font-mono filter-[url(#pixelate)] ">

        <langSwitcher />
        <div class="w-full mx-auto max-w-5xl">
            <slot />
        </div>
    </div>
</template>
  
<script setup>
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
</style>
  