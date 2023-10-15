<template>
    <div v-if="destination">
        <section class="destination">
            <GoBack />
            <h1>{{ destination.name }}</h1>
            <div class="destination-detials">
                <img :src="`/images/${destination.image}`" :alt="destination.name" />
                <p>{{ destination.description }}</p>
            </div>
        </section>
        <section class="experiences">
            <h2>Top Experiences in {{ destination.name }}</h2>
            <div class="cards">
                <AppLink
                    v-for="experience in destination.experiences"
                    :key="experience.slug"
                    :to="{name: 'destination.experience', params: {experienceSlug: experience.slug}}"
                >
                    <ExperienceCard :experience="experience" />
                </AppLink>
            </div>
            <router-view :key="route.path"></router-view>
        </section>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import sourceData from "@/data.json"
import { onMounted, computed, defineProps } from "vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";

const route = useRoute();
// const slug = route.params.slug;
const destination = sourceData.destinations.find((destination) => destination.slug === props.slug)
// const destination = computed(() => {
//     return sourceData.destinations.find((destination) => destination.slug === props.slug)
// })

const props = defineProps({
    slug: {
        type: String,
        required: true
    }
})

onMounted(() => {
//   console.log(destination);
})
</script>