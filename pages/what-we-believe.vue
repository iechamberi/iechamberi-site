<template>
  <CBox>
    <PageHeader
      :title="page.pageHeader.title"
      :summary="page.pageHeader.summary"
    />
    <DynamicZone :sections="page.sections" />
  </CBox>
</template>

<script>
import WHAT_WE_BELIEVE_QUERY from '@/apollo/queries/what-we-believe'
import getMetaTags from '@/utils/meta-tags'

export default {
  nuxtI18n: {
    paths: {
      es: '/lo-que-creemos',
      en: '/what-we-believe',
    },
  },
  async asyncData({ app, i18n }) {
    const client = app.apolloProvider.defaultClient
    const { data } = await client.query({
      query: WHAT_WE_BELIEVE_QUERY,
      variables: { locale: i18n.locale },
    })
    return {
      page: data.whatWeBelieve,
    }
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    const metaTags = getMetaTags(this.page.metaTags)
    return {
      title: this.page.metaTags.title,
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
      return `${this.$config.baseUrl}${this.localePath('what-we-believe')}`
    },
  },
}
</script>
