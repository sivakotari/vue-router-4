<template>
    <div id="nav">
    <AppLink to="/">Travel Destinations</AppLink>
    <!-- <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/jamaica">Jamaica</router-link> -->

    <AppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination', params: {slug: destination.slug}}"
        >
            {{destination.name}}
    </AppLink>

    <AppLink :to="{name: 'login'}">Login</AppLink>
    <AppLink to="https://google.co.in">Goto Google</AppLink>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";

const destinations = sourceData.destinations;
</script>