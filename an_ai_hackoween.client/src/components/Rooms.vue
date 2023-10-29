<template>
  <section class="row">
    <div class="card col-4 mx-auto">
      <div class="card-body">
        <blockquote class="blockquote d-flex flex-column mb-0">
          Name:
          <p>{{ activeRoom.name }}</p>
          Exits:
          <p v-for="(exit, index) in activeRoom.e" :key="index"> {{
            exits[index].name }}</p>
          <!-- <button v-for="(exit, index) in activeRoom.e" :key="index" @click="gotoRoom(exit)">{{ exit }} {{
            exits[index].name }}</button> -->
          Location:
          <p v-for="(location, index) in activeRoom.location" :key="index">{{ location }}</p>
          Non-Playable Characters:
          <p v-for="(npc, index) in activeRoom.npc" :key="index">{{ npc }}</p>
          <!-- <button v-for="(npc, index) in activeRoom.npc" :key="index" @click="selectNpc(npc)" data-bs-toggle="modal"
            data-bs-target="#npcModal">{{ npc }}</button> -->
          Objects of Interest:
          <p v-for="(ooi, index) in activeRoom.ooi" :key="index">{{
            ooi }}</p>
          <!-- <button v-for="(ooi, index) in activeRoom.ooi" :key="index" data-bs-toggle="modal" data-bs-target="#ooiModal"
            @click="selectOoi(ooi)">{{
              ooi }}</button> -->
          <!-- Room Type:
          <p> {{ activeRoom.kind }}</p> -->
          Description:
          <p v-for="description in activeRoom.description" :key="description">{{ description }}</p>
          <!-- Steps:
          <p v-for="step in activeRoom.steps" :key="step">{{ activeRoom.steps }}</p> -->
        </blockquote>
        <button v-if="challenge">Challenge </button>
        <form @submit.prevent="parseCommand()" class="input-group mb-3">
          <input v-model="editable" type="text" class="form-control" placeholder=""
            aria-label="Example text with button addon" aria-describedby="button-addon1">
          <button class="btn btn-outline-secondary" type="submit" id="button-addon1">Submit</button>
        </form>
      </div>
    </div>
  </section>

  <!-- NPC Modal -->
  <div class="modal fade" id="npcModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          NPC
          ID:
          <p>{{ activeNpc.id }}</p>
          Name:
          <p>{{ activeNpc.name }}</p>
          KnowsName:
          <p>{{ activeNpc.knowsName }}</p>
          Description:
          <p>{{ activeNpc.description }}</p>
          Likes:
          <p>{{ activeNpc.likes }}</p>
          Dislikes:
          <p>{{ activeNpc.dislikes }}</p>
          knowsOpinion:
          <p>{{ activeNpc.knowsOpinion }}</p>
          Portrait
          <img :src="activeNpc.portrait" :alt="activeNpc.portrait">
        </div>
      </div>
    </div>
  </div>
  <!-- ooi Modal -->
  <div class=" modal fade" id="ooiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          OOI
          ID:
          <p>{{ activeOoi.id }}</p>
          Name:
          <p>{{ activeOoi.name }}</p>
          Description:
          <p>{{ activeOoi.description }}</p>
          Type:
          <p>{{ activeOoi.type }}</p>
          Collected:
          <p>{{ activeOoi.collected }}</p>
          Icon
          <img :src="activeOoi.image" :alt="activeOoi.image">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    const editable = ref("")
    onMounted(() => {
      AppState.activeRoom = AppState.rooms[0]
    })
    return {
      editable,
      activeRoom: computed(() => AppState.activeRoom),
      activeNpc: computed(() => AppState.activeNpc),
      activeOoi: computed(() => AppState.activeOoi),
      portrait: computed(() => AppState.activeNpc.portrait),
      challenge: computed(() => AppState.puzzles.find(p => p.room == AppState.activeRoom.id)),
      exits: computed(() => {
        let tempArr = []
        for (let i = 0; i < AppState.activeRoom.e.length; i++) {
          const room = AppState.rooms.find(r => r.id == AppState.activeRoom.e[i])
          tempArr[i] = room
        }
        return tempArr
      }),
      gotoRoom(exit) {
        AppState.activeRoom = AppState.rooms.find(r => r.id == exit)
      },
      selectNpc(npc) {
        AppState.activeNpc = AppState.npcs.find(n => n.id == npc)
      },
      selectOoi(ooi) {
        AppState.activeOoi = AppState.oois.find(o => o.id == ooi)
      },
      collectOoi(index) {
        let ooi = AppState.oois.find(o => o.id == index)
        ooi.collected = true;
        logger.log(ooi, 'OOI')
      },
      parseCommand() {
        let lowerString = editable.value.toLowerCase()
        let tempArr = lowerString.split(' ')

        this.activeRoom.ooi.forEach(ooi => {
          let OOI = AppState.oois.find(o => o.id == ooi)
          logger.log('OOI', OOI)
          if (tempArr.includes(OOI.name.toLowerCase())) {
            if (tempArr.includes("collect")) {
              this.collectOoi(OOI.id)
            }
          }
        })

        this.exits.forEach(exit => {
          if (tempArr.includes(exit.name.toLowerCase())) {
            if (tempArr.includes("go")) {
              this.gotoRoom(exit.id)
            }
          }
        })


        logger.log(tempArr)
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>