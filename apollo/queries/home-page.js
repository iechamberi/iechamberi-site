import gql from 'graphql-tag'
import MetaTags from '@/apollo/fragments/meta-tags'
import Hero from '@/apollo/fragments/hero'

const HOME_PAGE_QUERY = gql`
  ${MetaTags}
  ${Hero}
  query HomePage {
    homePage {
      metaTags {
        ...MetaTags
      }
      hero {
        ...Hero
      }
    }
  }
`

export default HOME_PAGE_QUERY
