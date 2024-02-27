<script setup>
// You might choose this based on an API call or logged-in status
const layout = "container";
const nav = [
  { title: "shop", image: "tee.png", link: 'https://shop.zebratbilisi.com/' },
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
  <div>
    <zebraHeader />


    <NuxtLayout :name="layout">
      <NuxtLink
        :to="localePath('media')"
        class="absolute w-60 h-36  mx-auto   -top-40 lg:-top-32 xl:-top-20 left-1/2 max-xl:-translate-x-1/2 xl:-right-64  z-10"
        @click="handleNavClick"
      >
        <tvContainer
          sm
          image="url('/main.gif')"
        >
          <div class="w-full h-full flex items-center justify-center">
            <h1 class="font-bold text-center p-4  max-w-min mx-auto text-white">
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