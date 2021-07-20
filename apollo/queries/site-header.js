import { gql } from 'graphql-tag'
import Brand from '@/apollo/fragments/brand'
import Link from '@/apollo/fragments/link'

const SITE_HEADER_QUERY = gql`
  ${Brand}
  ${Link}
  query SiteHeader($locale: String) {
    siteHeader(locale: $locale) {
      brand {
        ...Brand
      }
      menuItems {
        ...Link
      }
    }
  }
`

export default SITE_HEADER_QUERY
