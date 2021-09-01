import { gql } from 'graphql-tag'
import Link from '@/apollo/fragments/link'

export default gql`
  ${Link}
  fragment SimpleFeature on ComponentSectionsSimpleFeature {
    id
    title
    text
    action {
      ...Link
    }
  }
`
