<template>
  <section class="row">
    <div class="card col-4 mx-auto">
      <div class="card-header">
        Room
      </div>
      <div class="card-body">
        <blockquote class="blockquote d-flex flex-column mb-0">
          Name:
          <p>{{ activeRoom.name }}</p>
          Exits:
          <button v-for="exit in activeRoom.e" :key="exit" @click="gotoRoom(exit)">{{ exit }}</button>
          Location:
          <p v-for="location in activeRoom.location" :key="location">{{ location }}</p>
          Non-Playable Characters:
          <button v-for="npc in activeRoom.npc" :key="npc">{{ npc }}</button>
          Objects of Interest:
          <button v-for="ooi in activeRoom.ooi" :key="ooi">{{ ooi }}</button>
          Room Type:
          <p> {{ activeRoom.kind }}</p>
          Description:
          <p v-for="description in activeRoom.description" :key="description">{{ description }}</p>
          Steps:
          <p v-for="exit in activeRoom.e" :key="exit">{{ activeRoom.steps }}</p>
        </blockquote>
      </div>
    </div>
  </section>
</template>


<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    onMounted(
      AppState.activeRoom = AppState.rooms[0]
    )
    return {
      activeRoom: computed(() => AppState.activeRoom),
      gotoRoom(exit) {
        logger.log('exit', AppState.activeRoom)
        AppState.activeRoom = AppState.rooms.find(r => r.id == exit)
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>