<template>
  <div>
    <button class="green-background" @click="toggleAudio()">
      <i class="mdi mdi-volume-high" v-if="playing"></i>
      <i class="mdi mdi-volume-off" v-else></i>
    </button>
    <audio src="/assets/music/Cinematic Horror/Hidden_Horror_122bpm_120s.mp3" id="musicPlayer"></audio>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { logger } from '../utils/Logger.js';

export default {
  setup(){

    let playing = ref(false)

    function toggleAudio(){
        let audio = document.getElementById("musicPlayer");
        if(!playing.value){
          audio.play();
          audio.loop = true
          playing.value = true;
          logger.log(playing)
        } else{
          audio.pause();
          playing.value = false;
          logger.log(playing)
        }
      }

    onMounted(() => {
      setTimeout(toggleAudio, 25000)
    })

    return {
      playing,

      toggleAudio
    }
  }
}
</script>


<style lang="scss" scoped>
.green-background{
  background-color: #28ff82;
}
</style>