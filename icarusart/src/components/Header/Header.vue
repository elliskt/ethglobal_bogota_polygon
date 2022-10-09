<template>
  <div class="header">
    <div class="header__container__outer">
      <div class="header__container">
        <div class="header__left">
          <div class="logo__container">
            <img @click="backToHomePage" src="../../assets/images/icaalogogray.svg" alt="" />
          </div>
          <!-- <div class="search">
          <input type="text" :placeholder="$t('header.left.search')" />
          <svg
            t="1651669710785"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12194"
            width="22"
            height="22"
          >
            <path
              d="M412.45184 670.512128c141.384704 0 256-114.615296 256-256s-114.615296-256-256-256-256 114.615296-256 256 114.615296 256 256 256z m241.847296-57.46688l255.670272 255.670272c11.108352 11.108352 11.108352 29.118464 0 40.226816-11.107328 11.108352-29.11744 11.108352-40.225792 0L614.352896 653.551616c-54.493184 46.072832-124.9536 73.849856-201.901056 73.849856-172.803072 0-312.88832-140.085248-312.88832-312.889344S239.648768 101.623808 412.45184 101.623808c172.804096 0 312.889344 140.084224 312.889344 312.88832 0 75.37152-26.650624 144.519168-71.042048 198.53312z"
              fill="#707070"
              p-id="12195"
            ></path>
          </svg>
        </div> -->
          <!-- <div class="container-button">
          <div class="switch-button">
            <span class="active"></span>
            <button class="text switch-button-case left active-case">
              Heco
            </button>
            <button class="text switch-button-case right">Ethereum</button>
          </div>
        </div> -->
        </div>
        <ul class="header__right">
          <el-popover placement="bottom" trigger="hover" popper-class="language" transition="el-fade-in-linear"
            :show-after="100" :show-arrow="false">
            <template #reference>
              <li>
                {{ $t("header.right.discover") }}
                <svg t="1663835689856" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="4862" width="10" height="10">
                  <path
                    d="M126.040 295.7c18.8-18.8 49.1-18.801 67.901 0l318 318 318-318c18.8-18.8 49.2-18.8 67.901 0 18.8 18.8 18.801 49.1 0 67.901l-352 352c-18.8 18.8-49.2 18.8-67.901 0l-352-352c-9.4-9.4-14-21.7-14-34 0.1-12.2 4.7-24.501 14.1-33.9z"
                    p-id="4863" fill="#ffffff"></path>
                </svg>
              </li>
            </template>
            <ul class="languageList">
              <li class="gallery" @click="browseGallery">
                <span>
                  画廊
                </span>
              </li>
              <li class="setPrice" @click="goSetPrice">
                <span>
                  艺术品定价
                </span>
              </li>

            </ul>
          </el-popover>
          <el-popover placement="bottom" trigger="hover" popper-class="language" transition="el-fade-in-linear"
            :show-after="100" :show-arrow="false">
            <template #reference>
              <li>
                {{ $t("header.right.language") }}
                <svg t="1663835689856" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="4862" width="10" height="10">
                  <path
                    d="M126.040 295.7c18.8-18.8 49.1-18.801 67.901 0l318 318 318-318c18.8-18.8 49.2-18.8 67.901 0 18.8 18.8 18.801 49.1 0 67.901l-352 352c-18.8 18.8-49.2 18.8-67.901 0l-352-352c-9.4-9.4-14-21.7-14-34 0.1-12.2 4.7-24.501 14.1-33.9z"
                    p-id="4863" fill="#ffffff"></path>
                </svg>
              </li>
            </template>
            <ul class="languageList">
              <li class="en" @click="changeLan('en')">
                <span>
                  {{ $t("header.right.languageList.en") }}
                </span>
              </li>
              <li class="zh" @click="changeLan('zh')">
                <span>
                  {{ $t("header.right.languageList.zh") }}
                </span>
              </li>
              <li class="spain" @click="changeLan('spa')">
                <span>
                  {{ $t("header.right.languageList.spain") }}
                </span>
              </li>
            </ul>
          </el-popover>
          <el-badge is-dot class="item" type="success">
            <li class="badge">
              <svg t="1651668637934" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="11317" width="22" height="22">
                <path
                  d="M512 64a64 64 0 0 1 63.658667 70.826667c114.517333 24.533333 215.338667 115.328 227.072 272.042666l0.768 13.226667v116.522667c0 4.48 0.469333 8.96 1.408 13.312l1.706666 6.442666 69.589334 214.656a16.042667 16.042667 0 0 1-12.074667 20.650667l-3.157333 0.341333H163.029333a16 16 0 0 1-15.914666-17.877333l0.682666-3.114667 69.546667-214.613333c1.408-4.266667 2.346667-8.661333 2.816-13.098667l0.341333-6.698666V418.176c7.082667-164.778667 110.208-259.242667 227.84-283.733333A64 64 0 0 1 512 64z m-0.938667 128c-28.373333 0-55.893333 4.778667-81.92 14.250667a215.04 215.04 0 0 0-70.485333 41.898666c-21.418667 19.2-38.528 42.581333-50.901333 69.632a267.434667 267.434667 0 0 0-22.314667 87.850667l-0.938667 13.952v117.034667c0 10.069333-1.194667 20.053333-3.498666 29.824l-2.730667 9.685333-49.237333 151.893333h565.930666l-49.237333-151.893333a127.829333 127.829333 0 0 1-5.845333-29.44l-0.384-10.069333V421.461333c-1.706667-37.888-9.6-72.362667-23.381334-102.442666a212.138667 212.138667 0 0 0-122.496-112.64 240.256 240.256 0 0 0-82.56-14.378667zM447.488 848a32 32 0 0 0-28.672 46.250667 104.021333 104.021333 0 0 0 186.368 0 32 32 0 0 0-28.672-46.250667h-129.024z"
                  p-id="11318" fill="#707070"></path>
              </svg>
            </li>
          </el-badge>

          <!-- <li @click="login">
          {{ address }}
        </li> -->
          <div class="button-borders" @click="login">
            <button class="primary-button"> {{
            walletAddress.length==0?address:walletAddress.slice(0,10)+'...'+walletAddress.slice(35,42) }}
            </button>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  onMounted,
  onUnmounted,
  computed,
  watch,
  watchEffect,
} from "vue";
import "animate.css";
import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const walletAddress = computed(() => store.state.walletAddress);
const router = useRouter();

const { locale, t } = useI18n();
const address = computed(() => t("header.right.connect"))

watchEffect(() => {
  getMetamaskAddress();
});
function browseGallery() {
  router.push("/gallery");
}

function goSetPrice() {
  router.push('/setPrice')
}
function backToHomePage() {
  router.push("/");
}
function goToPersonal() {
  router.push({
    path: "/personal",
    query: {
      address: walletAddress.value,
    },
  });
}
async function listenAccountsChange() {
  if (window.ethereum) {
    const addr = await window.ethereum.request({
      method: "eth_accounts",
    });
    if (addr.length !== 0) {
      address.value = addr[0].slice(0, 10) + "..." + addr[0].slice(35, 42);
      store.commit("saveWalletAddress", addr[0]);
    } else {
      address.value = t("header.right.connect");
      store.commit("saveWalletAddress", "");
    }
  }

}
if (window.ethereum) {
  window.ethereum.on("accountsChanged", listenAccountsChange);
}

async function listenChainChange(chainId) {
  var switchBtnRight = document.querySelector(".switch-button-case.right");
  var switchBtnLeft = document.querySelector(".switch-button-case.left");
  var activeSwitch = document.querySelector(".active");

  if (Number(chainId) == 1) {
    switchBtnRight.classList.add("active-case");
    switchBtnLeft.classList.remove("active-case");
    activeSwitch.style.left = "50%";
  } else if (Number(chainId) == 128) {
    switchBtnRight.classList.remove("active-case");
    switchBtnLeft.classList.add("active-case");
    activeSwitch.style.left = "0%";
  }
}
if (window.ethereum) {
  window.ethereum.on("chainChanged", listenChainChange);
}
/**
 * unmounted的时候，移除监听器
 */
onUnmounted(() => {
  if (window.ethereum) {
    window.ethereum.removeListener("accountsChanged", listenAccountsChange);
    window.ethereum.removeListener("chainChanged", listenChainChange);
  }
});
async function getMetamaskAddress() {
  if (window.ethereum) {
    const addr = await window.ethereum.request({
      method: "eth_accounts",
    });
    if (addr.length !== 0) {
      address.value = addr[0].slice(0, 10) + "..." + addr[0].slice(35, 42);
      store.commit("saveWalletAddress", addr[0]);
    } else {
      address.value = t("header.right.connect");
      store.commit("saveWalletAddress", "");
    }
    return addr[0];
  }

}
async function login() {
  if (window.ethereum) {
    if (window.localStorage.getItem("isConnected") == "false") {
      if ((await window.ethereum.request({ method: "net_version" })) == 1) {
        try {
          await window.ethereum
            .request({
              method: "eth_requestAccounts",
            })
            .then((res) => {
              address.value =
                res[0].slice(0, 10) + "..." + res[0].slice(35, 42);
            });
          window.localStorage.setItem("isConnected", true);
        } catch (error) {
          ElMessage({
            message: "User denied account access",
            type: "error",
          });
        }
      } else if (
        (await window.ethereum.request({ method: "net_version" })) == 128
      ) {
        try {
          await window.ethereum
            .request({
              method: "eth_requestAccounts",
            })
            .then((res) => {
              address.value =
                res[0].slice(0, 10) + "..." + res[0].slice(35, 42);
            });
          window.localStorage.setItem("isConnected", true);
        } catch (error) {
          ElMessage({
            message: "User denied account access",
            type: "error",
          });
        }
      } else {
        ElMessage({
          message: "Chain error",
          type: "message",
        });
      }
    } else {
      goToPersonal();
    }
  } else {
    ElMessage({
      message: "Browser wallet extension not detected.",
      type: "error",
    });
  }
}
function changeLan(lan) {
  window.localStorage.setItem("language", lan);
  locale.value = lan;
}
</script>

<style lang="less" scoped>
@import url("../../assets/Style/Header.less");
</style>
<style lang="less">
.language {
  width: 6rem !important;
  // height: 6rem !important;
  min-width: 50px !important;
  border-radius: 8px !important;
  padding-bottom: 0 !important;
  transition: all ease 0.3s;
  padding: 5px !important;

  & svg {
    margin-left: 5px;

    & path {
      font-weight: 900;
    }
  }

  // box-sizing: border-box;
  & .languageList {
    list-style: none;
    width: 100%;
    height: 100%;

    & li {
      // width: 100%;
      // height: 30%;
      padding: 10px 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      border-radius: 8px;
      user-select: none;

      &:hover {
        background-color: #f2f2f2;
      }

      & span {
        transition: all ease 0.3s;
      }
    }
  }
}

.el-badge {
  margin-right: 5%;
}

.el-badge__content--success {
  background-color: #00ba5d !important;
}

.el-badge__content {
  border: none !important;
}
</style>
