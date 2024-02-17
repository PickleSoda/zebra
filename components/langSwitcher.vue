<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
const langSwitcher = ref()
const toggleLangSwitcher = () =>{
  langSwitcher.value = !langSwitcher.value
}
</script>

<template>
  <div class="absolute top-2 right-10 text-white cursor-pointer z-30">

 
  <div class="relative inline-block text-left">
    <div>
      <button type="button" class="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium" @click.prevent="toggleLangSwitcher">
       <h1 class=""> {{ locale.toLocaleUpperCase() }}</h1>
        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 6a2 2 0 100-4 2 2 0 000 4zm0 8a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

   
    <div v-if="langSwitcher" class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-zebraBackground " @click="toggleLangSwitcher">
      <div class="py-1 flex flex-col z-10" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="p-3 hover:bg-slate-700">{{
      locale.name 
    }}</NuxtLink>
      </div>
    </div>
  </div>
  </div>
  <div
      v-if="langSwitcher"
      class="absolute top-0 bottom-0 left-0 right-0 w-full h-screen z-10"
      @click="toggleLangSwitcher"
    ></div>
</template>