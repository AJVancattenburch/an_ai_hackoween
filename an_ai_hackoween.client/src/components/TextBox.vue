<template>
  <div class="bg-black green-border green-color box-size">
    <p class="text-end green-background text-black fs-5 fw-semibold">
      <span class="px-2 py-1 selectable" title="See Previous">
        -
      </span>
      <span class="px-2 py-1 selectable" title="Continue">
        x
      </span>
    </p>
    <p class="p-4 min-height" id="text" onclick="typewriter('cancelled')">
      
    </p>
  </div>
</template>


<script>
import { onMounted } from 'vue';

export default {
  props: {
    text: {Type: String, required: true}
  },

  setup(props){
    var i = 0;
    var speed = 30;

    function typeWriter() {
      if (i < props.text.length) {
        document.getElementById("text").innerHTML += props.text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    onMounted(() =>{
      typeWriter();
    })
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
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
  width: 75vw;
}

.min-height{
  height: fit-content;
}
</style>