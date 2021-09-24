import gql from 'graphql-tag'

export default gql`
  fragment Image on ComponentCommonImage {
    id
    alt
    caption
    media {
      url
    }
  }
`
