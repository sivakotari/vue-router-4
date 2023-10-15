<template>
    <div class="home">
        <h1>Home view</h1>
        <div class="destinations">
            <AppLink
                v-for="destination in destinations"
                :key="destination.id"
                :to="{name: 'destination', params: {slug: destination.slug}}"
            >
                <h2>{{destination.name}}</h2>
                <img :src="`/images/${destination.image}`" :alt="destination.name">
            </AppLink>
        </div>
    </div>
</template>
<script setup>
import { computed } from "vue";
import sourceData from "@/data.json";

const destinations = computed(() => {
    return sourceData.destinations;
})
</script>