<template>
<div class="bg-secondary text dark selectable">
<a @click="handleTextPage">AI Text testing page</a>
</div>
  <div class="d-flex justify-content-center m-2 mt-4">
    <img src="../assets/img/castleGrimtolLogo.png" alt="Castle Grimtol" class="img-fluid logo">
  </div>
  <div class="d-flex justify-content-center">
    <TextBox :text="text" :options="options" />
  </div>
  <div class="d-flex justify-content-center m-2 mb-4">
    <img src="../assets/img/grimCodeWorks.png" alt="Castle Grimtol" class="img-fluid logo">
  </div>
</template>

<script>
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
    components: { TextBox }
}
</script>

<style scoped lang="scss">
</style>
