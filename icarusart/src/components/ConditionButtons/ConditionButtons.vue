<template>
  <ul class="galleryBtns">
    <li class="selected" @click="select($event, 'inAuction')">
      {{ $t("gallery.inAuction") }}
    </li>
    <li @click="select($event, 'upcomingAuction')">
      {{ $t("gallery.upcomingAuction") }}
    </li>
    <li @click="select($event, 'directAuction')">
      {{ $t("gallery.directAuction") }}
    </li>
    <li @click="select($event, 'Notsale')">
      {{ $t("gallery.Notsale") }}
    </li>
  </ul>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
const emits = defineEmits(["receiveFromBtns", "changeSelectCreatedOrCollected"]);
const props = defineProps(['selectCreatedOrCollected'])
watch(() => props.selectCreatedOrCollected, (newValue) => {
  if (newValue) {
    $(".galleryBtns li").removeClass("selected");
    emits("receiveFromBtns", '');
  }
})
function select(event, selectValue) {
  if ($(event.target).hasClass("selected")) {
    // nothing to do
    emits('changeSelectCreatedOrCollected', '')
  } else {
    $(".galleryBtns li").removeClass("selected");
    $(event.target).addClass("selected");
    emits("receiveFromBtns", selectValue);
    emits('changeSelectCreatedOrCollected', '')
  }
}
</script>

<style lang="less" scoped>
@import url("../../assets/Style/ConditionButtons.less");
</style>
