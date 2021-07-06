<template>
  <CThemeProvider>
    <CColorModeProvider>
      <CBox font-family="body" h="full">
        <CReset />
        <SiteHeader
          :brand="siteHeader.brand"
          :menu-items="siteHeader.menuItems"
        />
        <CBox as="main" min-h="calc(100vh - 128px)">
          <Nuxt />
        </CBox>
      </CBox>
    </CColorModeProvider>
  </CThemeProvider>
</template>
<script>
import 'focus-visible/dist/focus-visible'
import SITE_HEADER_QUERY from '@/apollo/queries/site-header'

export default {
  name: 'App',
  data() {
    return {
      siteHeader: null,
      siteFooter: null,
    }
  },
  apollo: {
    siteHeader: {
      query: SITE_HEADER_QUERY,
      update: (data) => data.siteHeader,
    },
  },
}
</script>
