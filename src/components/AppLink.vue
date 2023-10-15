<template>
  <div>
    <a
      v-if="isExternal"
      :href="props.to"
      target="_blank"
      class="external-link"
    >
      <slot/>
      <sup>ext</sup>
    </a>
    <router-link v-else v-bind="props">
        <slot />
    </router-link>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    ...RouterLink.props
})

const isExternal = computed(() => typeof props.to === 'string' && props.to.startsWith('http'))
console.log('isExternal',isExternal.value, props.to)
</script>
<style scoped>
.external-link {
  color: #00ddb6 !important;
}
</style>