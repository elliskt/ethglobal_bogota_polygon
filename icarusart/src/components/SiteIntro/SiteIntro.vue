<template>
  <div class="siteInfo">
    <div class="siteInfo__container">
      <h2>Icarusart.AI is a web3 destination.</h2>
      <p>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. In
        web3, your creativity is valued and your digital objects belong to you.</p>
      <div class="threeBtns">
        <a href="javascript:;">
          <h2>
            Create
          </h2>
          <div>
            Create artworks
          </div>
        </a>
        <a href="javascript:;">
          <h2>
            Collections
          </h2>
          <div>
            You can browse your collections or others collections.
          </div>
        </a>
        <a href="javascript:;">
          <h2>
            Sell
          </h2>
          <div>
            You can easily sell your collections.
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
</script>

<style lang="less" scoped>
@import url("../../assets/Style/SiteIntro.less");
</style>
