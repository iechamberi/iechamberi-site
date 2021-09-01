<template>
  <CBox>
    <PageHeader
      v-if="aboutUs"
      :title="aboutUs.pageHeader.title"
      :summary="aboutUs.pageHeader.summary"
    />
    <DynamicZone v-if="aboutUs" :sections="aboutUs.sections" />
  </CBox>
</template>

<script>
import ABOUT_US_QUERY from '@/apollo/queries/about-us'
import getMetaTags from '@/utils/meta-tags'

export default {
  nuxtI18n: {
    paths: {
      es: '/sobre-nosotros',
      en: '/about-us',
    },
  },
  async asyncData({ app, i18n }) {
    const client = app.apolloProvider.defaultClient
    const { data } = await client.query({
      query: ABOUT_US_QUERY,
      variables: { locale: i18n.locale },
    })
    return {
      aboutUs: data.aboutUs,
    }
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    const metaTags = getMetaTags(this.aboutUs.metaTags)
    return {
      title: this.aboutUs.metaTags.title,
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
