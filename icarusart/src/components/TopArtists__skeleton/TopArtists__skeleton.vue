<template>
  <ul class="topArtists__list">
    <li>
      <div class="card">
        <div class="img"></div>
      </div>
      <div class="nftAndAddress">
        <div class="address">
          <h1></h1>
          <h3></h3>
          <span></span>
        </div>
        <div class="nft">
          <div class="nftItems" v-for="(item,index) in 4" :key="index">
            <div class="nftItems__mask">
              <h1></h1>
            </div>
            <div class="img"></div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
</script>

<style lang="less" scoped>
@import url("../../assets/Style/TopArtists__skeleton.less");
</style>
