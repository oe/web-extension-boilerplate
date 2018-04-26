<template>
<div class="container">
  <transition name="slide">
    <router-view class="page"></router-view>
  </transition>
</div>
</template>

<script>{{#vueI18n}}
import locales from './locales.json'{{/vueI18n}}

export default {
  created () {
    console.log('page created')
  },{{#vueI18n}}
  locales{{/vueI18n}}
}
</script>

<style lang="scss">
@import '~@/common/base';
.page {
  transition: transform 300ms, opacity 250ms;
}
</style>
