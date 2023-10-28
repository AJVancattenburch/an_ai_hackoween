<template>
  <header>
  </header>
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

:root{
  --main-height: calc(100vh - 32px - 64px);
}

main{
  background-image: url(../src/assets/img/grimtolTownWideLowContrast.png);
  background-size: cover;
  background-position: top;
}
</style>
