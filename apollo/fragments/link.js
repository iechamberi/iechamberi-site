import gql from 'graphql-tag'

export default gql`
  fragment Link on ComponentCommonLink {
    id
    label
    link {
      url
      external
    }
  }
`
