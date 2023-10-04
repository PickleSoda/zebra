<script setup>
// You might choose this based on an API call or logged-in status
const layout = "container";
</script>

<template>

<div class="pt-10 pl-10 text-white">
    <NuxtLink :to="localePath('/home')" class="w-fit p-5 bg-zinc-700 text-white text-xl md:text-2xl">
            {{$t('home')}}    
            </NuxtLink>
            </div>
        <div class="absolut top-1/2 pt-10 w-full z-10 mx-auto max-w-5xl bg-zebraBackground pb-10">
            <div class="mx-8 p-2 md:p-8 border-2 border-zebraBorder border-opacity-80 rounded-sm">
                <h1 class="text-5xl text-white text-center pb-6 ">
            contact
        </h1>
        <div class="flex flex-col gap-3">
            <input type="text" class="bg-zebraBackground border-2 border-zebraBorder p-2 text-white" placeholder="email">
            <input type="text" class="bg-zebraBackground border-2 border-zebraBorder  p-2 text-white" placeholder="subject">
            <textarea name="message" cols="30" rows="8" class="bg-zebraBackground border-2 border-zebraBorder  p-2 text-white" placeholder="message"></textarea>
        </div>
            </div>
            
</div>
<div class="relative transform translate-y-1/2 z-10 px-8 w-full max-w-5xl">
    <div class="flex flex-nowrap items-center justify-between">
            
            <button  class="p-2 border-zebraBorder border-opacity-20 rounded-sm text-white border-2  mb-10 md:mb-0 bg-zebraBackground">{{$t('sendToZebra')}}</button>
            <button  class="p-2 border-zebraBorder border-opacity-20 rounded-sm text-white border-2  mb-10 md:mb-0 bg-zebraBackground">{{$t('sendToSupport')}}</button>
          </div>
          <zebra-footer/>
</div>

</template>