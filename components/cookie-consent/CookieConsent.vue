<template>
  <client-only>
    <CBox class="c-cookie-consent">
      <CookieLaw theme="custom">
        <div slot-scope="props">
          <CFlex
            max-w="containers.xl"
            mx="auto"
            px="4"
            py="6"
            flex-wrap="wrap"
            justify="space-between"
          >
            <CText
              color="white"
              :max-w="['100%', '100%', 'lg']"
              :mb="[4, 4, 0]"
              font-size="sm"
            >
              {{ $t('components.cookieConsent.message') }}
              <CLink
                as="nuxt-link"
                :to="localePath('privacy-policy')"
                text-decoration="underline"
              >
                {{ $t('components.cookieConsent.linkText') }}</CLink
              >.
            </CText>
            <CButton
              variant="outline"
              color="white"
              flex-basis="1"
              font-weight="normal"
              font-size="sm"
              :_hover="{ color: 'black', bg: 'white' }"
              @click="props.accept"
            >
              {{ $t('components.cookieConsent.buttonText') }}
            </CButton>
          </CFlex>
        </div>
      </CookieLaw>
    </CBox>
  </client-only>
</template>

<script>
export default {
  name: 'CookieConsent',
}
</script>

<style scoped>
.c-cookie-consent::v-deep .Cookie--custom {
  background-color: #000;
}
.c-cookie-consent::v-deep .Cookie > * {
  flex-grow: 1;
  margin: 0;
}
</style>
