import { gql } from 'graphql-tag'
import Link from '@/apollo/fragments/link'

export default gql`
  ${Link}
  fragment Feature on Feature {
    id
    title
    text
    action {
      ...Link
    }
    icon {
      id
      name
      slug
    }
  }
`
