<script setup>
// You might choose this based on an API call or logged-in status
const layout = "container";
const nav = [
  { title: "shop", image: "tee.png", link: 'https://zebratbs.bigcartel.com/' },
  { title: "events", image: "events.png", },
  { title: "agency", image: "agency.png" },
  { title: "contact", image: "contact.png" },
  { title: "magazine", image: "magazine.png" },
  { title: "about", image: "question.png" },
]
const SoundStore = useSoundStore();
const { playSound } = SoundStore; 
const handleNavClick = () => {
  playSound("sound-3");
};
</script>

<template>
  <div class="lg:pt-20">
    <zebraHeader />


    <NuxtLayout
      :name="layout"
      class="max-xl:mt-24"
    >
      <NuxtLink
        :to="localePath('media')"
        class="absolute w-40 h-28  mx-auto -top-28 lg:-top-20 xl:-top-6 left-1/2 max-xl:-translate-x-1/2 xl:-right-[390px]  z-10"
        @click="handleNavClick"
      >
        <tvContainer
          sm
          image="url('/main.gif')"
        >
          <div class="w-full h-full flex items-center justify-center">
            <h1 class="text-center text-lg  max-w-min mx-auto text-white font-extrabold">
              {{ $t('media') }}
            </h1>
          </div>
        </tvContainer>
      </NuxtLink>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <HomeNav
          v-for="navitem in nav"
          :key="navitem.title"
          class="mx-auto"
          :image="navitem.image"
          :title="navitem.title"
          :link="navitem.link || localePath(navitem.title)"
          @click="handleNavClick"
        />
      </div>
      <template #footer>
        <zebra-footer />
      </template>
    </NuxtLayout>
  </div>
</template>