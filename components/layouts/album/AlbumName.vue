<template>
  <div class="column" :class="$style.album__description">
    <div class="columns is-flex-tablet">
      <div class="column is-3-tablet is-8-mobile" :class="$style.catalog__image">
        <nuxt-img :src="coverUrl" height="268" :alt="name"/>
      </div>
      <div class="column" :class="$style.catalog__content">
        <app-title tag="h1" size="h3" :class="$style.isDesktopTitle">{{ name }}</app-title>
        <app-title tag="h1" size="h3" :class="$style.isMobileTitle">{{ name }} <span>•</span> 2019</app-title>
        <app-text :class="$style.subtitle">Tatiana Culhane</app-text>
        <app-text :class="[$style.amount, $style.amount__track]">Треков: {{ trackCount }}</app-text>
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from '@/components/global/base-components/AppTitle';
import AppParagraph from '@/components/global/base-components/AppParagraph';
export default {
  name: 'AlbumHeader',
  components: {
    AppTitle,
    AppText: AppParagraph
  },
  props: {
    coverUrl: {
      type: String,
      required: true
    },
    trackCount: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style module lang="scss">
.isDesktopTitle {
  display: none;
  @include sm-plus {
    display: block;
  }
}
.isMobileTitle {
  display: block;
  @include sm-plus {
    display: none;
  }
}
.catalog {
  &__image {
    width: 100%;
    @include sm-minus {
      margin: 0 auto;
    }
    @include sm-plus {
      margin-right: 25px;
    }
    img {
      width: 100%;
    }
  }
  &__content {
    @include sm-minus {
      padding-top: 5px;
    }
  }
  &__img {
    height: 278px;
    width: 278px;
  }
}
.subtitle {
  color: #4F4F4F;
}
.amount {
  &__track {
    @include md-plus {
      width: 100%;
      margin-right: 0;
    }
  }
}
</style>
