import { gql } from 'graphql-tag'
import Image from '@/apollo/fragments/image'

export default gql`
  ${Image}
  fragment QuiltedImageList on ComponentSectionsQuiltedImageList {
    images {
      ...Image
    }
  }
`
