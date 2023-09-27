//create home component
<script setup>
import { authStore } from '../store/store';
const auth = authStore
</script>
<template v-if="auth.user?.role=='admin'">
    <h1 class="text-2xl mb-3">This is Admin page</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque natus eligendi. Dicta ullam obcaecati quidem blanditiis, illum minus possimus earum adipisci sunt accusantium autem. Saepe molestias quaerat enim. Autem.
    </p>
</template>

<style></style>