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
@skeItemBackgroundColor: #23282a;

.hotArtsSke {
  width: 100%;
  height: 100%;

  // 公共的动画效果类
  .skeItem {
    background: linear-gradient(100deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 60%) #e1e1e1;
    background-color: skeItemBackgroundColor;
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loading ease-in-out infinite;

    @keyframes loading {
      to {
        background-position-x: -20%;
      }
    }
  }

  & .banner {
    width: 100%;
    height: 70%;
    border-radius: 12px 12px 0 0;
    .skeItem();
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
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .skeItem();

      }

      & .creator {
        margin: 0 auto;
        padding: 10px 0;
        display: flex;
        align-items: center;
        color: #000;

        & div {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 8px;
          .skeItem();

        }

        & span {
          width: 90%;
          height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .skeItem();

        }
      }
    }

    & .right {
      width: 40%;
      height: 50%;
      display: flex;
      align-items: flex-end;
      border-radius: 8px;
      .skeItem();

    }
  }
}
</style>
