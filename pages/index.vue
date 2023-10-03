<template>
  <div class="w-full">
    <Header/>
    <div class="absolute md:relative top-1/2 w-full md:h-80 my-auto flex items-center justify-center">

      <NuxtLink :to="localePath('home')" class="w-fit p-5 bg-zinc-700 text-white text-xl md:text-2xl center">
        {{ $t('start') }}
      </NuxtLink>
    </div>
  </div>
  </template>