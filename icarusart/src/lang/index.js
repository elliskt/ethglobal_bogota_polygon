import { createI18n } from "vue-i18n";

const i18n = createI18n({
  // 默认语言
  locale: window.localStorage.getItem("language") || "en",

  legacy: false,
  // 关闭控制台警告
  silentFallbackWarn: true,

  // 设置语言环境
  messages: {
    en: require("./en.json"),
    zh: require("./zh.json"),
    spa: require("./spanish.json"),
  },
});

export default i18n;
