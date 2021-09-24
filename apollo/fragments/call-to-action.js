import { gql } from 'graphql-tag'
import Link from '@/apollo/fragments/link'

export default gql`
  ${Link}
  fragment CallToAction on ComponentSectionsCallToAction {
    title
    text
    action {
      ...Link
    }
  }
`
