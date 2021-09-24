<template>
  <CBox as="section" :my="[16, 20, 24, '7rem']" class="c-simple-feature">
    <Container>
      <CGrid
        w="full"
        :template-columns="[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(5, 1fr)',
        ]"
        :gap="[0, 0, 24, 32]"
      >
        <CGridItem :col-span="[1, 1, 2]">
          <CHeading :font-size="['xl', '2xl', '3xl', '4xl']" :mb="[5, 0]">{{
            title
          }}</CHeading>
        </CGridItem>
        <CGridItem :col-start="[0, 0, 3]" :col-end="[0, 0, 6]">
          <Content :data="text" />
          <CLink
            v-if="action"
            as="nuxt-link"
            :to="localePath(action.link.url)"
            :font-size="['md', 'lg', 'xl', '2xl']"
            color="amber.500"
            font-weight="medium"
            mt="8"
            d="inline-block"
            :_hover="{ textDecoration: 'none', color: 'amber.600' }"
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
