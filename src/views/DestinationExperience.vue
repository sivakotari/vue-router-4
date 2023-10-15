<template>
  <div v-if="experience" class="experience-details">
    <h3>{{ experience.name }}</h3>
    <img :src="`/images/${experience.image}`" :alt="experience.name">
    <p>{{ experience.description }}</p>
  </div>
</template>

<script setup>
// import { useRoute } from "vue-router"
import { defineProps, onMounted } from 'vue'
import sourceData from "@/data.json"

// const route = useRoute()
const destination = sourceData.destinations.find((destination) => destination.slug === props.slug)
const experience = destination.experiences.find((experience) => experience.slug === props.experienceSlug)

const props = defineProps({
    slug: {
        type: String,
        required: true
    },
    experienceSlug: {
        type: String,
        required: true
    }
})

onMounted(() => {
//   console.log(route.params);
//   console.log(props);
})
</script>

<style>

</style>