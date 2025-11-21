<script setup>
import { RouterLink } from 'vue-router';
import { useStore } from '@/stores/store';

const store = useStore().movieList
const tv = store.Tv

</script>

<template>
    <div> <br>
        <RouterLink :to="{ name: 'tv', params: { categoryName: 'Tv' } }">
            <h1>TV Series</h1>
        </RouterLink> <br>
        <div class="container-box">
            <RouterLink v-for="serie in tv" :to="{ name: 'MovieDetail', params: { categoryName: 'Tv', id: serie.id } }">
                <div class="box">
                    <h3>{{ serie.title }} - {{ serie.releaseDate }}</h3> <br></br>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>