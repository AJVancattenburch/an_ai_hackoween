<template>
    <section class="container-fluid bg-black green-border green-color box-size my-5">
        <div class="bg-black p-2">
            <p>{{ puzzle.description }}</p>
            <h4>{{ puzzle.example }}</h4>
            <h4>{{ puzzle.question }}</h4>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Answer</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="puzzle.attempt">
                <button class="btn btn-success" type="button" id="button-addon1" @click="generateImage">Check</button>
            </div>
        </div>
    </section>
</template>
  
<script>
  import { computed, onMounted } from 'vue'
  import { AppState } from '../AppState'
  import Pop from "../utils/Pop.js"
  import { logger } from "../utils/Logger.js"  
  
  export default {
    props: {
        puzzle: { Type: Object, required: true }
    },
    components: {

    },
    setup() {

      onMounted(() => {

      })
      return {

      } 
    }
  }
  </script>
  
  <style scoped lang="scss">
    .green-border{
    border: 3px solid #28ff82;
    }

    .green-color{
    color: #28ff82;
    }

    .green-background{
    background-color: #28ff82;
    }

    .box-size{
    width: 90vw;
    height: fit-content;
    }

  </style>