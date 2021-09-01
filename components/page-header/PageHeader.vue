<template>
  <CFlex :my="[12, 16, 20]">
    <Container>
      <CStack :spacing="4">
        <CHeading as="h1" :font-size="['4xl', '5xl', '6xl']">
          {{ title }}
        </CHeading>
        <CText :font-size="['md', 'lg', 'xl']" max-w="2xl" color="gray.500">
          {{ summary }}
        </CText>
      </CStack>
    </Container>
  </CFlex>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      default: null,
    },
  },
}
</script>
