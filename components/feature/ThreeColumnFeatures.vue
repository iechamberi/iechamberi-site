<template>
  <CBox as="section" :my="[16, 20, 24, '7rem']">
    <Container>
      <CHeading
        v-if="title"
        :font-size="['xl', '2xl', '3xl', '4xl']"
        text-align="center"
        :mb="[8, 10, 12, '3.5rem']"
      >
        {{ title }}
      </CHeading>
      <CSimpleGrid :columns="[1, 1, 3]" :spacing="[8, 10, 12, '3.5rem']">
        <CStack v-for="item in features" :key="item.id" spacing="4">
          <CFlex
            w="50px"
            h="50px"
            color="white"
            bg="amber.500"
            align="center"
            justify="center"
            font-size="2xl"
            border-radius="1rem"
          >
            <CIcon v-if="item.icon" :name="item.icon.slug" />
          </CFlex>
          <CHeading as="h3" :font-size="['lg', 'xl']">
            {{ item.title }}
          </CHeading>
          <CText :font-size="['md', 'lg']" color="gray.700">
            {{ item.text }}
          </CText>
          <CLink
            v-if="item.action"
            as="nuxt-link"
            :to="localePath(item.action.link.url)"
            :font-size="['md', 'lg']"
            color="amber.500"
            font-weight="medium"
            d="inline-block"
            :_hover="{ textDecoration: 'none', color: 'amber.600' }"
          >
            {{ item.action.label }}
            <CIcon name="arrow-right" ml="1" />
          </CLink>
        </CStack>
      </CSimpleGrid>
    </Container>
  </CBox>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    features: {
      type: Array,
      required: true,
    },
  },
}
</script>
