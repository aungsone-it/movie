<script setup>
import Anime from './Anime.vue';
import Kdrama from './Kdrama.vue';
import HollyWood from './HollyWood.vue';
// import BollyWood from './BollyWood.vue';
import TvSeries from './TvSeries.vue';
import Footer from './footer.vue'

</script>

<template>
    <main class="main">
        <section class="section banner-section">
            <div class="container banner-column">
                <img src="https://i.imghippo.com/files/gJf9722OfM.png" class="banner-image" width="480" height="360"
                    fetchpriority="high" alt="banner image">
                <div class="banner-inner">
                    <h1 class="title-large">Experience Media Like Never Before</h1>
                    <p class="text-base font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sequi eius voluptatum consectetur
                        nam ipsum, repellat dolorum inventore earum maxime officiis, dignissimos, modi doloribus

                    </p>
                    <!-- <button type="button" class="btn btn-primary">
                        Discover Now <i class="bx bx-chevron-right"></i>
                    </button> -->

                </div>
                <div class="banner-link">
                    <a href="#" title=""><i class="bx bxl-facebook"></i></a>
                    <a href="#" title=""><i class="bx bxl-instagram"></i></a>
                    <a href="#" title=""><i class="bx bxl-twitter"></i></a>
                    <a href="#" title=""><i class="bx bxl-youtube"></i></a>
                </div>
            </div>
        </section>
    </main>
    <hr>
    <section class="">
        <Anime />
        <hr>
        <HollyWood />
        <hr>
        <TvSeries />
        <hr>
        <Kdrama />
        <hr>
        <!-- <BollyWood /> -->
        <!-- <hr> -->
        <Footer />
    </section>
</template>

<style lang="scss" scoped></style>