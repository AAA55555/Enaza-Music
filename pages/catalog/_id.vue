<template>
  <div class="container pl-0 pr-0 mb-6 mt-5">
    <LoadSpinner v-if="collectionTrack.length === 0 && collectionAlbum.length === 0" />
    <template v-else>
      <AlbumName
        class="mb-4"
        :name="collectionAlbum.name"
        :cover-url="collectionAlbum.coverUrl"
        :track-count="collectionAlbum.trackCount"
      />
      <ul class="columns is-flex is-flex-wrap-wrap" :class="$style.items">
        <template v-for="track in collectionTrack">
          <AlbumItem
            :id="id"
            :key="track.id"
            :name="track.name"
            :cover-url="track.coverUrl"
            :track-count="track.duration"
            :play-status="playStatus"
            @isPlay="playTrack($event)"
          />
        </template>
      </ul>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import { tracks } from '~/components/constants';
import AlbumName from '~/components/layouts/album/AlbumName';
import AlbumItem from '@/components/layouts/album/AlbumItem';
import LoadSpinner from '~/components/layouts/LoadSpinner';

if (process.browser) {
  const { soundManager } = require('soundmanager2');
  Vue.use(soundManager);
}
export default {
  name: 'ItemAlbum',
  components: {
    AlbumItem,
    AlbumName,
    LoadSpinner
  },
  data() {
    return {
      id: this.$route.params.id,
      collectionAlbum: '',
      collectionTrack: [],
      playStatus: 'PLAY',
      currentTrack: '',
      tempIdTrack: '',
      pauseBtn: false,
      currentIdTrack: '',
      urlTrack: '',
      triggerUrl: true,
      isStatusStop: false
    };
  },
  head() {
    return {
      title: this.collectionAlbum.name
    };
  },
  watch: {
    tempIdTrack(newId, oldId) {
      this.setTrack();
    }
  },
  mounted() {
    this.getItemAlbum();
    this.setTrack();
  },
  methods: {
    setTrack() {
      if (this.triggerUrl) {
        this.urlTrack = tracks[0];
      } else {
        this.urlTrack = tracks[1];
      }
    },
    mySound(id) {
      // eslint-disable-next-line no-undef
      return soundManager.createSound({
        id,
        url: this.urlTrack,
        volume: 35
      });
    },
    playTrack(idTrack) {
      this.currentIdTrack = idTrack;
      switch (true) {
        case (this.tempIdTrack === idTrack && !this.pauseBtn):
          this.pause(idTrack);
          this.pauseBtn = true;
          break;
        case (this.tempIdTrack === idTrack && this.pauseBtn):
          this.resume(idTrack);
          this.pauseBtn = false;
          break;
        case (this.tempIdTrack !== idTrack && !this.isStatusStop):
          this.stop();
          this.tempIdTrack = idTrack;
          this.triggerUrl = !this.triggerUrl;
          this.mySound(idTrack).play();
          this.pauseBtn = false;
          break;
      }
    },
    stop() {
      // eslint-disable-next-line no-undef
      soundManager.stopAll();
    },
    pause(idTrack) {
      // eslint-disable-next-line no-undef
      soundManager.pause(idTrack);
    },
    resume(idTrack) {
      // eslint-disable-next-line no-undef
      soundManager.resume(idTrack);
    },
    async getItemAlbum() {
      try {
        const { data } = await axios.get(`https://api.mobimusic.kz/?method=product.getCard&productId=${this.id}`);
        this.collectionAlbum = Object.values(data.collection.album)[0];
        this.collectionTrack = Object.values(Object.values(data.collection)[2]);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
  }
};
</script>

<style module lang="scss">
.items {
  padding-left: .75rem;
  padding-right: .75rem;
}
</style>
