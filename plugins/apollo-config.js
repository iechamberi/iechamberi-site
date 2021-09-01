import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'

import introspectionQueryResultData from '@/apollo/fragment-types.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

const cache = new InMemoryCache({
  fragmentMatcher,
})

export default (context) => {
  return {
    httpEndpoint: context.$config.apiUrl,
    cache,
    ssr: true,
    persisting: true,
  }
}
