<script setup>
// You might choose this based on an API call or logged-in status
import emailjs from '@emailjs/browser';
// const layout = "container";
emailjs.init('SgCbnTmwr0L3R86JM');

const modal = ref(false);

const toggleModal = () => {
  modal.value = !modal.value;
};

const contactForm = ref({
  from_name: "",
  to_name: "zebra",
  subject: "",
  message: "",
});

const contactFormForMail = ref(null);

const isEmpty = computed(() => {
  return  !contactForm.value.from_name || !contactForm.value.subject || !contactForm.value.message;
});

const isSending = ref(false);

const sendToZebra = () => {
  playSound("sound-4");
  isSending.value = true;
  console.log("Sending to Zebra", contactFormForMail.value);
  emailjs.sendForm('service_xeg8iiz', 'template_6eu3wte', contactFormForMail.value)
    .then((result) => {
      toggleModal();
      isSending.value = false;
      console.log('Email sent successfully', result.text);
    }, (error) => {
      isSending.value = false;
      console.log('Email failed to send', error.text);
    });
};

const SoundStore = useSoundStore();
const { playSound } = SoundStore; 
const handleButtonClick = () => {
  playSound("sound-3");
};
</script>

<template>
  <div>
    <div class="pt-10 pl-10 text-white">
      <NuxtLink
      @click.prevent="handleButtonClick"
        :to="localePath('/home')"
        class="w-fit p-5 bg-zinc-700 text-white text-xl md:text-2xl"
      >
        {{ $t('home') }}
      </NuxtLink>
    </div>
    <div class="relaative top-1/2 pt-10 w-full z-10 mx-auto max-w-5xl bg-zebraBackground pb-10">
      <div class="mx-8 p-2 md:p-8 border-2 border-zebraBorder border-opacity-80 bg-[#333232] rounded-sm">
        <h1 class="text-5xl text-white text-center pb-6 font-bold text-stroke">
          {{ $t('contact') }}
        </h1>
        <form
          ref="contactFormForMail"
          class="flex flex-col gap-3"
          @submit.prevent="sendToZebra"
        >
          <input
            v-model="contactForm.from_name"
            type="text"
            class="bg-zebraBackground border-2 border-zebraBorder p-2 text-[#F2A0CD]"
            placeholder="email"
          >
          <input
            v-model="contactForm.subject"
            type="text"
            class="bg-zebraBackground border-2 border-zebraBorder  p-2 text-[#F2A0CD]"
            placeholder="subject"
          >
          <textarea
            v-model="contactForm.message"
            cols="30"
            rows="8"
            class="bg-zebraBackground border-2 border-zebraBorder  p-2 text-[#F2A0CD]"
            placeholder="message"
          />
          <div class="flex flex-1 grow w-full justify-even items-center flex-nowrap gap-4">
            <div>
              <button
              type="submit"
              class="py-2 px-4 rounded-md bg-zinc-700 text-white font-bold"
              :disabled="modal || isSending || isEmpty"
              >
              {{ $t('sendToZebra') }}
            </button>
          </div>
            <div>

              <button
              type="submit"
              class="py-2 px-4 rounded-md bg-zinc-700 text-white font-bold"
              :disabled="modal || isSending || isEmpty"
              >
              {{ $t('sendToSupport') }}
            </button>
          </div>
          </div>
        </form>
      </div>
      <div v-if="modal" class="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-sm bg-[#737373] p-4 sm:p-10 min-w-fit" >

        <h3 class="text-lg sm:text-2xl text-stroke text-white font-extrabold">MESSAGE SENT TO ZEBRA</h3>
          <div class="mx-auto w-min">

            <button @click.prevent="toggleModal" class="text-[#F2A0CD] text-2xl font-bold text-stroke mx-auto">
              OK
            </button>
          </div>
  
      </div>
    </div>
    <div class="relative transform translate-y-1/2 z-10 px-8 w-full max-w-5xl">

      <zebra-footer />
    </div>
  </div>
</template>

<style scoped>

.text-stroke {
  -webkit-text-stroke: 1px black;
}

</style>