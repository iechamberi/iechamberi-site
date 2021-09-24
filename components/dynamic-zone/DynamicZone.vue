<template>
  <CBox>
    <Component
      :is="getTagName(section.__typename)"
      v-for="section in sections"
      :key="section.id"
      v-bind="getBindsProps(section)"
    />
  </CBox>
</template>

<script>
import { paramCase } from 'param-case'
import SimpleFeature from '@/components/feature/SimpleFeature'
import ThreeColumnPictures from '@/components/three-column-pictures/ThreeColumnPictures'
import CallToAction from '@/components/call-to-action/CallToAction'
import CenteredContent from '@/components/content/CenteredContent'
import ThreeColumnFeatures from '~/components/feature/ThreeColumnFeatures'
import MasonryImageList from '~/components/masonry-image-list/MasonryImageList'
import QuiltedImageList from '~/components/quilted-image-list/QuiltedImageList'

export default {
  name: 'DynamicZone',
  components: {
    SimpleFeature,
    ThreeColumnPictures,
    CallToAction,
    CenteredContent,
    ThreeColumnFeatures,
    MasonryImageList,
    QuiltedImageList,
  },
  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getTagName(typename) {
      typename = paramCase(typename)
      typename = typename.split('-')
      return typename.slice(2, typename.length).join('-')
    },
    getBindsProps(props) {
      const tagProps = Object.assign({}, props)
      delete tagProps.id
      delete tagProps.__typename
      return tagProps
    },
  },
}
</script>
