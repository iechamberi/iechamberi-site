import { gql } from 'graphql-tag'
import MetaTags from '@/apollo/fragments/meta-tags'
import PageHeader from '@/apollo/fragments/page-header'
import PageSections from '@/apollo/fragments/page-sections'

const PAGE_BY_SLUG_QUERY = gql`
  ${MetaTags}
  ${PageHeader}
  ${PageSections}
  query pageBySlug($slug: String!, $locale: String) {
    pageBySlug(slug: $slug, locale: $locale) {
      metaTags {
        ...MetaTags
      }
      header {
        ...PageHeader
      }
      sections {
        ...PageSections
      }
    }
  }
`

export default PAGE_BY_SLUG_QUERY
