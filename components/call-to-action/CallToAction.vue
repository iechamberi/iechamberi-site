<template>
  <CBox as="section" :my="[16, 20, 24, '7rem']" class="c-call-to-action">
    <Container>
      <CStack
        class="c-call-to-action__gradient"
        :spacing="[4, 5, 6, 8]"
        :py="[8, 10, 12, '3.5rem']"
        :px="[4, 8]"
        rounded="1rem"
        text-align="center"
      >
        <CHeading :font-size="['2xl', '3xl', '4xl', '5xl']" color="white">{{
          title
        }}</CHeading>
        <CText
          :font-size="['md', 'lg', 'xl']"
          :line-height="['base', 'tall']"
          max-w="540px"
          m="0 auto"
          color="white"
          >{{ text }}</CText
        >
        <CBox>
          <CButton
            as="nuxt-link"
            :to="localePath(action.link.url)"
            :aria-label="action.label"
            variant-color="dark"
            size="lg"
          >
            {{ action.label }}
          </CButton>
        </CBox>
      </CStack>
    </Container>
  </CBox>
</template>

<script>
export default {
  name: 'CallToAction',
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
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.c-call-to-action {
  &__gradient {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
    --tw-gradient-from: #fbbf24;
    --tw-gradient-stops: var(--tw-gradient-from),
      var(--tw-gradient-to, rgba(251, 191, 36, 0));
    --tw-gradient-stops: var(--tw-gradient-from), var(--colors-orange-500),
      var(--tw-gradient-to, rgba(245, 158, 11, 0));
    --tw-gradient-to: #f59e0b;
  }
}
</style>
