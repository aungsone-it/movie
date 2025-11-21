<!-- <script setup>
import { useRoute } from 'vue-router';
import { useStore } from '@/stores/store';

const route = useRoute();
const store = useStore().movieList;

// 1. Get the category name from the route params (e.g., 'anime', 'HollyWood')
const categoryName = route.params.categoryName;

// 2. ✅ CORRECTED: Get the string, then convert it to a number (integer)
// The route parameter is a string, and your store IDs are numbers.
const id = parseInt(route.params.id); // e.g., '1' becomes 1

// 3. Dynamically access the correct movie list using bracket notation 
const movieList = store[categoryName];

// 4. Find the movie detail
// This comparison (mov.id === id) now works because both are numbers.
const movDetail = movieList ? movieList.find(mov => mov.id === id) : null;
</script>

<template>
    <div v-if="movDetail">
        <h3>Category: {{ categoryName }}</h3>
        <p>ID: {{ movDetail.id }}</p>
        <p>Title: **{{ movDetail.title }}**</p>
        <p>Release Date: {{ movDetail.releaseDate }}</p>
    </div>
    <div v-else>
        Movie not found
    </div>
</template>

<style scoped></style> -->

<script setup>
import { useRoute } from 'vue-router';
import { useStore } from '@/stores/store';

const store = useStore().movieList
const route = useRoute()
const id = parseInt(route.params.id)
const categoryName = route.params.categoryName
const mov = store[categoryName]

const movDetail = mov?.find(data => data.id === id)

</script>

<template>
    <div v-if="movDetail">
        <h3>{{ movDetail.title }}</h3>
        <h3>
            {{ movDetail.releaseDate }}
        </h3>
    </div>
    <div v-else>movie not found</div>
</template>

<style lang="sass" scoped>

</style>