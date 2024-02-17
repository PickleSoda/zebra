<template>
  <div class="w-full pt-10">
    <Header />
    <div class="absolute top-1/2 trasnform translate-y-1/2 left-1/2 trasnform -translate-x-1/2">

      <NuxtLink :to="localePath('home')" class="w-fit p-5 bg-zinc-700 text-white text-xl md:text-2xl center">
        {{ $t('start') }}
      </NuxtLink>
    </div>
  </div>
  <div class="absolute bottom-4 left-1/2 trasnform -translate-x-1/2">

  </div>
</template>