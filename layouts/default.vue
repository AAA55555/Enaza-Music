<template>
  <div class="wrapper">
    <div class="wrapper__content">
      <AppHeader />
      <Nuxt />
    </div>
    <AppFooter v-if="$store.state.isShowFooter" class="footer_bottom"/>
  </div>
</template>

<script>
import AppHeader from '@/components/layouts/header/AppHeader';
import AppFooter from '@/components/layouts/footer/AppFooter';
export default {
  name: 'ItemDefault',
  components: {
    AppHeader,
    AppFooter
  },
}
</script>
<style scoped lang="scss">
.wrapper {
  &__content {
    min-height: calc(100vh - 93px);
  }
}
.footer_bottom {
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 93px;
}
</style>
<style>
html, body, #__nuxt, #__layout {
  height: 100%;
}
</style>
