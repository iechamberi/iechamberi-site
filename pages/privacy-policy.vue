<template>
  <Container max-w="containers.md">
    <CBox as="article" pt="12" pb="20">
      <Content :data="privacyPolicy.content" />
    </CBox>
  </Container>
</template>

<script>
import PRIVACY_POLICY_QUERY from '@/apollo/queries/privacy-policy'
import getMetaTags from '@/utils/meta-tags'

export default {
  nuxtI18n: {
    paths: {
      es: '/politica-de-privacidad',
      en: '/privacy-policy',
    },
  },
  async asyncData({ app, i18n }) {
    const client = app.apolloProvider.defaultClient
    const { data } = await client.query({
      query: PRIVACY_POLICY_QUERY,
      variables: { locale: i18n.locale },
    })
    return {
      privacyPolicy: data.privacyPolicy,
    }
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    const metaTags = getMetaTags(this.privacyPolicy.metaTags)
    return {
      title: this.privacyPolicy.metaTags.title,
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
      return `${this.$config.baseUrl}${this.localePath('privacy-policy')}`
    },
  },
}
</script>
