import Vue from 'vue';
import VueI18n from 'vue-i18n';

import pt from "./pt/index"
import en from "./en/index"

Vue.use(VueI18n)

const messages = {
    en: en,
    pt: pt

  };

  // Create VueI18n instance with options
export default new VueI18n({
    locale: localStorage.getItem("lang"), // set locale
    messages, // set locale messages
  });