<script setup>
// You might choose this based on an API call or logged-in status
import emailjs from '@emailjs/browser';
// const layout = "container";
emailjs.init('SgCbnTmwr0L3R86JM');

const contactForm = ref({
  from_name: "",
  to_name: "zebra",
  subject: "",
  message: "",
});

const sendToZebra = () => {
  console.log("Sending to Zebra", contactForm.value);
  emailjs.sendForm('service_xeg8iiz', 'template_6eu3wte', contactForm.value)
    .then((result) => {
      console.log('Email sent successfully', result.text);
    }, (error) => {
      console.log('Email failed to send', error.text);
    });
};
</script>

<template>
  <div>
    <div class="pt-10 pl-10 text-white">
      <NuxtLink
        :to="localePath('/home')"
        class="w-fit p-5 bg-zinc-700 text-white text-xl md:text-2xl"
      >
        {{ $t('home') }}
      </NuxtLink>
    </div>
    <div class="absolut top-1/2 pt-10 w-full z-10 mx-auto max-w-5xl bg-zebraBackground pb-10">
      <div class="mx-8 p-2 md:p-8 border-2 border-zebraBorder border-opacity-80 rounded-sm">
        <h1 class="text-5xl text-white text-center pb-6 ">
          {{ $t('contact') }}
        </h1>
        <form
          ref="contactForm"
          class="flex flex-col gap-3"
          @submit.prevent="sendToZebra"
        >
          <input
            v-model="contactForm.from_name"
            type="text"
            class="bg-zebraBackground border-2 border-zebraBorder p-2 text-white"
            placeholder="email"
          >
          <input
            v-model="contactForm.subject"
            type="text"
            class="bg-zebraBackground border-2 border-zebraBorder  p-2 text-white"
            placeholder="subject"
          >
          <textarea
            v-model="contactForm.message"
            name="message"
            cols="30"
            rows="8"
            class="bg-zebraBackground border-2 border-zebraBorder  p-2 text-white w-full"
            placeholder="message"
          />
          <button
            type="submit"
            class="p-2 border-zebraBorder border-opacity-20 rounded-sm text-white border-2  mb-10 md:mb-0 bg-zebraBackground"
          >
            {{ $t('sendToZebra') }}
          </button>
        </form>
      </div>
    </div>
    <div class="relative transform translate-y-1/2 z-10 px-8 w-full max-w-5xl">
      <div class="flex flex-nowrap items-center justify-between">
        <button
          class="p-2 border-zebraBorder border-opacity-20 rounded-sm text-white border-2  mb-10 md:mb-0 bg-zebraBackground"
          @click.prevent="sendToZebra"
        >
          {{ $t('sendToZebra') }}
        </button>
        <button
          class="p-2 border-zebraBorder border-opacity-20 rounded-sm text-white border-2  mb-10 md:mb-0 bg-zebraBackground"
        >
          {{
            $t('sendToSupport') }}
        </button>
      </div>
      <zebra-footer />
    </div>
  </div>
</template>