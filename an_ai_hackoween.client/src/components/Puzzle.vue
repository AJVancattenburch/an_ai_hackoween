<template>
  <section class="container-fluid bg-black green-border green-color box-size my-5">
    <div class="bg-black p-2">
      <div class="row justify-content-center">
        <img class="img-fluid object-fit-cover rounded-3 mb-3" :src="puzzle.image">
      </div>
      <button class="btn btn-success" @click="generateImage(puzzle.description)">Generate Image</button>
      <p>{{ puzzle.description }}</p>
      <h4>{{ puzzle.example }}</h4>
      <h4>{{ puzzle.question }}</h4>
      <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Answer</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="input">
          <button class="btn btn-success" type="button" id="button-addon1" @click="checkAnswer()">Check</button>
      </div>
      <div>
        <p class="text-danger" v-if="puzzle.correct == false">
          Your answer is not correct!
        </p>
        <p class="green-color" v-if="puzzle.correct">
          Great job!
        </p>
      </div>
    </div>
  </section>
    <section class="container-fluid bg-black green-border green-color box-size my-5">
        <div class="bg-black p-2">
            <div class="row justify-content-center p-3">
                <img class="img-fluid object-fit-cover green-border" :src="puzzle.image" v-if="puzzle.image">
            </div>
            <button class="btn green-border text-white mb-3" @click="generateImage(puzzle.description)">Generate Image</button>
            <p>{{ puzzle.description }}</p>
            <p>Example: {{ puzzle.example }}</p>
            <h4 class="mb-3">{{ puzzle.question }}</h4>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Answer</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="input">
                <button class="btn btn-success" type="button" id="button-addon1" @click="checkAnswer()">Check</button>
            </div>
            <div>
              <p class="text-danger" v-if="puzzle.correct == false">
                Your answer is not correct!
              </p>
              <p class="green-color" v-if="puzzle.correct">
                Great job!
              </p>
            </div>
        </div>
    </section>
</template>
  
<script>
  import { onMounted, ref} from 'vue'
  import Pop from "../utils/Pop.js"
  import { logger } from "../utils/Logger.js"  
  import { imageservice } from '../services/ImageService'
  
  export default {
    props: {
        puzzle: { Type: Object, required: true }
    },
    components: {

    },
    setup(props) {
      let image = ref({})
      let input = ref('')
      onMounted(() => {
        // generateImage()
      })
      async function generateImage(prompt){
        try{
            // const prompt = puzzle.description
            logger.log("Generating prompt:", prompt)
            // await imageservice.generateImage(prompt)
            props.puzzle.image =  await imageservice.generateImage(prompt)
            props.puzzle.image = `data:image/png;base64, ${props.puzzle.image}`
        } catch (e){
            Pop.error(e)
        }
      }
      return {
        image,
        input,
        generateImage,
        checkAnswer(){
          let userAnswer = input.value

          if(userAnswer === props.puzzle.answer){
            props.puzzle.correct = true;
          } else{
            props.puzzle.correct = false
          }
        }
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