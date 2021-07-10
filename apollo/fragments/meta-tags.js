import gql from 'graphql-tag'
import Image from '@/apollo/fragments/image'

export default gql`
  ${Image}
  fragment MetaTags on ComponentCommonMetaTags {
    title
    description
    image {
      ...Image
    }
  }
`
