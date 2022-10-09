<template>
  <div class="hotArtsSke">
    <div class="banner"></div>
    <div class="bottom">
      <div class="left">
        <h2 class="name"></h2>
        <div class="creator">
          <div></div>
          <span></span>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
</script>

<style lang="less" scoped>
@import url("../../assets/Style/HotArts__skeleton.less");
</style>
