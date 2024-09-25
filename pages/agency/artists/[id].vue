<script setup>

const route= useRoute()
const { locale } = useI18n()

const artist = route.params.id;

console.log("artist",artist, locale.value);

const { data } = await useAsyncData('privacyPolicy', () => queryContent(locale.value, 'agency/artists', artist).findOne()) 
</script>

<template>
  <div>
    <div class="pt-10 pl-10 text-white">
      <NuxtLink
        :to="localePath('/agency/artists')"
        class="w-fit p-5 border-zebraBorder border-2 text-white text-xl md:text-2xl"
      >
        {{ $t('back') }}
      </NuxtLink>
    </div>
    <div class="mx-auto w-full bg-zebraBackground py-10">
      <ArtistContentRenderer
        v-if="data"
        :data="data"
      />
    </div>
  </div>
</template>
