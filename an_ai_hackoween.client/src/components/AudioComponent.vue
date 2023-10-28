<template>
  <div>
    <button class="green-background" onclick="toggleAudio()" v-if="playing">
      <i class="mdi mdi-volume-high"></i>
    </button>
    <button class="green-background" onclick="toggleAudio()" v-else>
      <i class="mdi mdi-volume-off"></i>
    </button>
    <audio src="../assets/music/Survival_Horror_Music_Pack_vol_01/BGM_M4A/Town_-_Creepy_Place.m4a" id="musicPlayer"></audio>
  </div>
</template>

<script>

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
        } else{
          audio.pause();
          playing = false;
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