<template>
  <CFlex
    as="header"
    bg="white"
    z-index="docked"
    pos="fixed"
    w="full"
    top="0"
    border-bottom-width="1px"
    h="16"
    align-items="center"
  >
    <Container>
      <CFlex justify="space-between">
        <CLink
          as="nuxt-link"
          :to="localePath('/')"
          :_hover="{ textDecoration: 'none' }"
        >
          <CStack spacing="3" is-inline align="center">
            <img
              v-chakra
              w="8"
              h="8"
              :src="brand.logo.media.url"
              :alt="brand.logo.alt"
            />
            <CBox font-size="xl" font-weight="medium">{{ brand.name }}</CBox>
          </CStack>
        </CLink>
      </CFlex>
    </Container>
  </CFlex>
</template>

<script>
export default {
  name: 'SiteHeader',
  props: {
    brand: {
      type: Object,
      required: true,
    },
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
