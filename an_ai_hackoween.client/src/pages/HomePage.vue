<template>
  <div>
    <div class="d-flex justify-content-center box-height">
      <TextBox :text="text" :options="options" />
    </div>
  </div>
  <div class="card text-dark bg-dark bg-primary" style="height: 400px; width: 400px;">
    <div class="card-body">
      <h4 class="card-title">Title</h4>
      <p class="card-text">Text</p>
    </div>
  </div>
</template>

<script>
import TextBox from '../components/TextBox.vue';

export default {
    setup() {
        return {
          text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
          options: ["Yes", "No"]
        };
    },
    components: { TextBox }
}
</script>

<style scoped lang="scss">
.box-height{
  height: 80vh;
}
</style>
