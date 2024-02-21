
import emailjs from '@emailjs/browser';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin({
    name: 'emailjs',
    enforce: 'pre',
    async setup(nuxtApp) {
        emailjs.init('SgCbnTmwr0L3R86JM');
        nuxtApp.emailjs = emailjs;
    },
    hooks: {
        'app:created'() {
            // const nuxtApp = useNuxtApp();
            emailjs.init('SgCbnTmwr0L3R86JM');

            // do something in the hook
        }
    },
    env: {
        islands: true
    }
});
