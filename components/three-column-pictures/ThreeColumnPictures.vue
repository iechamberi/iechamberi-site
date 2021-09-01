<template>
  <CBox as="section" :my="[24, 32, 40]">
    <Container>
      <CGrid
        w="full"
        :template-columns="[
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ]"
        :gap="[10, 12, 16, 20]"
      >
        <CGridItem col-span="1">
          <CImage :src="pictures[0].media.url" :alt="pictures[0].alt" />
        </CGridItem>
        <CGridItem col-span="1">
          <CImage :src="pictures[1].media.url" :alt="pictures[1].alt" />
        </CGridItem>
        <CGridItem :d="['none', 'none', 'initial']" col-span="1">
          <CImage :src="pictures[2].media.url" :alt="pictures[2].alt" />
        </CGridItem>
      </CGrid>
    </Container>
  </CBox>
</template>

<script>
export default {
  name: 'ThreeColumnPictures',
  props: {
    pictures: {
      type: Array,
      required: true,
    },
  },
}
</script>
