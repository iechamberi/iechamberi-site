import { gql } from 'graphql-tag'
import Feature from '@/apollo/fragments/feature'

export default gql`
  ${Feature}
  fragment ThreeColumnFeatures on ComponentSectionsThreeColumnFeatures {
    title
    features {
      ...Feature
    }
  }
`
