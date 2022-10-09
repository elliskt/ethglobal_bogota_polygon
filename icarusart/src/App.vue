<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>
<script setup>
import { watchEffect, onUnmounted } from "vue";
import Header from "../src/components/Header/Header.vue";
import { useRouter } from "vue-router";
const router = useRouter();

window.localStorage.setItem("baseUrl", "/kk/");
// 判断一下当前钱包是否已经登录
watchEffect(() => {
  isConnected();
});
async function isConnected() {
  const address = await window.ethereum.request({
    method: "eth_accounts",
  });
  if (address.length == 0) {
    window.localStorage.setItem("isConnected", false);
  } else {
    window.localStorage.setItem("isConnected", true);
  }
}
async function listenAccountsChange() {
  const addr = await window.ethereum.request({
    method: "eth_accounts",
  });
  if (addr.length !== 0) {
    window.localStorage.setItem("isConnected", true);
  } else {
    window.localStorage.setItem("isConnected", false);
    router.push("/");
  }
}
window.ethereum.on("accountsChanged", listenAccountsChange);
/**
 * unmounted的时候，移除两个监听器
 */
onUnmounted(() => {
  window.ethereum.removeListener("accountsChanged", listenAccountsChange);
});
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  font-family: 'AlegreyaSansSC-Regular';
}

.app {
  width: 100%;
  // height: 100%;
  // height: max-content;
  // overflow: auto;
  background-color: #fff;
  position: relative;
  box-sizing: border-box;

  img[src=""],
  img:not([src]) {
    opacity: 0;
  }

  .priceButton {
    position: relative;
    height: 50px;
    padding: 0 30px;
    border: 2px solid @icarus_colors-fontColor1;
    background: #273469;
    user-select: none;
    white-space: nowrap;
    transition: all .05s linear;
    font-family: inherit;
    border-radius: 8px;
    color: @icarus_colors-fontColor1;

    &:before,
    &:after {
      content: "";
      position: absolute;
      background: #273469;
      transition: all .2s linear;
    }

    &:before {
      width: calc(100% + 6px);
      height: calc(100% - 16px);
      top: 8px;
      left: -3px;
    }

    &:after {
      width: calc(100% - 16px);
      height: calc(100% + 6px);
      top: -3px;
      left: 8px;
      
    }

    &:hover {
      cursor: crosshair;
    }

    &:active {
      transform: scale(0.95);
    }

    &:hover:before {
      height: calc(100% - 32px);
      top: 16px;
    }
    &:hover:after {
      width: calc(100% - 32px);
      left: 16px;
    }

    & span {
      font-size: 15px;
      z-index: 3;
      position: relative;
      font-weight: 600;
    }
  }

  .priceButtonForOtherPage {
    .priceButton();
    background-color: #e5e5e5;
    color: #000;
    border: 2px solid #000;
    &:before,&:after{
      background-color: #e5e5e5;
    }
  }
}
</style>
