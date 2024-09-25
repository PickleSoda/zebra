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
        <button
          type="button"
          class="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2 text-base font-medium"
          @click.prevent="toggleLangSwitcher"
        >
          <h1 class="text-xl">
            {{ locale.toLocaleUpperCase() }}
          </h1>
        </button>
      </div>

   
      <div
        v-if="langSwitcher"
        class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-zebraBackground "
        @click="toggleLangSwitcher"
      >
        <div
          class="py-1 flex flex-col z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <NuxtLink
            v-for="available in availableLocales"
            :key="available.code"
            :to="switchLocalePath(available.code)"
            class="p-3 hover:bg-slate-700"
          >
            {{
              available.name 
            }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="langSwitcher"
    class="absolute top-0 bottom-0 left-0 right-0 w-full h-screen z-10"
    @click="toggleLangSwitcher"
  />
</template>