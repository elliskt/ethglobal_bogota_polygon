<template>
  <div class="animate__animated animate__fadeIn home">
    <HomeBanner />
    <HotArts />
    <TopArtists />
    <SiteIntro />
    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
import HomeBanner from "../../components/HomeBanner/HomeBanner.vue";
import HotArts from "../../components/HotArts/HotArts.vue";
import TopArtists from "../../components/TopArtists/TopArtists.vue";
import SiteIntro from "../../components/SiteIntro/SiteIntro.vue";
import Footer from "../../components/Footer/Footer.vue";
import "animate.css";
</script>

<style lang="less" scoped>
@import url("../../assets/Style/HomePage.less");
</style>
