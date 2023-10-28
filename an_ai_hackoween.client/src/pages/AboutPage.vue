<template>
  <Rooms />
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from '../AppState';
import Rooms from "../components/Rooms.vue";

export default {
  setup() {

    onMounted(
      AppState.activeRoom = AppState.rooms[0]
    )
    return {

    };
  },
  components: { Rooms }
}
</script>
