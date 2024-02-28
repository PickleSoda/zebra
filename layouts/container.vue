
<template>
  <div>
    <div class="relative top-1/2  w-full z-10 mx-auto max-w-5xl bg-zebraBackground  md:pt-10 ">
      <div class="mx-8 p-2 md:p-8 border-[6px] border-[#636363] bg-[#373737] border-opacity-80 rounded-sm shadow-inner shadow-black">
        <slot />
      </div>
    </div>
    <div class="relative -bottom-40 transform translate-y-1/2 z-10 px-8 w-full max-w-5xl">
      <slot name="footer" />
    </div>
  </div>
</template>
