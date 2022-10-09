<template>
  <div class="hotArtsSke">
    <div class="banner"></div>
    <div class="center">
      <div class="center__container">
        <div class="center__title"></div>
        <div class="center__container__info">
          <div class="centerInfo__image"></div>
          <div class="centerInfo__userName"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom__p"></div>
      <div class="bottom__p"></div>
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
    background: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 60%
      )
      #e1e1e1;
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
    height: 50%;
    border-radius: 12px 12px 0 0;
    .skeItem();
  }

  & .center {
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-left: 1.2rem;
    background-color: #797c82;

    & .center__container {
      width: 100%;
      height: 80%;
      display: flex;
      flex-direction: column;

      & .center__title {
        width: 75%;
        height: 40%;
        border-radius: 8px;
        .skeItem();
        animation-delay: 0.05s;
      }

      & .center__container__info {
        width: 60%;
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        & .centerInfo__image {
          width: 43px;
          height: 40px;
          border-radius: 50%;
          margin-right: 8px;
          .skeItem();
        }

        & .centerInfo__userName {
          width: 80%;
          height: 35%;
          border-radius: 5px;
          .skeItem();
          animation-delay: 0.05s;
        }
      }
    }
  }

  & .bottom {
    width: 100%;
    height: 25%;
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 0 0 12px 12px;
    background-color: #a9a9a9;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .bottom__p {
      width: 100%;
      height: 30%;
      margin: 0 auto;
      margin-bottom: 8px;
      border-radius: 5px;
      .skeItem();
      animation-delay: 0.05s;
    }
  }
}
</style>
