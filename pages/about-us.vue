<template>
  <CBox>
    <PageHeader :title="page.header.title" :summary="page.header.summary" />
    <DynamicZone :sections="page.sections" />
  </CBox>
</template>

<script>
import PAGE_BY_SLUG_QUERY from '@/apollo/queries/pages/page-by-slug'
import getMetaTags from '@/utils/meta-tags'
import { last } from 'lodash'

export default {
  nuxtI18n: {
    paths: {
      es: '/sobre-nosotros',
      en: '/about-us',
    },
  },
  async asyncData({ app, i18n }) {
    const client = app.apolloProvider.defaultClient
    const slug = last(app.localePath('about-us').split('/'))
    const { data } = await client.query({
      query: PAGE_BY_SLUG_QUERY,
      variables: { slug, locale: i18n.locale },
    })
    return {
      page: data.pageBySlug,
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
      return `${this.$config.baseUrl}${this.localePath('about-us')}`
    },
  },
}
</script>
