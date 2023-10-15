<template>
  <div class="card">
    <img :src="`/images/${props.experience.image}`" :alt="props.experience.name">
    <h3 class="card__text">
        {{ props.experience.name }}
    </h3>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';

const props = defineProps({
    experience: {
        type: Object,
        required: true,
    }
})

// onMounted(() => {
//   console.log(props.experience);
// })
</script>

<style>

</style>