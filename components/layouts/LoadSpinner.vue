<template>
  <div :class="$style.spinner">
    <div class="select is-loading is-medium"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadSpinner',
};
</script>

<style module lang="scss">
.spinner {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
