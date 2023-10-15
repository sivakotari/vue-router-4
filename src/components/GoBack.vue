<template>
  <span class="goback">
    <button @click="router.back()">go back</button>
  </span>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style>

</style>