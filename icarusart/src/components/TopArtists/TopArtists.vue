<template>
  <div class="topArtists">
    <div class="topArtist__container">
      <div class="title">
        <div class="title__left">
          <h1>{{ $t("topArtists.title.left.top") }}</h1>
          <h3>{{ $t("topArtists.title.left.recommend") }}</h3>
        </div>
        <div class="title__right">
          {{ $t("topArtists.title.right.allArtists") }}
        </div>
      </div>
      <ul class="topArtists__skeleton" v-if="skeLoading">
        <li v-for="(item, index) in 5" :key="index">
          <TopArtistsSkeleton />
        </li>
      </ul>
      <ul class="topArtists__list" v-if="!skeLoading">
        <li v-for="(item, index) in artistsList" :key="index"
          :style="{backgroundImage:'url('+item.backgroundImage+')'}">
          <div class="card">
            <img src="../../assets/images/space.jpeg" alt="">
          </div>
          <div class="nftAndAddress">
            <div class="address">
              <h1>IcarusArt user</h1>
              <h3>0xA749Cdefd2D9590549dF709BBfFec04a9Bd35b42</h3>
              <span>5 NFTs</span>
            </div>
            <div class="nft">
              <div class="nftItems" v-for="(item,index) in nfts" :key="index">
                <div class="nftItems__mask">
                  <h1>{{item.name}}</h1>
                </div>
                <img :src="item.image" alt="">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch, watchEffect } from "vue";
import TopArtistsSkeleton from "../TopArtists__skeleton/TopArtists__skeleton.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const artistsList = ref([
  {
    avatar: require("../../assets/images/8.gif"),
    banner: require("../../assets/images/Snipaste_2022-05-05_14-49-09.png"),
    userName: "Pepe-8",
    description: "This is a meme of Pepe.",
    backgroundImage: "https://f8n-production.imgix.net/collections/aiatc0b0s-2.png?q=50&auto=format%2Ccompress&fit=crop&max-w=1600&max-h=596&exp=-5&blur=180"
  },
  {
    avatar: require("../../assets/images/7.gif"),
    banner: require("../../assets/images/Snipaste_2022-05-05_14-49-09.png"),
    userName: "Pepe-7",
    description: "This is a meme of Pepe.",
    backgroundImage: "https://f8n-production.imgix.net/collections/40gf4acjs.jpg?q=50&auto=format%2Ccompress&fit=crop&max-w=1600&max-h=596&exp=-5&blur=180"

  },
  {
    avatar: require("../../assets/images/6.gif"),
    banner: require("../../assets/images/Snipaste_2022-05-05_14-49-09.png"),
    userName: "Pepe-6",
    description: "This is a meme of Pepe.",
    backgroundImage: "https://f8n-production.imgix.net/collections/5z3zl6qg4-motel-cover.jpg?q=50&auto=format%2Ccompress&fit=crop&max-w=1600&max-h=596&exp=-5&blur=180"
  },
  {
    avatar: require("../../assets/images/5.gif"),
    banner: require("../../assets/images/Snipaste_2022-05-05_14-49-09.png"),
    userName: "Pepe-5",
    description: "This is a meme of Pepe.",
    backgroundImage: "https://f8n-production.imgix.net/collections/ibci9qdcd-IMG_2313.JPG?q=50&auto=format%2Ccompress&fit=crop&max-w=1600&max-h=596&exp=-5&blur=180"
  },
  {
    avatar: require("../../assets/images/4.gif"),
    banner: require("../../assets/images/Snipaste_2022-05-05_14-49-09.png"),
    userName: "Pepe-4",
    description: "This is a meme of Pepe.",
    backgroundImage: "https://f8n-production.imgix.net/collections/deb6vp1xw-G_U_S_.jpg?q=50&auto=format%2Ccompress&fit=crop&max-w=1600&max-h=596&exp=-5&blur=180"
  },
]);
const nfts = [
  {
    name: 'nft1',
    image: 'https://f8n-production-collection-assets.imgix.net/0x50DB3DE6B9d98775022Bb534eA270ff423bb05E0/10/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680',
  },
  {
    name: 'nft2',
    image: 'https://f8n-production-collection-assets.imgix.net/0x62C8d64453F3Cd79AAf2db307Ce985747b5DC014/63/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680',
  },
  {
    name: 'nft3',
    image: 'https://f8n-production-collection-assets.imgix.net/0x62C8d64453F3Cd79AAf2db307Ce985747b5DC014/65/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680',
  },
  {
    name: 'nft4',
    image: 'https://f8n-production-collection-assets.imgix.net/0xBE29E20c1f28433FF182a82132800F7aA79c3a02/44/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680',
  }
]
const skeLoading = ref(true);
watchEffect(() => {
  // 模拟从后端拿数据
  setTimeout(() => {
    skeLoading.value = false;
  }, 2000);
});
function goPersonal(address) {
  router.push({
    path: '/personal',
    query: {
      address: address
    }
  })
}
</script>

<style lang="less" scoped>
@import url("../../assets/Style/TopArtists.less");
</style>
