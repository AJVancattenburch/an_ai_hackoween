<template>
    <section class="container-fluid">
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Prompt</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="editable.prompt">
        <button class="btn btn-outline-success" type="button" id="button-addon1" @click="createPrompt">Button</button>
      </div>
    </section>
</template>
  
<script>
import { computed, onMounted, ref, watchEffect } from 'vue'
import { AppState } from '../AppState'
import Pop from "../utils/Pop.js"
import { logger } from "../utils/Logger.js"
import { promptsService } from '../services/PromptsService.js'

export default {
  components: {

  },
  setup() {
    const editable = ref({
      prompt: ['']
    })

    watchEffect(() => {
      
    })

    async function createPrompt() {
      try {
        await promptsService.createPrompt()
      } catch (error) {
        logger.error(error)
      }
    }

    return {
      editable,
      createPrompt
    } 
  }
}
</script>

<style scoped lang="scss">

</style>