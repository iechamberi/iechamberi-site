<template>
  <CBox
    as="footer"
    :mt="[16, 20, 24, '7rem']"
    :py="[8, 10, 12, '3.5rem']"
    bg="gray.900"
  >
    <Container>
      <CGrid
        w="full"
        :template-columns="['repeat(1, 1fr)', 'repeat(11, 1fr)']"
        gap="6"
        :mb="[8, 10, 12, '3.5rem']"
        as="nav"
      >
        <CGridItem :col-span="[3]">
          <CStack spacing="4">
            <CStack spacing="3" is-inline align="center">
              <img
                v-chakra
                w="8"
                h="8"
                :src="brand.logo.media.url"
                :alt="brand.logo.alt"
              />
              <CBox font-size="xl" font-weight="medium" color="gray.400">{{
                brand.name
              }}</CBox>
            </CStack>
            <CText color="gray.400">{{ slogan }}</CText>
          </CStack>
        </CGridItem>
        <CGridItem v-for="nav in navs" :key="nav.id" :col-span="[2]">
          <CHeading
            font-size="md"
            mb="4"
            text-transform="uppercase"
            color="gray.400"
            >{{ nav.title }}</CHeading
          >
          <CStack as="ul" list-style-type="none" spacing="4">
            <CBox v-for="item in nav.items" :key="item.id" as="li">
              <CLink
                as="nuxt-link"
                :to="localePath(item.link.url)"
                :_hover="{ textDecoration: 'none', color: 'gray.100' }"
                color="gray.400"
              >
                {{ item.label }}
              </CLink>
            </CBox>
          </CStack>
        </CGridItem>
      </CGrid>
      <CBox text-align="center">
        <CText color="gray.400"> © {{ year }} {{ copyright }} </CText>
      </CBox>
    </Container>
  </CBox>
</template>

<script>
export default {
  name: 'SiteFooter',
  props: {
    copyright: {
      type: String,
      required: true,
    },
    brand: {
      type: Object,
      required: true,
    },
    slogan: {
      type: String,
      required: true,
    },
    navs: {
      type: Array,
      required: true,
    },
  },
  computed: {
    year() {
      return this.$dayjs().format('YYYY')
    },
  },
}
</script>
