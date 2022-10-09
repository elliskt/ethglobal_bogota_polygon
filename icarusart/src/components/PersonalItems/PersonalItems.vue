<template>
  <ul class="personalItems__skeleton" v-if="skeLoading">
    <li v-for="(item, index) in 12" :key="index">
      <CardItem>
        <GalleryItem__skeleton />
      </CardItem>
    </li>
  </ul>
  <ul class="personalItems__list" v-if="!skeLoading">
    <li v-for="(item, index) in artList" :key="index" @click="enjoyTheCol(index)">
      <CardItem>
        <div class="personalItemContainer">
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
              <button class="priceButtonForOtherPage">
                <span> 1 ETH
                </span>
              </button>
            </div>
          </div>
        </div>
      </CardItem>
    </li>
  </ul>
  <div class="loadMore" v-if="!skeLoading">
    <div class="loadMoreBtn" @click="loadMore">
      <svg v-show="loadMoreIcon" t="1652613666500" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="1910" width="20" height="20">
        <path
          d="M512 74.666667c-17.066667 0-32 14.933333-32 32v149.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V106.666667c0-17.066667-14.933333-32-32-32zM693.333333 362.666667c8.533333 0 17.066667-2.133333 23.466667-8.533334l104.533333-104.533333c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-104.533333 104.533333c-12.8 12.8-12.8 32 0 44.8 4.266667 6.4 12.8 8.533333 21.333333 8.533334zM917.333333 480h-149.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h149.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM714.666667 669.866667c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l104.533333 104.533333c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8l-106.666666-104.533333zM512 736c-17.066667 0-32 14.933333-32 32v149.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-149.333333c0-17.066667-14.933333-32-32-32zM309.333333 669.866667l-104.533333 104.533333c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333l104.533334-104.533333c12.8-12.8 12.8-32 0-44.8s-36.266667-12.8-46.933334 0zM288 512c0-17.066667-14.933333-32-32-32H106.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h149.333333c17.066667 0 32-14.933333 32-32zM247.466667 202.666667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l104.533333 104.533333c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8l-106.666666-104.533333z"
          p-id="1911"></path>
      </svg>
      <span>Load More</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, watch, nextTick } from "vue";
import GalleryItem__skeleton from "../GalleryItem__skeleton/GalleryItem__skeleton.vue";
import { useRouter } from "vue-router";
import CardItem from "../CardItem/CardItem.vue";
const router = useRouter();
const skeLoading = ref(true);
const loadMoreIcon = ref(false);
function enjoyTheCol(index) {
  router.push({
    path: '/collection',
    query: {
      collectionId: index
    }
  })
}

function loadMore() {
  loadMoreIcon.value = true;
  setTimeout(() => {
    loadMoreIcon.value = false;
    artList.value = artList.value.concat(
      artList.value[0],
      artList.value[1],
      artList.value[2],
      artList.value[3]
    );
    if ($('.personal')[0].style.height == '100vh') {
      nextTick(() => {
        console.log('document.body.scrollHeight > window.innerHeight:', document.body.scrollHeight > window.innerHeight);
        if (document.body.scrollHeight > window.innerHeight) {
          console.log('有滚动条');
          $('.personal').css({ height: '100%' })
        } else {
          console.log('无滚动条');
          $('.personal').css({ height: '100vh' })
        }
      })
    }
  }, 2000);
}
const artList = ref([
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
watch(() => skeLoading.value, (newValue) => {
  if (!newValue) {
    console.log('newVale:', newValue);
    nextTick(() => {
      console.log('document.body.scrollHeight > window.innerHeight:', document.body.scrollHeight > window.innerHeight);
      if (document.body.scrollHeight > window.innerHeight) {
        console.log('有滚动条');
        $('.personal').css({ height: '100%' })
      } else {
        console.log('无滚动条');
        $('.personal').css({ height: '100vh' })
      }
    })

  }
})
watchEffect(() => {
  // 模拟从后端拿数据
  setTimeout(() => {
    skeLoading.value = false;
  }, 2000);
});
</script>

<style lang="less" scoped>
& .personalItems__skeleton,
.personalItems__list {
  width: 980px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  margin-top: 2rem;
  gap: 0 10px;

  & li {
    width: 32%;
    height: 26.7648rem;
    cursor: pointer;
    margin-bottom: 1rem;
    border-radius: 12px;
    box-shadow: 0px 32px 32px rgba(31, 47, 70, 12%);
  }
}

.personalItems__list {
  & li {
    transition: all ease 0.3s;

    .personalItemContainer {
      width: 100%;
      height: 100%;

      & .banner {
        width: 100%;
        height: 70%;
        border-radius: 12px 12px 0 0;

        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px 12px 0 0;
        }
      }

      & .bottom {
        width: 100%;
        height: 30%;
        background-color: #fff;
        border-radius: 0 0 12px 12px;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 20px;

        & .left {
          width: 50%;
          height: 50%;

          & .name {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          & .creator {
            margin: 0 auto;
            padding: 10px 0;
            display: flex;
            align-items: center;
            color: #000;

            & img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-right: 8px;
            }

            & span {
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }

        & .right {
          width: 40%;
          height: 50%;
          display: flex;
          align-items: flex-end;
        }
      }
    }
  }
}

& .loadMore {
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes rotate-loop {
    to {
      transform: rotate(360deg);
    }
  }

  & .loadMoreBtn {
    border-radius: 30px;
    border: 2px solid #e4e4ea;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    transition: all ease 0.3s;
    padding: 10px 30px;

    &:hover {
      background-color: @icarus_colors-blue100;
      border: 2px solid @icarus_colors-blue100;
      color: #fff;

      & svg {
        & path {
          fill: #fff;
        }
      }
    }

    & svg {
      animation: rotate-loop 1s linear forwards infinite;
      margin-right: 1rem;
    }
  }
}
</style>
