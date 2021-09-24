import { gql } from 'graphql-tag'
import Link from '@/apollo/fragments/link'
import Brand from '@/apollo/fragments/brand'
import Nav from '@/apollo/fragments/nav'

const SITE_FOOTER_QUERY = gql`
  ${Link}
  ${Brand}
  ${Nav}
  query SiteFooter($locale: String) {
    siteFooter(locale: $locale) {
      copyright
      menuItems {
        ...Link
      }
      brand {
        ...Brand
      }
      slogan
      navs {
        ...Nav
      }
    }
  }
`

export default SITE_FOOTER_QUERY
