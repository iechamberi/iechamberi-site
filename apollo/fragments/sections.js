import { gql } from 'graphql-tag'
import SimpleFeature from '@/apollo/fragments/simple-feature'
import ThreeColumnPictures from '@/apollo/fragments/three-column-pictures'

export default gql`
  ${SimpleFeature}
  ${ThreeColumnPictures}
  fragment Sections on AboutUsSectionsDynamicZone {
    __typename
    ... on ComponentSectionsSimpleFeature {
      ...SimpleFeature
    }
    __typename
    ... on ComponentSectionsThreeColumnPictures {
      ...ThreeColumnPictures
    }
  }
`
