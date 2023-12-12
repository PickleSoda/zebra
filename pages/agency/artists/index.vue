<script setup>
const nav = [
  { title: "WILL GATES", link: "/agency/artists/will-gates" },
  { title: "ECONTAKT", link: "/agency/artists/econtakt" },
  { title: "BUBA", link: "/agency/artists/buba" },
  { title: "DJ DELOREAN", link: "/agency/artists/dj-delorean" },
  { title: "E7EVEN", link: "/agency/artists/e7even" },
  { title: "1K", link: "/agency/artists/1k" },
]
const layout = "tvz";
</script>

<template>
  <NuxtLayout :name="layout"
    image="url(' https://cdn.builder.io/api/v1/image/assets/TEMP/5f76eb0a-290b-4519-9e5a-0698f5c96ba2?apiKey=5f9aacd1fc62433cbe9b3f16f9505026&width=1600')">
    <div class="py-20 px-10 md:px-40">
      <div
        class="w-full flex flex-col justify-center items-center gap-5 md:gap-4  bg-gray-600/40 rounded-xl border-gray-300/60 border p-3">
        <h1 class="text-white font-bold  text-2xl md:text-3xl">ARTISTS</h1>
        <div
          class="w-full flex-col justify-center items-center gap-5 md:gap-4 rounded-lg border-gray-200/70 border p-3 mb-1 hidden md:flex">
          <nuxt-link v-for="(item, index) in nav" :key="index" :to="localePath(item.link)"
            class="text-white font-bold  text-lg md:text-2xl">
            {{ item.title }}
          </nuxt-link>
        </div>
      </div>
      <div class="absolute md:hidden top-1/2 -translate-y-1/3 left-0  w-full p-10">

        <div
          class="flex  flex-col justify-center items-center gap-5 md:gap-4 rounded-lg bg-gray-600/40 border-gray-200/70 border p-3 mb-1">
          <nuxt-link v-for="(item, index) in nav" :key="index" :to="localePath(item.link)"
            class="text-white font-bold  text-lg md:text-2xl">
            {{ item.title }}
          </nuxt-link>
        </div>

      </div>
    </div>
  </NuxtLayout>
</template>