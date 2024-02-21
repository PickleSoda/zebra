<script setup>
// You might choose this based on an API call or logged-in status
const layout = "layoutTvz";
</script>

<template>
  <nuxt-link :to="localePath('/')">
    <NuxtLayout
      :name="layout"
      image="url('https://s3-alpha-sig.figma.com/img/cc67/8002/f7a6ab1f5ccc602fdac6480e5d773f07?Expires=1696809600&Signature=RTMtoVuebXGJX08dzF5UkxEOibCGlUPjzfqubOUJT96-id6k1h4yUZYnPCC8D9tLKTES0YBBIrZp3hVTV63hFTfxcT9MKO37k-CuzYeg-53~avQGiHFFELfthubwvS593Exde~54LjW25MOc6nCivcnept03nPdZ-uO~97JH0lmT3kB-7M-8-1IO97ouKKH5gU8mx7vIsmfzxIDs-qrzFVcNe4ixeFCUMlFwLqoeMlqlOW-GaVkwjgBvXFQ4air5Rocytfj-ywDu1IM3gcVxH7QKVrnxh~Ho25t6bf~6honvkJK0TLCIIuWF8w0IUV7CBqXX5kraLiFQ1mrZZ2A3aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
    >
      <div class="w-full flex flex-col justify-center items-center gap-5 md:gap-10 h-60 md:h-96">
        <h1 class="text-white font-bold text-xl md:text-3xl sm:pt-5 md:pt-10">
          comming soon ...
        </h1>
      </div>
    </NuxtLayout>
  </nuxt-link>
</template>