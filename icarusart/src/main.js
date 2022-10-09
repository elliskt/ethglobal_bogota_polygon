import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "../src/lang/index.js";
import VueCountdown from "@chenfengyuan/vue-countdown";
import "../src/assets/fonts/font.less";
import $ from "jquery";
import {
  ElUpload,
  ElPopover,
  ElBadge,
  ElSkeleton,
  ElSelect,
  ElButton,
  ElTabs,
  ElDialog,
  ElBreadcrumb,
} from "element-plus";
import "element-plus/dist/index.css";
window.jquery = $;
window.$ = $;
createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(ElDialog)
  .use(ElUpload)
  .use(ElBreadcrumb)
  .use(ElTabs)
  .use(ElButton)
  .use(ElSelect)
  .use(VueCountdown)
  .use(ElSkeleton)
  .use(ElBadge)
  .use(ElPopover)
  .mount("#app");
