<template>
  <div class="bg-black green-border green-color box-size my-5">
    <p class="text-end green-background text-black fs-5">
      <span class="px-2 py-1 selectable" title="See Previous">
        <i class="mdi mdi-window-minimize"></i>
      </span>
      <span class="px-2 py-1 selectable" title="Continue">
        <i class="mdi mdi-close-thick"></i>
      </span>
    </p>
    <p class="p-4 min-height user-select-none" id="text">
      
    </p>
    <p class="text-center">
      <span class="selectable p-2 px-4" v-for="option in options" :key="option">
        {{ option }}
      </span>
    </p>
  </div>
</template>


<script>
import { onMounted } from 'vue';

export default {
  props: {
    text: {Type: String, required: true},
    options: {Type: Array, required: true}
  },

  setup(props){
    let i = 0;
    const speed = 5;

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
  width: 90vw;
  height: fit-content;
}

@media(min-width: 768px){
  .box-size{
    width: 50vw;
    height: fit-content;
  }
}
</style>