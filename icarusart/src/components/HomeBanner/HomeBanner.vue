<template>
  <div class="homeBanner">
    <iframe src="./homeBc.html" frameborder="0" class="iframe"></iframe>
    <div class="homeContainer">
      <div class="leftInfo">
        <h1>{{ $t("homeBanner.left.global") }}</h1>
        <h2 class="h2-1">{{ $t("homeBanner.left.firstArt") }}</h2>
        <h2 class="h2-2">{{ $t("homeBanner.left.platform") }}</h2>
        <div class="browseAndCreate">
          <!-- <div class="browse" @click="browseGallery">
            {{ $t("homeBanner.left.browse") }}
          </div> -->
          <!-- <div class="create" @click="goCreateCollection">
            {{ $t("homeBanner.left.create") }}
          </div> -->
          <a class="fancy" href="javasript:;" @click="browseGallery">
            <span class="top-key"></span>
            <span class="text">{{ $t("homeBanner.left.browse") }}</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
          </a>
          <a class="fancy" href="javasript:;" @click="goCreateCollection">
            <span class="top-key"></span>
            <span class="text">{{ $t("homeBanner.left.create") }}</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
          </a>
        </div>
        <div class="howToBeArtist">
          {{ $t("homeBanner.left.howToBeArtist") }}
        </div>
      </div>
      <div class="rightCollection">
        <img class="mainImg" src="../../assets/images/30243161.png" alt="" />
        <div class="colInfo">
          <div class="colInfo__left">
            <img src="../../assets/images/Snipaste_2022-05-05_14-49-09.png" alt="" />
            <span>@hwx</span>
          </div>
          <div class="colInfo__right">
            <div class="currentPrice">
              {{ $t("homeBanner.right.currentPrice") }}
            </div>
            <div class="price">897.78909 <span>USDT</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function browseGallery() {
  router.push("/gallery");
}
function goCreateCollection() {
  router.push('/createCollection')
}
</script>

<style lang="less" scoped>
@import url("../../assets/Style/HomeBanner.less");
</style>
