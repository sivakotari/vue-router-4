<template>
  <div>
    <h2>Invoices</h2>
  </div>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router';

onBeforeRouteLeave((to, from) => {
  const answer = window.confirm('Are you sure you want to leave?');
  if (!answer) return false;
})
</script>

<style>

</style>