<template>
  <Rooms />
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from '../AppState';
import Rooms from "../components/Rooms.vue";

export default {
  setup() {


    return {

    };
  },
  components: { Rooms }
}
</script>
