<template>
    <div class="login">
        <form @submit.prevent="login">
            <h2>Login</h2>
            <label for="username">Username</label>
            <input v-model="username" type="text" id="username" name="username" placeholder="Username" class="input">
            <label for="password">Password</label>
            <input v-model="password" type="password" id="password" name="password" placeholder="Password" class="input">
            <button class="btn">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

function login() {
    // Authentication goes here
    window.user = username.value;

    
    const redirectPath = router.currentRoute.value.query.redirect || 'protected'
    console.log(redirectPath)
    router.push({name: redirectPath})
}
</script>

<style>

</style>