import { gql } from 'graphql-tag'

export default gql`
  fragment PageHeader on ComponentSectionsPageHeader {
    title
    summary
  }
`
