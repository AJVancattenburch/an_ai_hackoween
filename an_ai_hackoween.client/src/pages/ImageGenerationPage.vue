<template>
    <section class="container-fluid m-3">
        <div class="row justify-content-center">
            <div class="col-md-4 bg-dark p-3 rounded-3">
                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Prompt</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="editable.prompt">
                    <button class="btn btn-outline-success" type="button" id="button-addon1" @click="generateImage">Button</button>
                </div>
                <div class="bg-light rounded-3 w-100" id="imageFrame" style="">
                    <h1 class="text-center" v-if="!image.src">Waiting For Image...</h1>
                    <img :src="image.src" class="img-fluid object-fit-cover rounded-3" v-if="image">
                </div>
            </div>
        </div>
    </section>
    <section>
        <p class="text-white">
            <Puzzle v-for="p in AppState.puzzles" :puzzle="p" :key="p"/>
        </p>
    </section>
</template>
  
<script>
  import { computed, onMounted, ref, watchEffect } from 'vue'
  import { AppState } from '../AppState'
  import Pop from "../utils/Pop.js"
  import { logger } from "../utils/Logger.js"  
  import { imageservice } from '../services/ImageService'
    import Puzzle from '../components/Puzzle.vue'
  
  export default {
    components: {
    Puzzle
},
    setup() {
      const editable = ref({})
      let image = ref({})
      watchEffect(() => {
        image = AppState.image
      })
      onMounted(() => {

      })
      async function generateImage(){
        try{
            const prompt = editable.value.prompt
            logger.log("Generating prompt:", prompt)
            await imageservice.generateImage(prompt)
        } catch (e){
            Pop.error(e)
        }
      }
      return {
        editable,
        image,
        AppState,
        generateImage
      } 
    }
  }
  </script>
  
  <style scoped lang="scss">
  
  </style>