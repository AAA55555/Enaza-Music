<template>
  <header class="has-background-link is-flex is-justify-content-center">
    <nav class="navbar has-background-link container columns mb-0 is-desktop" role="navigation" aria-label="main navigation">
      <div class="navbar-brand column is-3-desktop is-flex is-justify-content-space-between is-align-items-center pb-0 is-mobile">
        <HeaderLogo />
        <HeaderMobileBlock :is-show-mobile-menu="isShowMobileMenu" @toggleMobileMenu="isShowMenu"/>
      </div>
      <div class="navbar-menu navbar-menu__mobile_position column " :class="{['is-hidden-touch']: isShowMobileMenu}">
        <HeaderNavList @toggleMobileMenu="isShowMenu"/>
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderLogo from '@/components/layouts/header/HeaderLogo';
import HeaderMobileBlock from '@/components/layouts/header/HeaderMobileBlock';
import HeaderNavList from '@/components/layouts/header/HeaderNavList';
export default {
  name: 'AppHeader',
  components: {
    HeaderLogo,
    HeaderMobileBlock,
    HeaderNavList
  },
  data() {
    return {
      isShowMobileMenu: true
    }
  },
  methods: {
    isShowMenu() {
      this.isShowMobileMenu = !this.isShowMobileMenu
    }
  }
}
</script>

<style lang="scss">
.navbar {
  @media screen and (max-width: 991px) {
    position: relative;
  }
  &-menu__mobile_position {
    @media screen and (max-width: 991px) {
      position: absolute;
      left: 0;
      right: 0;
    }
  }
}

.icon-search__wrapper {
  svg {
    fill: white;
    transition: .5s all;
    cursor: pointer;
    &:hover {
      fill: #c7dcde;
    }
  }
}
</style>
