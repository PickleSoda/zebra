import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useSoundStore = defineStore('sound', () => {
    const isMuted = ref(false)
    const sound = ref('sound-3')

    function toggleMute() {
        isMuted.value = !isMuted.value
    }

    function chooseSound(s) {
        sound.value = "sound-" + s
    }

    async function playSound() {
        if(!isMuted.value) {

            let audio = document.getElementById(sound.value);
            if (!audio) return;
            audio.currentTime = 0; 
            audio.volume = 1; 
            audio.play()
            chooseSound('3')
        }
        else {
            console.log('sound is muted');
        }   
    }


    return { isMuted, sound, toggleMute, playSound, chooseSound}
})
