<script setup>
import { useStore } from '@/stores/store';
const movieListData = useStore().movieList 
</script>

<template>
    <div> <br>

        <RouterLink :to="{ name: 'Anime', params: { categoryName: 'anime' } }">
            <h2 class="">Anime</h2>
        </RouterLink>
        <br>

        <div class="container-box ">
            <RouterLink v-for="movie in movieListData.anime" :key="movie.id"
                :to="{ name: 'MovieDetail', params: { categoryName: 'anime', id: movie.id } }">
                <div class="box">
                    <h1>{{ movie.id }} - {{ movie.title }} - {{ movie.releaseDate }}</h1> <br></br>
                </div>
            </RouterLink>
        </div>

    </div> <br><br>

</template>

<style lang="scss" scoped></style>