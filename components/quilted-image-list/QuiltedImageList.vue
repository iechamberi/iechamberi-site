<template>
  <div>
    <CBox as="section" :my="[16, 20, 24, '7rem']" z-index="hide">
      <Container>
        <CGrid
          class="quilted-image-list"
          :class="`quilted-image-list--${images.length}x`"
          :template-columns="['repeat(2, 1fr)', 'repeat(3, 1fr)']"
          :gap="[4, 8]"
        >
          <CButton
            v-for="(item, idx) in images"
            :key="item.id"
            variant="unstyled"
            pt="0"
            pb="0"
            rounded="none"
            @click="openModal(item, idx)"
          >
            <CImage :src="item.media.url" :alt="item.alt" />
          </CButton>
        </CGrid>
      </Container>
    </CBox>
    <CModal
      :is-open="isOpen"
      :on-close="close"
      :close-on-overlay-click="true"
      :size="['full', '90vw', '80vw', '70vw']"
    >
      <CModalContent v-if="image" ref="content">
        <CModalHeader>
          <CIconButton
            :aria-label="$t('components.quiltedImageList.previousImage')"
            icon="chevron-left"
            :is-disabled="index === 0"
            variant-color="blackAlpha"
            rounded="1rem"
            @click="previous()"
          />
          <CIconButton
            :aria-label="$t('components.quiltedImageList.nextImage')"
            icon="chevron-right"
            :is-disabled="index + 1 >= images.length"
            variant-color="blackAlpha"
            rounded="1rem"
            @click="next()"
          />
        </CModalHeader>
        <CModalCloseButton rounded="full" size="lg" />
        <CModalBody p="0">
          <div>
            <CImage :src="image.media.url" :alt="image.alt" w="full" />
          </div>
        </CModalBody>
        <CModalFooter p="4" justify-content="center">
          <CText v-if="image">{{ image.caption || image.alt }}</CText>
        </CModalFooter>
      </CModalContent>
      <CModalOverlay />
    </CModal>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      image: null,
      index: null,
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    openModal(image, idx) {
      this.index = idx
      this.image = image
      this.open()
    },
    previous() {
      this.index -= 1
      this.image = this.images[this.index]
    },
    next() {
      this.index += 1
      this.image = this.images[this.index]
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '@/assets/css/settings/_settings.breakpoints.pcss';

.quilted-image-list {
  button {
    height: calc(40vw);

    @media screen and (min-width: breakpoint-md) {
      height: calc(25vw);
    }

    @media screen and (min-width: breakpoint-xl) {
      height: 320px;
    }

    &:hover {
      img {
        --tw-scale-x: 1.025;
        --tw-scale-y: 1.025;
        cursor: zoom-in;
      }
    }
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translateX(var(--tw-translate-x))
      translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
      scaleY(var(--tw-scale-y));
  }

  &--3x {
    button:nth-child(1) {
      grid-column: span 1 / span 1;

      @media screen and (min-width: breakpoint-md) {
        grid-column: span 2 / span 2;
      }
    }

    button:nth-child(2) {
      grid-row: span 2 / span 2;
      height: 100%;
    }

    button:nth-child(3) {
      grid-column: span 1 / span 1;

      @media screen and (min-width: breakpoint-md) {
        grid-column: span 2 / span 2;
      }
    }
  }

  &--4x {
    button:nth-child(1) {
      grid-column: span 2 / span 2;
    }

    button:nth-child(2) {
      grid-row: span 2 / span 2;
      height: 100%;
    }
  }

  &--5x {
    button:nth-child(3) {
      grid-row: span 2 / span 2;
      height: 100%;
    }
  }

  &--6x {
    button:nth-child(1) {
      grid-column: span 2 / span 2;
    }

    button:nth-child(2) {
      grid-row: span 2 / span 2;
      height: 100%;
    }

    button:nth-child(6) {
      grid-column: span 1 / span 1;

      @media screen and (min-width: breakpoint-md) {
        grid-column: span 2 / span 2;
      }
    }
  }

  &--7x {
    button:nth-child(1) {
      grid-column: span 2 / span 2;
    }

    button:nth-child(2) {
      grid-row: span 2 / span 2;
      height: 100%;
    }

    button:nth-child(5) {
      grid-column: span 2 / span 2;

      @media screen and (min-width: breakpoint-md) {
        grid-row: span 2 / span 2;
        grid-column: span 1 / span 1;
        height: 100%;
      }
    }

    button:nth-child(6) {
      grid-column: span 1 / span 1;

      @media screen and (min-width: breakpoint-md) {
        grid-column: span 2 / span 2;
      }
    }

    button:nth-child(7) {
      grid-column: span 1 / span 1;

      @media screen and (min-width: breakpoint-md) {
        grid-column: span 2 / span 2;
      }
    }
  }

  &--8x {
    button:nth-child(1) {
      grid-column: span 2 / span 2;
    }

    button:nth-child(2) {
      grid-row: span 2 / span 2;
      height: 100%;
    }

    button:nth-child(5) {
      grid-column: span 2 / span 2;

      @media screen and (min-width: breakpoint-md) {
        grid-row: span 2 / span 2;
        grid-column: span 1 / span 1;
        height: 100%;
      }
    }

    button:nth-child(6) {
      @media screen and (min-width: breakpoint-md) {
        grid-column: span 2 / span 2;
      }
    }

    button:nth-child(7) {
      grid-row: span 2 / span 2;
      height: 100%;

      @media screen and (min-width: breakpoint-md) {
        grid-row: span 1 / span 1;
        height: calc(25vw);
      }

      @media screen and (min-width: breakpoint-xl) {
        grid-row: span 1 / span 1;
        height: 320px;
      }
    }
  }
}
</style>
