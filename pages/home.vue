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

</script>

<template>
  <div>
    <zebraHeader />

    <div class="w-full z-20 lg:mb-16 ">
      <NuxtLink
        :to="localePath('media')"
        class="absolute w-60 h-36  mx-auto   right-1/2 transform translate-x-1/2"
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
    </div>

    <NuxtLayout :name="layout">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <HomeNav
          v-for="navitem in nav"
          :key="navitem.title"
          class="mx-auto"
          :image="navitem.image"
          :title="navitem.title"
          :link="navitem.link || localePath(navitem.title)"
        />
      </div>
    </NuxtLayout>

    <zebra-footer />
  </div>
</template>