<template>
  <div class="column is-5" :class="$style.wrapper__musicControl">
    <div :class="$style.wrapper__img">
      <img v-if="currentTrack" :src="currentTrack.coverUrl" alt="logo" width="60" height="60">
    </div>
    <div :class="$style.wrapper__descriptions">
      <app-paragraph size="secondary" :class="$style.text__transform">Ozzy Osbourne, Post Malone, Trav Post Malone Post Malone...</app-paragraph>
      <app-title tag="h2" size="h4" :class="$style.text__transform">{{ currentTrack.name }}</app-title>
      <app-paragraph size="secondary" :class="$style.text__transform">3:23</app-paragraph>
    </div>
  </div>
</template>

<script>
import {normalizeMinute, normalizeSeconds} from '~/components/helpers';
import AppParagraph from '@/components/global/base-components/AppParagraph';
import AppTitle from '@/components/global/base-components/AppTitle';
export default {
  name: 'MusicControl',
  components: { AppParagraph, AppTitle },
  data() {
    return {
      seconds: normalizeSeconds(34),
      minute: normalizeMinute(34),
      currentTrack: this.getState()
    }
  },
  watch: {
    '$store.state.currentTrack': {
      immediate: true,
      handler() {
        this.currentTrack = this.$store.state.currentTrack
      }
    },
  },
  methods: {
    getState() {
      return this.$store.state.currentTrack
    }
  }
};
</script>

<style module lang="scss">
.wrapper {
  &__musicControl {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  &__img {
    margin-right: .5rem;
    min-width: 50px;
  }
  &__descriptions {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.text__transform {
  width: 100%;
  max-width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
