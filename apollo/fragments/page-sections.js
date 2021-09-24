import { gql } from 'graphql-tag'
import SimpleFeature from '@/apollo/fragments/simple-feature'
import ThreeColumnPictures from '@/apollo/fragments/three-column-pictures'
import CallToAction from '@/apollo/fragments/call-to-action'
import CenteredContent from '@/apollo/fragments/centered-content'
import MasonryImageList from '@/apollo/fragments/masonry-image-list'
import QuiltedImageList from '@/apollo/fragments/quilted-image-list'

export default gql`
  ${SimpleFeature}
  ${ThreeColumnPictures}
  ${CallToAction}
  ${CenteredContent}
  ${MasonryImageList}
  ${QuiltedImageList}
  fragment PageSections on PageSectionsDynamicZone {
    __typename
    ... on ComponentSectionsSimpleFeature {
      ...SimpleFeature
    }
    __typename
    ... on ComponentSectionsThreeColumnPictures {
      ...ThreeColumnPictures
    }
    __typename
    ... on ComponentSectionsCallToAction {
      ...CallToAction
    }
    __typename
    ... on ComponentSectionsCenteredContent {
      ...CenteredContent
    }
    __typename
    ... on ComponentSectionsMasonryImageList {
      ...MasonryImageList
    }
    __typename
    ... on ComponentSectionsQuiltedImageList {
      ...QuiltedImageList
    }
  }
`
