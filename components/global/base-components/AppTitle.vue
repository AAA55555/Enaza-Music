<template>
  <h2
    :is="tag"
    :class="[
      $style.title,
      { [$style.h1]: size === 'h1',
        [$style.h2]: size === 'h2',
        [$style.h3]: size === 'h3',
        [$style.h4]: size === 'h4',
        [$style.h5]: size === 'h5',
        [$style.h6]: size === 'h6',
      }
    ]"
  >
    <slot />
  </h2>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    tag: {
      type: String,
      default: 'h2'
    },
    size: {
      default: 'h2',
      validator (value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" module>
.title {
  font-weight: 600;
  line-height: 1.4;
  color: $titleColor;

  &.h1 {
    font-size: 1.6rem;
    line-height: 1.3;
    @include md-plus {
      font-size: 2.4rem;
    }
  }
  &.h2 {
    font-size: 1.846rem;
  }

  &.h3 {
    font-size: 1.2rem;
    @include md-plus {
      font-size: 2rem;
    }
    @include lg-plus {
      font-size: 2.4rem;
    }
  }

  &.h4 {
    font-size: 0.75rem;
    @include md-plus {
      font-size: 0.9rem;
    }
  }

  &.h5 {
    font-size: .75rem;
    line-height: 1.5;
    @include md-plus {
      font-size: 1rem;
    }
  }

  &.h6 {
    font-size: .75rem;
    line-height: 1.5;
  }
}
</style>
