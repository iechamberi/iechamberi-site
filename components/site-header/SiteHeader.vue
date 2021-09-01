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
          d="flex"
          :to="localePath('index')"
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
        <CFlex>
          <CStack spacing="4" is-inline align="center" mr="8" as="nav">
            <CLink
              v-for="item in menuItems"
              :key="item.id"
              as="nuxt-link"
              d="flex"
              :_hover="{ color: 'amber.500' }"
              :to="localePath(item.link.url)"
              >{{ item.label }}</CLink
            >
          </CStack>
          <LangSwitcher />
        </CFlex>
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

<style lang="postcss" scoped>
@import '@/assets/css/settings/_settings.colors.pcss';

nav {
  .nuxt-link-exact-active {
    color: color-gray-400;
    pointer-events: none;
  }
}
</style>
