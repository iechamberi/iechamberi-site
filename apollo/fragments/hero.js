import gql from 'graphql-tag'
import Image from '@/apollo/fragments/image'

export default gql`
  ${Image}
  fragment Hero on ComponentSectionsHero {
    title
    text
    image {
      ...Image
    }
  }
`
