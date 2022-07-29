<template>
  <footer :class="['main-footer']">
    <div class="container columns pl-0 pr-0">
      <MusicControl />
      <AppTrack />
    </div>
  </footer>
</template>

<script>
import MusicControl from '@/components/layouts/footer/MusicControl';
import AppTrack from '~/components/layouts/footer/AppTrack';
export default {
  name: 'AppFooter',
  components: {
    AppTrack,
    MusicControl,
  }
};
</script>
<style scoped lang="scss">
  .container {
    margin: 0 auto;
  }
  .main-footer {
    background: #F5F5F5;
  }
</style>
