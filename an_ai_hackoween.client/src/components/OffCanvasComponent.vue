<template>
<div class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="offCanvasComponent">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offCanvas">
      <slot name="title"></slot>
    </h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <slot name="body"></slot>
  </div>
</div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>