<template>
  <div>
    <button class="green-background" @click="toggleAudio()" v-if="playing">
      <i class="mdi mdi-volume-high"></i>
    </button>
    <button class="green-background" @click="toggleAudio()" v-else>
      <i class="mdi mdi-volume-off"></i>
    </button>
    <audio src="/assets/music/Survival_Horror_Music_Pack_vol_01/BGM_M4A/Town_-_Unsafe_Haven.m4a" id="musicPlayer"></audio>
  </div>
</template>

<script>
import { logger } from '../utils/Logger.js';



export default {
  setup(){

    let playing = false

    return {
      playing,

      toggleAudio(){
        let audio = document.getElementById("musicPlayer");
        if(!playing){
          audio.play();
          playing = true;
          logger.log(playing)
        } else{
          audio.pause();
          playing = false;
          logger.log(playing)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.green-background{
  background-color: #28ff82;
}
</style>