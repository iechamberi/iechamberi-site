<template>
  <CBox as="section" :my="[16, 20, 24, '7rem']">
    <Container max-w="containers.md">
      <Content :data="content" />
    </Container>
  </CBox>
</template>

<script>
export default {
  name: 'CenteredContent',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>
