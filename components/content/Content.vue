<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="c-content" v-html="data" />
</template>

<script>
export default {
  name: 'Content',
  props: {
    data: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '@/assets/css/settings/_settings.breakpoints.pcss';

.c-content {
  &::v-deep {
    h1,
    h2,
    h3,
    h4 {
      line-height: var(--lineHeights-shorter);
      font-weight: var(--fontWeights-extrabold);
      font-family: var(--fonts-heading);

      &:first-child {
        margin-top: 0;
      }
    }

    h1 {
      font-size: var(--fontSizes-2xl);
      margin-top: var(--space-16);
      margin-bottom: var(--sizes-6);

      @media screen and (min-width: breakpoint-md) {
        font-size: var(--fontSizes-4xl);
      }

      @media screen and (min-width: breakpoint-lg) {
        font-size: var(--fontSizes-5xl);
      }

      @media screen and (min-width: breakpoint-xl) {
        font-size: var(--fontSizes-6xl);
      }
    }

    h2 {
      font-size: var(--fontSizes-xl);
      margin-top: var(--space-12);
      margin-bottom: var(--sizes-5);

      @media screen and (min-width: breakpoint-md) {
        font-size: var(--fontSizes-2xl);
      }

      @media screen and (min-width: breakpoint-lg) {
        font-size: var(--fontSizes-3xl);
      }

      @media screen and (min-width: breakpoint-xl) {
        font-size: var(--fontSizes-4xl);
      }
    }

    h3 {
      font-size: var(--fontSizes-lg);
      margin-top: var(--space-10);
      margin-bottom: var(--sizes-4);

      @media screen and (min-width: breakpoint-md) {
        font-size: var(--fontSizes-xl);
      }

      @media screen and (min-width: breakpoint-lg) {
        font-size: var(--fontSizes-2xl);
      }

      @media screen and (min-width: breakpoint-xl) {
        font-size: var(--fontSizes-3xl);
      }
    }

    h4 {
      font-size: var(--fontSizes-md);
      margin-top: var(--space-8);
      margin-bottom: var(--sizes-3);

      @media screen and (min-width: breakpoint-md) {
        font-size: var(--fontSizes-lg);
      }

      @media screen and (min-width: breakpoint-lg) {
        font-size: var(--fontSizes-xl);
      }

      @media screen and (min-width: breakpoint-xl) {
        font-size: var(--fontSizes-2xl);
      }
    }

    p,
    ul {
      color: var(--colors-gray-700);
      font-size: var(--fontSizes-md);
      margin-bottom: var(--sizes-8);

      &:last-child {
        margin-bottom: 0;
      }

      @media screen and (min-width: breakpoint-md) {
        font-size: var(--fontSizes-lg);
        line-height: var(--lineHeights-tall);
      }

      @media screen and (min-width: breakpoint-lg) {
        font-size: var(--fontSizes-xl);
      }
    }

    ul {
      margin-left: var(--sizes-16);

      li {
        margin-bottom: var(--sizes-2);
      }
    }

    a {
      color: var(--colors-amber-500);
      font-weight: var(--fontWeights-medium);

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    .image {
      background-color: var(--colors-white);
      margin-bottom: var(--sizes-8);
      display: flex;
      flex-direction: column;
      align-items: center;

      &:last-child {
        margin-bottom: 0;
      }

      img {
        margin-bottom: var(--sizes-3);
        width: var(--sizes-full);
      }

      figcaption {
        color: var(--colors-gray-500);
        font-size: var(--fontSizes-sm);
      }
    }

    .image-style-align-right,
    .image-style-align-left {
      margin-bottom: var(--sizes-8);

      img {
        @media screen and (min-width: breakpoint-sm) {
          max-width: var(--sizes-48);
        }

        @media screen and (min-width: breakpoint-md) {
          max-width: var(--sizes-xs);
        }
      }
    }

    .image-style-align-right {
      @media screen and (min-width: breakpoint-sm) {
        float: right;
        margin-left: var(--sizes-16);
      }
    }

    .image-style-align-left {
      @media screen and (min-width: breakpoint-sm) {
        float: left;
        margin-right: var(--sizes-16);
      }
    }

    .text-small {
      font-size: var(--fontSizes-sm);

      @media screen and (min-width: breakpoint-md) {
        font-size: var(--fontSizes-md);
        line-height: var(--lineHeights-base);
      }
    }
  }
}
</style>
