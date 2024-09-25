<script setup>
const nav = [
  { title: "WILL GATES", link: "/agency/artists/will-gates" },
  { title: "ECONTAKT", link: "/agency/artists/econtakt" },
  { title: "BUBA", link: "/agency/artists/buba" },
  { title: "DJ DELOREAN", link: "/agency/artists/dj-delorean" },
  { title: "E7EVEN", link: "/agency/artists/e7even" },
  { title: "1K", link: "/agency/artists/1k" },
]
const SoundStore = useSoundStore();
const { chooseSound } = SoundStore;


const handleClick = () => {
  chooseSound("4");
}
const query = queryContent({
  where: {
    _path: { $contains: '/en/agency/artists' }
  }
})


const navigation = await query.find();
console.log("nav:", navigation)
</script>
<template>
  <div>
    <h1 class="p-5 absolute top-0 left-10 z-[10000]">
      <nuxt-link :to="localePath('/home')" class="text-white font-bold text-3xl md:text-4xl ">
        {{ $t('back') }}
      </nuxt-link>
    </h1>
    <tvOverlay image="url('/main.gif')" />
    <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div
        class="flex flex-col justify-center items-center gap-5 md:gap-4 bg-gray-600/40 rounded-xl border-gray-300/60 border p-3 md:w-[500px] lg:w-[800px] w-72">
        <h1 class="text-white font-bold text-2xl md:text-6xl">
          ARTISTS
        </h1>
        <div
          class="w-full flex-col justify-center items-center gap-5  rounded-lg border-gray-200/70 border p-3 mb-1 flex h-96 lg:h-[500px] overflow-y-scroll">
          <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path"
            class="text-white font-bold text-lg md:text-5xl">
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
