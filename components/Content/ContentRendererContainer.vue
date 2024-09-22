<script setup lang="ts">
import Header from '~/components/Content/Header.vue'
import Paragraph from '~/components/Content/Paragraph.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const components = {
  Header,
  Paragraph
}
</script>

<template>
  <div class="mx-8 p-2 md:p-8 bg-neutral-800 border-opacity-80 rounded-sm text-center text-white">
    <h1 class="text-4xl font-bold leading-10">
      {{ data?.title }}
    </h1>
    <ContentRenderer :value="data" v-if="data">
      <ContentRendererMarkdown :value="data" :components="components"/>
    </ContentRenderer>
  </div>
</template>
