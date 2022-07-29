<template>
  <div class="is-flex is-hidden-desktop is-justify-content-flex-end is-align-items-center">
    <div class="p-2 icon-search__wrapper pr-5">
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1501 13.3889H14.2192L13.8955 13.0677C15.0388 11.7345 15.7341 10.0062 15.7341 8.1126C15.7341 3.90325 12.322 0.491211 8.11266 0.491211C3.90331 0.491211 0.491272 3.90325 0.491272 8.1126C0.491272 12.322 3.90331 15.734 8.11266 15.734C10.0063 15.734 11.7334 15.0399 13.0666 13.8978L13.3902 14.2191V15.1477L19.2504 20.9998L20.9987 19.2516L15.1501 13.3889ZM8.11266 13.389C5.19777 13.389 2.83632 11.0275 2.83632 8.1126C2.83632 5.19889 5.19777 2.83625 8.11266 2.83625C11.0264 2.83625 13.389 5.19889 13.389 8.1126C13.389 11.0275 11.0264 13.389 8.11266 13.389Z" fill="white"/>
      </svg>
    </div>
    <a role="button" class="navbar-burger bulma-navbar-burger-extend" aria-label="menu" aria-expanded="false" :class="{['is-active']: !isShowMenu}" @click="toggleMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HeaderMobileBlock',
  props: {
    isShowMobileMenu: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  emits: ['toggleMobileMenu'],
  data() {
    return {
      test: this.isShowMobileMenu,
      isShowMenu: this.isShowMobileMenu
    }
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu
      this.$emit('toggleMobileMenu')
    }
  }
};
</script>

<style lang="scss">
  .bulma-navbar-burger-extend {
    @media screen and (max-width: 991px) {
      width: 24px !important;
      height: 24px !important;
      padding-left: .75rem !important;
    }
  }
</style>
