<script setup lang="ts">
import ImageAside from './ImageAside.vue';
import MasonryGrid from './MasonryGrid.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const components = {
  ImageAside,
  MasonryGrid,
};
</script>

<template>
  <div class="mx-8 p-2 md:p-8 rounded-sm text-center text-white">
    <ContentRenderer
      v-if="data"
      :value="data"
    >
      <ContentRendererMarkdown
        :value="data"
        :components="components"
      />
    </ContentRenderer>
  </div>
</template>

<style>
/* Tailwind customization */
/* Custom styles for heading tags */
h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    color: white;
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.3;
    color: white;
  }
  
  h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.4;
    color: white;
  }
  
  h4 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.4;
    color: white;
  }
  
  h5 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    color: white;
  }
  
  h6 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5;
    color: white;
  }
  
  /* Custom styles for paragraph */
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: white;
  }
</style>