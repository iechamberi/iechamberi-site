<template>
  <CBox>
    <Hero v-bind="homePage && homePage.hero" />
  </CBox>
</template>

<script>
import HOME_PAGE_QUERY from '@/apollo/queries/home-page'
import getMetaTags from '@/utils/meta-tags'

export default {
  async asyncData({ app, i18n }) {
    const client = app.apolloProvider.defaultClient
    const { data } = await client.query({
      query: HOME_PAGE_QUERY,
      variables: { locale: i18n.locale },
    })
    return {
      homePage: data.homePage,
    }
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    const metaTags = getMetaTags(this.homePage.metaTags)
    return {
      title: this.homePage.metaTags.title,
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.canonicalUrl,
        },
        ...metaTags,
        ...i18nHead.meta,
      ],
      link: [...i18nHead.link],
    }
  },
  computed: {
    canonicalUrl() {
      return `${this.$config.baseUrl}${this.localePath('index')}`
    },
  },
  methods: {},
}
</script>
