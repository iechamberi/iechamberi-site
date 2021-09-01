<template>
  <CBox as="section" :my="[24, 32, 40]" class="c-simple-feature">
    <Container>
      <CGrid
        w="full"
        :template-columns="[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(12, 1fr)',
        ]"
        :gap="[6, 8, 10, 12]"
      >
        <CGridItem :col-span="[1, 1, 5]">
          <CHeading max-w="xs" :font-size="['2xl', '3xl', '4xl']">{{
            title
          }}</CHeading>
        </CGridItem>
        <CGridItem :col-start="[0, 0, 6]" :col-end="[0, 0, 13, 12]">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="text" />
          <CLink
            v-if="action"
            as="nuxt-link"
            :to="localePath(action.link.url)"
            :font-size="['md', 'lg', 'xl']"
            color="amber.500"
            mt="6"
            d="inline-block"
            :_hover="{ textDecoration: 'none' }"
          >
            {{ action.label }}
            <CIcon name="arrow-right" ml="1" />
          </CLink>
        </CGridItem>
      </CGrid>
    </Container>
  </CBox>
</template>

<script>
export default {
  name: 'SimpleFeature',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    action: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '@/assets/css/settings/_settings.colors.pcss';

.c-simple-feature {
  &::v-deep h3 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 0.5rem;

    &:first-child {
      margin-top: 0;
    }

    @media screen and (min-width: 48em) {
      font-size: 1.25rem;
    }
  }

  &::v-deep p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: color-gray-600;

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (min-width: 48em) {
      font-size: 1.125rem;
    }
  }
}
</style>
