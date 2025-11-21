<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

    <nav class="navbar container">
        <ul>
            <li class="text-black">
                <RouterLink :to="{ name: 'home' }">Home</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'Anime' }">Anime</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'HollyWood' }">HollyWood</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'BollyWood' }">BollyWood</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'tv' }"> TV Series</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'Kdrama' }">Kdrama</RouterLink>
            </li>
            <li>
                <input v-model="search" placeholder="search something" type="text" class="border rounded-md center" />
            </li>
        </ul>
    </nav>

</template>

<style lang="scss" scoped></style>