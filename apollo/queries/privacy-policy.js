import { gql } from 'graphql-tag'
import MetaTags from '@/apollo/fragments/meta-tags'

const PRIVACY_POLICY_QUERY = gql`
  ${MetaTags}
  query PrivacyPolicy($locale: String) {
    privacyPolicy(locale: $locale) {
      metaTags {
        ...MetaTags
      }
      content
    }
  }
`

export default PRIVACY_POLICY_QUERY
