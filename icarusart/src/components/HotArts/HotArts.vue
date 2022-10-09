<template>
  <div class="hotArts">
    <div class="artsContainer">
      <div class="title">
        <div class="title__left">
          <h1>{{ $t("hotArts.title.left.hot") }}</h1>
          <h3>{{ $t("hotArts.title.left.update") }}</h3>
        </div>
        <div class="title__right">
          {{ $t("hotArts.title.right.allArts") }}
        </div>
      </div>
      <ul class="hotArts__skeleton" v-if="skeLoading">
        <li v-for="(item, index) in 8" :key="index">
          <CardItem>
            <HotArts__skeleton />
          </CardItem>
        </li>
      </ul>
      <ul class="hotArts__list" v-if="!skeLoading">
        <li v-for="(item, index) in artList" :key="index" @click="enjoyTheCol(index)">
          <CardItem>
            <div class="hotArtsContainer">
              <div class="banner">
                <img :src="item.imgURL" alt="" />
              </div>
              <div class="bottom">
                <div class="left">
                  <h2 class="name">NFT-133434222222</h2>
                  <div class="creator">
                    <img src="../../assets/images/1.gif" alt="">
                    <span>@123456sdfsdfsdfsdsdfsfd7</span>
                  </div>
                </div>
                <div class="right">
                  <button class="priceButton">
                    <span> 1 ETH
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </CardItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch, watchEffect } from "vue";
import HotArts__skeleton from "../HotArts__skeleton/HotArts__skeleton.vue";
import { useRouter } from "vue-router";
import { showPic } from '../../api/api'
import CardItem from "../CardItem/CardItem.vue";
const router = useRouter();

const skeLoading = ref(true);
const artList = ref([
  {
    name: "pepe-1",
    owner: "***nobody***",
    imgURL: require("../../assets/images/1.gif"),
    forSale: true,
    inAuction: false,
    upcomingAuction: false,
    notForSale: false,
    price: 1.09,
  },
  {
    name: "pepe-2",
    owner: "***nobody***",
    imgURL: require("../../assets/images/2.gif"),
    forSale: false,
    inAuction: true,
    upcomingAuction: false,
    notForSale: false,
    day: "",
    price: 3.8,
  },
  {
    name: "pepe-3",
    owner: "***nobody***",
    imgURL: require("../../assets/images/3.gif"),
    forSale: false,
    inAuction: false,
    upcomingAuction: true,
    notForSale: false,
    price: 4.77,
  },
  {
    name: "pepe-4",
    owner: "***nobody***",
    imgURL: require("../../assets/images/4.gif"),
    forSale: false,
    inAuction: false,
    upcomingAuction: false,
    notForSale: true,
  },
  {
    name: "pepe-5",
    owner: "***nobody***",
    imgURL: require("../../assets/images/5.gif"),
    forSale: false,
    inAuction: true,
    upcomingAuction: false,
    notForSale: false,
    price: 2.33,
  },
  {
    name: "pepe-6",
    owner: "***nobody***",
    imgURL: require("../../assets/images/6.gif"),
    forSale: true,
    inAuction: false,
    upcomingAuction: false,
    notForSale: false,
    price: 5.67,
  },
  {
    name: "pepe-7",
    owner: "***nobody***",
    imgURL: require("../../assets/images/7.gif"),
    forSale: true,
    inAuction: false,
    upcomingAuction: false,
    notForSale: false,
    price: 15.6,
  },
  {
    name: "pepe-8",
    owner: "***nobody***",
    imgURL: require("../../assets/images/8.gif"),
    forSale: false,
    inAuction: false,
    upcomingAuction: false,
    notForSale: true,
  },
]);
watchEffect(() => {
  // 模拟从后端拿数据
  setTimeout(() => {
    skeLoading.value = false;
  }, 1000);
});
onMounted(() => {
  getPicture();
})
async function getPicture() {
  const result = await showPic(0, 'purchase', 'single')
  console.log('result:', result);
}

function enjoyTheCol(index) {
  router.push({
    path: '/collection',
    query: {
      collectionId: index
    }
  })
}
function calculateCountDown(endTime) {
  const now = new Date();
  return endTime - now;
}
</script>

<style lang="less" scoped>
@import url("../../assets/Style/HotArts.less");
</style>
