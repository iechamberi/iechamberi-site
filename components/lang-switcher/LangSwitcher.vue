<template>
  <c-menu :close-on-select="false">
    <c-menu-button
      right-icon="chevron-down"
      variant="unstyled"
      font-weight="normal"
      text-transform="uppercase"
      border-radius="0"
      py="0"
      >{{ $i18n.locale }}</c-menu-button
    >
    <c-menu-list p="2">
      <c-menu-option-group
        :default-value="$i18n.locale"
        type="radio"
        @change="switchLang"
      >
        <c-menu-item-option
          v-for="locale in availableLocales"
          :key="locale.code"
          :value="locale.code"
          rounded="md"
          :_focus="{ bg: 'transparent' }"
          :_hover="{ bg: 'amber.100' }"
        >
          {{ locale.name }}
        </c-menu-item-option>
      </c-menu-option-group>
    </c-menu-list>
  </c-menu>
</template>

<script>
export default {
  name: 'LangSwitcher',
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
  methods: {
    switchLang(value) {
      if (this.$i18n.locale !== value) {
        this.$nuxt.$loading.start()
        this.$router.push({
          path: this.switchLocalePath(value),
        })
      }
    },
  },
}
</script>
