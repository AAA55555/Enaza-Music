<template>
  <li class="column is-4-tablet is-flex is-align-items-center">
    <div :class="[$style.wrapper__img, {[$style.hover__play]:playStatus === 'PLAY'}]" :style="`background-image: url(${coverUrl})`" @click="play">
      <img :src="require(`~/${src}`)" :alt="name" width="60" height="60"/>
    </div>
    <div :class="$style.wrapper__itemDescr">
      <div :class="$style.wrapper__descriptions">
        <app-paragraph size="secondary" :class="$style.text__transform">Lorem ipsum dolor sit amet.</app-paragraph>
        <app-title tag="h2" size="h4" :class="$style.text__transform">{{ name }}</app-title>
        <app-paragraph size="secondary" :class="$style.text__transform">{{ minute }}:{{seconds}}</app-paragraph>
      </div>
      <div :class="$style.wrapper__dot">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </li>
</template>

<script>
import {normalizeMinute, normalizeSeconds} from '@/components/helpers';
import AppTitle from '@/components/global/base-components/AppTitle';
import AppParagraph from '@/components/global/base-components/AppParagraph';

export default {
  name: 'AlbumItem',
  components: {
    AppTitle,
    AppParagraph,
  },
  props: {
    coverUrl: {
      type: String,
      required: true
    },
    trackCount: {
      type: undefined,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    playStatus: {
      type: String,
      required: true
    },
  },
  emits: ['isPlay'],
  data() {
    return {
      minute: normalizeMinute(this.trackCount),
      seconds: normalizeSeconds(this.trackCount),
      src: 'assets/images/play.svg',
      isStatus: this.playStatus,
    }
  },
  methods: {
    play() {
      this.$emit('isPlay', this.name)
      this.showFooter()
    },
    showFooter() {
      this.$store.commit('showFooter', {
        coverUrl: this.coverUrl,
        name: this.name,
        trackCount: this.trackCount
      })
    }
  }
};
</script>


<style module lang="scss">
.hover {
  &__play {
    transition: all .3s;
    &:hover {
      opacity: .8;
      cursor: pointer;
      > img {
        display: block;
      }
    }

    > img {
      display: none;
    }
  }
}
.wrapper {
  &__img {
    margin-right: .5rem;
    min-width: 50px;
    max-width: 60px;
    width: 100%;
    max-height: 60px;
    height: 100%;
    flex: 0 0 auto;
    background-size: cover;
  }
  &__itemDescr {
    display: flex;
    align-items: center;
    width: 100%;
    @include sm-plus {
      justify-content: space-between;
    }
  }
  &__descriptions {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
    padding-right: .5rem;
    @include sm-plus {
      padding-right: 0;
    }
  }
}
.text__transform {
  width: 100%;
  max-width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.wrapper__dot {
  cursor: pointer;
  span {
    border-radius: 50%;
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #D9D9D9;
  }
}
</style>

