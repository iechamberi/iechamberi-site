import { gql } from 'graphql-tag'
import MetaTags from '@/apollo/fragments/meta-tags'
import PageHeader from '@/apollo/fragments/page-header'
import Sections from '@/apollo/fragments/sections'

const ABOUT_US_QUERY = gql`
  ${MetaTags}
  ${PageHeader}
  ${Sections}
  query AboutUs($locale: String) {
    aboutUs(locale: $locale) {
      metaTags {
        ...MetaTags
      }
      pageHeader {
        ...PageHeader
      }
      sections {
        ...Sections
      }
    }
  }
`

export default ABOUT_US_QUERY
