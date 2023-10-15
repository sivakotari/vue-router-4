<script setup>
import { useRoute } from 'vue-router'
import TheNavigation from '@/components/TheNavigation.vue'

const route = useRoute()
</script>

<template>
  <TheNavigation />

  <div class="container">
    <!-- <router-view :key="route.path"></router-view> -->

    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>