import { createStyledAttrsMixin } from '@chakra-ui/vue/src/utils'

const Container = {
  name: 'Container',
  mixins: [createStyledAttrsMixin('CBox')],
  props: {
    as: {
      type: [String, Object],
      default: 'div',
    },
    to: {
      type: [String, Object],
      default: '',
    },
  },
  computed: {
    componentStyles() {
      return {
        maxW: 'containers.xl',
        px: '4',
        mx: 'auto',
        flexGrow: '1',
      }
    },
  },
  render(h) {
    return h(
      this.as,
      {
        props: {
          to: this.to,
        },
        class: this.className,
        on: this.listeners$,
        attrs: this.computedAttrs,
      },
      this.$slots.default
    )
  },
}

export default Container
