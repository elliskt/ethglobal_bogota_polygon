<template>
  <div class="createCollection animate__animated animate__fadeIn">
    <div class="createCollectionContainer">
      <div class="title">
        <h1>{{ $t('collection.create') }}</h1>
        <h3>{{ $t('collection.titleIntro') }}</h3>
      </div>
      <div class="center">
        <h2>{{ $t('collection.chooseType') }}</h2>
        <div class="centerContainer">
          <div class="collectionContainer">
            <div class="collection">
              <img src="../../assets/images/single.jpeg" alt="">
              <div class="createBtn">
                <div class="btns" @click="createSingleCollection">
                  {{ $t('collection.createSingle') }}
                </div>
              </div>
            </div>
            <span>{{ $t('collection.singleIntro') }}</span>
          </div>
          <div class="collectionContainer">
            <div class="collection">
              <img src="../../assets/images/multi.jpeg" alt="">
              <div class="createBtn">
                <div class="btns" @click="createMultiCollection">
                  {{ $t('collection.createMulti') }}
                </div>
              </div>
            </div>
            <span>{{ $t('collection.multiIntro') }}</span>
          </div>
          <div class="collectionContainer">
            <div class="collection">
              <img src="../../assets/images/quantum.jpg" alt="">
              <div class="createBtn">
                <div class="btns" @click="createQuantumArt">
                  {{ $t('collection.createQuantum') }}
                </div>
              </div>
            </div>
            <span>{{ $t('collection.quantumIntro') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
import { useRouter } from "vue-router";
import Footer from "../../components/Footer/Footer.vue";
import 'animate.css'
const router = useRouter();
function createSingleCollection() {
  router.push({
    path: '/singleCollections'
  })
}
function createMultiCollection() {
  router.push({
    path: '/multiCollections'
  })
}
function createQuantumArt() {
  
}
</script>

<style lang="less" scoped>
@import url('../../assets/Style/Collection.less');
</style>
