<template>
  <!-- <div class="bg-secondary text dark selectable">
<a @click="handleTextPage">AI Text testing page</a> -->
  <!-- </div> -->
  <div class="d-flex justify-content-center m-2 mt-4">
    <img src="../assets/img/castleGrimtolLogo.png" alt="Castle Grimtol" class="img-fluid big-logo">
  </div>
  <div class="ms-5">
    <AudioComponent />
  </div>
  <!-- <button class="green-background" data-bs-toggle="offcanvas" href="#sampleComponent" role="button" aria-controls="sampleComponent">
    Off Canvas Button
  </button> -->
  <div class="d-flex flex-column align-items-center mb-4">
    <TextBox :text="text" :options="options" />
    <Rooms />
  </div>
  <div class="d-flex justify-content-center align-items-center m-1 mb-4 text-white">
    <p class="m-0 fs-2">
      made with <span class="goopy-text">swag</span> by
    </p>
    <img src="../assets/img/grimCodeWorks.png" alt="CodeWorks" class="img-fluid logo">
    <span class="fs-2">alumns</span>
  </div>
</template>

<script>
import AudioComponent from '../components/AudioComponent.vue';
import TextBox from '../components/TextBox.vue';
import { useRouter } from 'vue-router';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    const router = useRouter();

    async function handleTextPage() {
      try {
        await router.push({ name: 'Prompt Page', path: '/prompt' })
      } catch (error) {
        logger.error(error);
      }
    }
    return {
      text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
      options: ["Yes", "No"]
    };
  },
  components: { TextBox, AudioComponent }
}
</script>

<style scoped lang="scss">
.green-background {
  background-color: #28ff82;
}

.goopy-text {
  font-family: 'Nosifer', sans-serif;
}
</style>
