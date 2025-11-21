<script setup>
import { useStore } from '@/stores/store';
import { RouterLink } from 'vue-router';


const store = useStore().movieList
const holly = store.HollyWood
</script>

<template> <br>
    <RouterLink :to="{ name: 'HollyWood', params: { categoryName: 'HollyWood' } }">
        <h1>HollyWood Movies</h1>
    </RouterLink>
    <br>
    <div class="container-box">
        <RouterLink v-for="mov in holly" :key="mov.id"
            :to="{ name: 'MovieDetail', params: { categoryName: 'HollyWood', id: mov.id } }">
            <div class="box">
                <h3>{{ mov.title }} - {{ mov.releaseDate }}</h3> <br></br>
            </div>

        </RouterLink>
    </div>
</template>

<style lang="scss" scoped></style>