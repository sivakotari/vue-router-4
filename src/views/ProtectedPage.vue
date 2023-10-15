<template>
    <div>
        <span>Greetings, <b>{{ user }}</b></span>
        <p>Protected page. Only accessible with authentication</p>
        <button @click="logout">Logout</button>
        <AppLink :to="{name: 'invoices'}">
            <button>Invoices</button>
        </AppLink>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const user = window.user

function logout() {
    window.user = null
    router.push({name: 'home'})
}
</script>