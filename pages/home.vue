<script setup>
// You might choose this based on an API call or logged-in status
const layout = "container";
const nav = [
  {title:"shop",image:"tee.png",link:'https://shop.zebratbilisi.com/'},
  {title:"events",image:"events.png",},
  {title:"agency",image:"agency.png"},
  {title:"contact",image:"contact.png"},
  {title:"magazine",image:"magazine.png"},
  {title:"about",image:"question.png"},
]
</script>

<template>
  <Header/>
  
  <div class="w-full z-20 lg:mb-16 ">
      <NuxtLink :to="localePath('media')" class="absolute w-60 h-36 lg:w-72 lg:h-44 mx-auto lg:right-20 lg:top-44 xl:right-0 xl:top-40 lg:translate-x-1/4  left-1/2 transform -translate-x-1/2">
        <tvContainer sm image="url('/main.gif')">
          <div class="w-full h-full flex items-center justify-center">
            <h1 class="font-bold text-center p-4  max-w-min mx-auto text-white">{{$t('media')}}</h1>
            </div>
            </tvContainer>
            </NuxtLink>
            
            </div>
      
    <NuxtLayout :name="layout">
      
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <HomeNav class="mx-auto" v-for="navitem in nav" :key="navitem.title" :image="navitem.image" :title="navitem.title" :link="navitem.link||localePath(navitem.title)"/>
        </div>
        </NuxtLayout>

</template>