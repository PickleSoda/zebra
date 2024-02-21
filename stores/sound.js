import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useSoundStore = defineStore('sound', () => {
    const isMuted = ref(false)
    const sound = ref('assets/sounds/sound.mp3')

    function toggleMute() {
        isMuted.value = !isMuted.value
    }

    async function playSound(id) {
        if(!isMuted.value) {

            let audio = document.getElementById(id);
            console.log(audio);
            if (!audio) return;
            audio.currentTime = 0; 
            audio.volume = 1; 
            audio.play()
            
        }
        else {
            console.log('sound is muted');
        }   
    }

    return { isMuted, sound, toggleMute, playSound }
})
