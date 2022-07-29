<template>
  <div class="columns is-mobile">
    <div class="column is-8-desktop pb-0 pb__mobile_7">
      <div class="navbar-start" @click="isToggleMenu">
        <nuxt-link to="/catalog" class="navbar-item bulma-navbar-item-extend is-size-7 p-4">
          Каталог
        </nuxt-link>
        <a class="navbar-item bulma-navbar-item-extend is-size-7 p-4">
          Рекомендации
        </a>
        <a class="navbar-item bulma-navbar-item-extend is-size-7 p-4">
          Моя музыка
        </a>
        <a class="navbar-item bulma-navbar-item-extend is-size-7 p-4">
          Радио
        </a>
      </div>
    </div>

    <div class="is-hidden-touch navbar-end column is-flex is-justify-content-end is-align-items-center pb-0 icon-search__wrapper">
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1501 13.3889H14.2192L13.8955 13.0677C15.0388 11.7345 15.7341 10.0062 15.7341 8.1126C15.7341 3.90325 12.322 0.491211 8.11266 0.491211C3.90331 0.491211 0.491272 3.90325 0.491272 8.1126C0.491272 12.322 3.90331 15.734 8.11266 15.734C10.0063 15.734 11.7334 15.0399 13.0666 13.8978L13.3902 14.2191V15.1477L19.2504 20.9998L20.9987 19.2516L15.1501 13.3889ZM8.11266 13.389C5.19777 13.389 2.83632 11.0275 2.83632 8.1126C2.83632 5.19889 5.19777 2.83625 8.11266 2.83625C11.0264 2.83625 13.389 5.19889 13.389 8.1126C13.389 11.0275 11.0264 13.389 8.11266 13.389Z" fill=""/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNavList',
  emits: ['toggleMobileMenu'],
  methods: {
    isToggleMenu() {
      this.$emit('toggleMobileMenu')
    }
  }
};
</script>

<style lang="scss">
.bulma-navbar-item-extend {
  transition: .5s all;
  &:hover {
    @include md-plus {
      position: relative;
      background-color: #007AFF !important;
      color: white !important;
    }
    &:before {
      @include md-plus {
        background: white;
        position: absolute;
        content: "";
        height: 2px;
        border-radius: 2px;
        width: 75%;
        bottom: 35%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    @include md-minus {
      background-color: #e1e4e5 !important;
    }
  }
  @media screen and (max-width: 991px) {
    color: #007AFF;
  }
}

.pb__mobile_7 {
  @include md-minus {
    padding-bottom: .75rem !important;
  }
}
</style>
