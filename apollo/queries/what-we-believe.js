import { gql } from 'graphql-tag'
import MetaTags from '@/apollo/fragments/meta-tags'
import PageHeader from '@/apollo/fragments/page-header'
import Sections from '@/apollo/fragments/sections'

const WHAT_WE_BELIEVE_QUERY = gql`
  ${MetaTags}
  ${PageHeader}
  ${Sections}
  query AboutUs($locale: String) {
    whatWeBelieve(locale: $locale) {
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

export default WHAT_WE_BELIEVE_QUERY
