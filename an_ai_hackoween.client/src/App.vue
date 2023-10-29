<template>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
@import url('https://fonts.googleapis.com/css2?family=Elsie:wght@400;900&family=Montserrat:ital,wght@0,100;0,400;0,500;0,600;0,700;1,400&family=Roboto+Mono&family=Satisfy&family=Yeseva+One&display=swap');

:root{
  --main-height: calc(100vh - 32px - 64px);
}

main{
  background-image: url(../src/assets/img/grimtolTownWideLowContrast.png);
  background-size: cover;
  background-attachment: fixed;
  font-family: 'Roboto Mono', monospace;
  height: max-content;
}

.logo{
  height: 5vh;
  width: 5vw;
  object-fit: contain;
  object-position: center;
}

</style>
