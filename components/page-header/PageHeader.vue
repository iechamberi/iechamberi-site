<template>
  <CFlex :mt="[8, 10, 12, '3.5rem']" :mb="[16, 20, 24, '7rem']">
    <Container>
      <CStack :spacing="4">
        <CHeading as="h1" :font-size="['3xl', '4xl', '5xl', '6xl']">
          {{ title }}
        </CHeading>
        <CText max-w="2xl" color="gray.500" :font-size="['md', 'lg', '2xl']">
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
