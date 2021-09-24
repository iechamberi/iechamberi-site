<template>
  <CThemeProvider>
    <CColorModeProvider>
      <CBox font-family="body" h="full">
        <CReset :config="config" />
        <SiteHeader
          :brand="siteHeader.brand"
          :menu-items="siteHeader.menuItems"
        />
        <CBox as="main" min-h="calc(100vh - 64px)" pt="16">
          <Nuxt />
        </CBox>
        <SiteFooter
          :copyright="siteFooter.copyright"
          :menu-items="siteFooter.menuItems"
          :brand="siteFooter.brand"
          :slogan="siteFooter.slogan"
          :navs="siteFooter.navs"
        />
        <CookieConsent />
      </CBox>
    </CColorModeProvider>
  </CThemeProvider>
</template>
<script>
import 'focus-visible/dist/focus-visible'
import SITE_HEADER_QUERY from '@/apollo/queries/site-header'
import SITE_FOOTER_QUERY from '@/apollo/queries/site-footer'

export default {
  name: 'App',
  apollo: {
    siteHeader: {
      query: SITE_HEADER_QUERY,
      variables() {
        return {
          locale: this.$i18n.locale,
        }
      },
      update: (data) => data.siteHeader,
    },
    siteFooter: {
      query: SITE_FOOTER_QUERY,
      variables() {
        return {
          locale: this.$i18n.locale,
        }
      },
      update: (data) => data.siteFooter,
    },
  },
  data() {
    return {
      config: (theme, defaultConfig) => {
        defaultConfig.light.color = theme.colors.gray[900]
        return defaultConfig
      },
    }
  },
}
</script>
