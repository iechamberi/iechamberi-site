import { gql } from 'graphql-tag'
import Link from '@/apollo/fragments/link'

export default gql`
  ${Link}
  fragment Nav on ComponentCommonNav {
    id
    title
    items {
      ...Link
    }
  }
`
