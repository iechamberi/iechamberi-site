import gql from 'graphql-tag'
import Link from '@/apollo/fragments/link'

const SITE_HEADER_QUERY = gql`
  ${Link}
  query SiteHeader {
    siteHeader {
      brand {
        name
        logo {
          url
          alternativeText
        }
      }
      menuItems {
        ...Link
      }
    }
  }
`

export default SITE_HEADER_QUERY
