import { gql } from 'graphql-tag'
import Image from '@/apollo/fragments/image'

export default gql`
  ${Image}
  fragment ThreeColumnPictures on ComponentSectionsThreeColumnPictures {
    pictures {
      ...Image
    }
  }
`
