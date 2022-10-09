<template>
  <div class="animate__animated animate__fadeIn gallery">
    <div class="gallery__container">
      <div class="titleArea">
        <div class="title">
          <h1>{{ $t("gallery.artGallery") }}</h1>
          <h3>{{ $t("gallery.update") }}</h3>
        </div>
        <div class="btnsAndSort">
          <ConditionButtons @receiveFromBtns="btnValue" />
          <el-select v-model="value" class="m-2" placeholder="全部" size="large" popper-class="sortBar">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>
      <GalleryItems />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
import ConditionButtons from "../../components/ConditionButtons/ConditionButtons";
import GalleryItems from "../../components/GalleryItems/GalleryItems.vue";
import Footer from "../../components/Footer/Footer.vue";
import "animate.css";

const selectedBtn = ref("");
const value = ref("");
const options = ref([
  {
    value: "最新",
    label: "最新",
  },
  {
    value: "最早",
    label: "最早",
  },
  {
    value: "上周",
    label: "上周",
  },
  {
    value: "上月",
    label: "上月",
  },
]);

function btnValue(value) {
  selectedBtn.value = value;
}
function whenSortClick(event) {
  console.log("sdfsd");
  $(event.target).focus(() => {
    console.log("hhhh");
  });
  if ($(event.target).hasClass("open")) {
    $(event.target).removeClass("open");
  } else {
    $(event.target).addClass("open");
  }
}
</script>

<style lang="less" scoped>
@import url("../../assets/Style/Gallery.less");
</style>
<style lang="less">
.sortBar {
  border-radius: 12px !important;
  box-shadow: 0px 0px 6px 0px #f0f0f0;
  padding: 0 !important;
  background: #fcfcfd;

  & .sort {
    list-style: none;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    & li {
      transition: all ease 0.3s;
      cursor: pointer;
      font-family: "Arial Narrow Regular";
      font-size: 1rem;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 10px 14px;
      color: #828ea0;

      & svg {
        margin-right: 8px;
      }

      &:hover {
        color: #165bbf;
        background-color: #f4f5f9;
      }
    }

    & li:first-child {
      border-radius: 8px 8px 0 0 !important;
    }

    & li:last-child {
      border-radius: 0 0 8px 8px !important;
    }
  }
}
</style>
