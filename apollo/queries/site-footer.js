import { gql } from 'graphql-tag'
import Link from '@/apollo/fragments/link'

const SITE_FOOTER_QUERY = gql`
  ${Link}
  query SiteFooter($locale: String) {
    siteFooter(locale: $locale) {
      copyright
      menuItems {
        ...Link
      }
    }
  }
`

export default SITE_FOOTER_QUERY
