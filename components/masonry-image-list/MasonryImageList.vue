<template>
  <CBox as="section" :my="[16, 20, 24, '7rem']">
    <Container>
      <CBox
        class="c-masonry-image-list"
        :class="{
          'c-masonry-image-list--1x': images.length === 1,
          'c-masonry-image-list--2x': images.length === 2,
        }"
      >
        <CImage
          v-for="item in images"
          :key="item.id"
          :src="item.media.url"
          :alt="item.alt"
        />
      </CBox>
    </Container>
  </CBox>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.c-masonry-image-list {
  column-count: 3;
  column-gap: var(--space-16);

  img {
    margin-bottom: var(--space-16);
  }

  &--2x {
    column-count: 2;
  }

  &--1x {
    column-count: 1;

    img {
      margin-bottom: 0;
    }
  }
}
</style>
