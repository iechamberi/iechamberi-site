<template>
  <CFlex
    as="footer"
    bg="white"
    z-index="docked"
    pos="sticky"
    top="0"
    border-top-width="1px"
    h="16"
    align-items="center"
  >
    <Container d="flex" justify-content="space-between">
      <CText font-size="sm" color="gray.600">
        © {{ year }} {{ copyright }}
      </CText>
      <CStack
        v-if="menuItems && menuItems.length"
        as="nav"
        is-inline
        spacing="4"
      >
        <CLink
          v-for="item in menuItems"
          :key="item.id"
          as="nuxt-link"
          :to="localePath(item.link.url)"
          font-size="sm"
          color="gray.600"
        >
          {{ item.label }}
        </CLink>
      </CStack>
    </Container>
  </CFlex>
</template>

<script>
export default {
  name: 'SiteFooter',
  props: {
    copyright: {
      type: String,
      required: true,
    },
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    year() {
      return this.$dayjs().format('YYYY')
    },
  },
}
</script>
