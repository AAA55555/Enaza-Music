<template>
  <li v-if="id" class="is-3-tablet is-6-mobile column">
    <nuxt-link :to="routeItem" :class="$style.catalog__item">
      <div :class="$style.catalog__image">
        <nuxt-img :src="coverUrl" height="268" :alt="name"/>
      </div>
      <div :class="$style.catalog__content">
        <app-title tag="h2" size="h5" :class="$style.text__transform">{{ name }}<span>•</span> 2019</app-title>
        <app-text :class="$style.text__transform">Marley Gouse</app-text>
        <div :class="$style.catalog__amount">
          <app-text size="small" :class="[$style.amount, $style.amount__track]">Треков: {{ trackCount }}</app-text>
          <app-text size="small" :class="$style.amount__listen">Прослушано: {{ duration }}</app-text>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
import AppTitle from '@/components/global/base-components/AppTitle';
import AppParagraph from '@/components/global/base-components/AppParagraph';
export default {
  name: 'CatalogItem',
  components: {
    AppTitle,
    AppText: AppParagraph,
  },
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    coverUrl: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    trackCount: {
      type: Number,
      required: true
    },
  },
  data: () => ({
    routeItem: ''
  }),
  mounted() {
    this.routeItem = `${this.$route.path}/${this.id}`
  },
};
</script>

<style module lang="scss">
.catalog {
  &__item {
    transition: all .3s;
    &:hover {
      opacity: 0.8;
    }
  }
  &__image {
    width: 100%;
    img {
      width: 100%;
    }
  }
  &__content {
    margin-top: .5rem;
    @include md-plus {
      margin-top: .75rem;
    }
  }
  &__img {
    height: 278px;
    width: 278px;
  }
  &__amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5px;
    @include md-plus {
      margin-top: 10px;
    }
  }
}
.amount {
  &__track {
    margin-right: 7px;
    @include md-plus {
      width: 100%;
      margin-right: 0;
    }
  }

  &__listen {
    text-align: end;
    @include md-plus {
      display: none;
    }
  }
}
.text__transform {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
