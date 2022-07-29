<template>
  <p
    :is="tag"
    class="v_paragraph"
    :class="[
      $style.paragraph,
      {
        [$style.primary]: size === 'primary',
        [$style.secondary]: size === 'secondary',
        [$style.big]: size === 'big',
        [$style.description]: size === 'description',
        [$style.small]: size === 'small',
      }
    ]"
  >
    <slot />
  </p>
</template>

<script>
export default {
  name: 'AppParagraph',
  props: {
    tag: {
      type: String,
      default: 'p'
    },
    size: {
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'big', 'description', 'small'].includes(value);
      }
    }
  }
};
</script>

<style lang="scss" module>
.paragraph {
  color: $textGrey;
  font-weight: normal;

  &.primary {
    font-size: .75rem;
    @include md-plus {
      font-size: 1rem;
    }
  }

  &.secondary {
    font-size: 0.75rem;
    @include md-plus {
      font-size: 0.9rem;
    }
  }

  &.big {
    font-size: 1.23rem;
    @include sm-plus {
      font-size: 1.357rem;
    }
    @include lg-plus {
      font-size: 1.75rem;
    }
  }

  &.description {
    font-size: 0.875rem;
  }

  &.small {
    font-size: .5rem;
    @include md-plus {
      font-size: 1rem;
    }
  }
}
</style>
