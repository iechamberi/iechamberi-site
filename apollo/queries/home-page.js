import { gql } from 'graphql-tag'
import MetaTags from '@/apollo/fragments/meta-tags'
import Hero from '@/apollo/fragments/hero'
import ThreeColumnFeatures from '@/apollo/fragments/three-column-features'
import CallToAction from '@/apollo/fragments/call-to-action'

const HOME_PAGE_QUERY = gql`
  ${MetaTags}
  ${Hero}
  ${ThreeColumnFeatures}
  ${CallToAction}
  query HomePage($locale: String) {
    homePage(locale: $locale) {
      metaTags {
        ...MetaTags
      }
      hero {
        ...Hero
      }
      sections {
        __typename
        ... on ComponentSectionsThreeColumnFeatures {
          ...ThreeColumnFeatures
        }
        __typename
        ... on ComponentSectionsCallToAction {
          ...CallToAction
        }
      }
    }
  }
`

export default HOME_PAGE_QUERY
