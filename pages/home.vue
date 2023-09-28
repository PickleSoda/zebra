<script setup>
// You might choose this based on an API call or logged-in status
const layout = "container";
const nav = [
  {title:"shop",image:"tee.png",link:'https://shop.zebratbilisi.com/'},
  {title:"events",image:""},
  {title:"agency",image:""},
  {title:"contact",image:"contact.png"},
  {title:"magazine",image:""},
  {title:"about",image:""},
]
</script>

<template>
  <Header/>

  <NuxtLink to="/media">
      <div class="absolute right-1/4 w-1/2 h-40 sm:right-1/3 sm:w-1/3 sm:h-60 md:w-64 md:top-40 md:right-36  ">
          <tvContainer image="url('https://s3-alpha-sig.figma.com/img/ac5f/a27c/2afbd34d27201c98fecd88f8e0f39a1a?Expires=1696809600&Signature=ToUqahcT~oH3kB7W0KkOm4yBjLCO4JXmBlZ0paNjdN8niWIaX0i~HCg7nVaKmMWl5l092xDXsxVZTRsDumUyiD~KRn85gt5uql4X2gPTCUAE7xb3eiiyz66fdc4Rtkfzy-sb4LzQm6s2dTmVAZyEg0rcaNm5hOnWGhlIL6Ih4A9pHjXQluFfpxxR8JnO7yt61vzCARKag7BTSw-AVL39L2g5Nn4YvjM8P9iOD9~MrasfgO4CvYwo322N3kFRPSDh5Oj0dCAyAhBJ1AbjNbYbNseEL2zqs3XcTv6FL0kH3XwsHskRd5ELkAfsRG0IXbQQD2PxU5yrtslQK9hOXWIwcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')">
            <div class="w-full h-28 sm:h-40 flex items-center justify-center">
            <h1 class="font-bold text-center p-4 bg-slate-400/70 max-w-min mx-auto text-white">MEDIA</h1>
            </div>
            </tvContainer>
          
          </div>
          </NuxtLink>
     <NuxtLayout :name="layout" class="mt-40">
      
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          <HomeNav class="mx-auto" v-for="navitem in nav" :key="navitem.title" :image="navitem.image" :title="navitem.title" :link="navitem.link||navitem.title"/>
            
        </div>
  </NuxtLayout>
</template>