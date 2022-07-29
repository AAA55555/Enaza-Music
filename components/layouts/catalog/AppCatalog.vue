<template>
  <div class="container container_padding catalog_mb mt-5">
    <app-title :class="$style.title__catalog" tag="h1" size="h1">
      Каталог
    </app-title>
    <ul class="catalog__items columns is-flex is-flex-wrap-wrap">
      <template v-for="item in album">
        <CatalogItem
          :id="item.id"
          :key="item.id"
          :name="item.name"
          :cover-url="item.coverUrl"
          :duration="item.duration"
          :track-count="item.trackCount"
        />
      </template>
    </ul>
    <LoadSpinner v-if="!isShowSpinner"/>
  </div>
</template>

<script>
import AppTitle from '@/components/global/base-components/AppTitle';
import CatalogItem from '@/components/layouts/catalog/CatalogItem';
import LoadSpinner from '@/components/layouts/LoadSpinner';
export default {
  name: 'AppCatalog',
  components: {
    AppTitle,
    CatalogItem,
    LoadSpinner
  },
  data() {
    return {
      album: this.$store.state.album,
      page: 1,
      limit: 10,
      triggerGet: false,
      albumsLength: this.album,
      isShowSpinner: false
    }
  },
  watch: {
    album(newAlbum, oldAlbum) {
      if (this.album.length === this.page*10 && oldAlbum.length === newAlbum.length) {
        this.triggerGet = false
      }
      this.isShowSpinner = true
    }
  },
  mounted() {
    this.getAlbums()
    this.getScroll()
  },
  methods: {
    getAlbums() {
      this.$store.dispatch('getAlbum', {
        start: this.page,
        end: this.limit
      })
    },
    getScroll() {
      window.addEventListener('scroll', () => {
        const scrollHeight = document.querySelector('body').scrollHeight;
        const scrollY = window.scrollY + window.innerHeight;

        if (scrollHeight === scrollY && !this.triggerGet) {
          this.isShowSpinner = false
          this.page++
          this.triggerGet = true
          this.$store.dispatch('getAlbum', {
            start: this.page,
            end: this.limit
          })
        }
      })
    }
  }
};
</script>

<style module lang="scss">
.title__catalog {
  margin-bottom: 1.4rem;
  @include md-plus {
    line-height: 140%;
    margin-top: 2px;
    margin-bottom: 1rem;
  }
}
</style>

<style lang="scss">
.container {
  &_padding {
    padding-left: .75rem;
    padding-right: .75rem;
  }
}
.catalog_mb {
  margin-bottom: 30px;
  @include md-plus {
    margin-bottom: 100px;
  }
}
</style>
