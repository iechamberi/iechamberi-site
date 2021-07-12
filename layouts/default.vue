<template>
  <CThemeProvider>
    <CColorModeProvider>
      <CBox font-family="body" h="full">
        <CReset />
        <SiteHeader
          :brand="siteHeader.brand"
          :menu-items="siteHeader.menuItems"
        />
        <CBox as="main" min-h="calc(100vh - 128px)" pt="16">
          <Nuxt />
        </CBox>
        <SiteFooter
          :copyright="siteFooter.copyright"
          :menu-items="siteFooter.menuItems"
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
      update: (data) => data.siteHeader,
    },
    siteFooter: {
      query: SITE_FOOTER_QUERY,
      update: (data) => data.siteFooter,
    },
  },
}
</script>
