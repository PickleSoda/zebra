<script setup>
// You might choose this based on an API call or logged-in status
const layout = "container";
const nav = [
  {title:"shop",image:"tee.png",link:'https://shop.zebratbilisi.com/'},
  {title:"events",image:"",},
  {title:"agency",image:""},
  {title:"contact",image:"contact.png"},
  {title:"magazine",image:""},
  {title:"about",image:""},
]
</script>

<template>
  <Header/>

  <div class="w-full h-40">
      <NuxtLink :to="localePath('media')" class="absolute w-60 h-36 lg:w-72 lg:h-44 mx-auto lg:right-20 lg:top-44 lg:translate-x-1/4  left-1/2 transform -translate-x-1/2">
        <tvContainer sm image="url('https://s3-alpha-sig.figma.com/img/ac5f/a27c/2afbd34d27201c98fecd88f8e0f39a1a?Expires=1696809600&Signature=ToUqahcT~oH3kB7W0KkOm4yBjLCO4JXmBlZ0paNjdN8niWIaX0i~HCg7nVaKmMWl5l092xDXsxVZTRsDumUyiD~KRn85gt5uql4X2gPTCUAE7xb3eiiyz66fdc4Rtkfzy-sb4LzQm6s2dTmVAZyEg0rcaNm5hOnWGhlIL6Ih4A9pHjXQluFfpxxR8JnO7yt61vzCARKag7BTSw-AVL39L2g5Nn4YvjM8P9iOD9~MrasfgO4CvYwo322N3kFRPSDh5Oj0dCAyAhBJ1AbjNbYbNseEL2zqs3XcTv6FL0kH3XwsHskRd5ELkAfsRG0IXbQQD2PxU5yrtslQK9hOXWIwcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')">
          <div class="w-full h-full flex items-center justify-center">
            <h1 class="font-bold text-center p-4 bg-slate-400/70 max-w-min mx-auto text-white">{{$t('media')}}</h1>
            </div>
            </tvContainer>
            </NuxtLink>
            
            </div>
     <NuxtLayout :name="layout">
      
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          <HomeNav class="mx-auto" v-for="navitem in nav" :key="navitem.title" :image="navitem.image" :title="navitem.title" :link="navitem.link||localePath(navitem.title)"/>
            
        </div>
  </NuxtLayout>
</template>