<script setup>
import { useStore } from '@/stores/store';
import { RouterLink } from 'vue-router';
const store = useStore().movieList

</script>

<template>
    <router-link :to="{ name: 'Kdrama' }">
        <h1>K Drama</h1>
    </router-link>
    <div class="container-box">
        <div v-for="drama in store.Kdrama" :key="drama.id">
            <RouterLink :to="{ name: 'MovieDetail', params: { categoryName: 'Kdrama', id: drama.id } }">
                <div class="box">
                    <h1>{{ drama.title }} - {{ drama.releaseDate }}</h1>
                </div>

            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
