<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer
      v-model="drawer"
      app
    </v-navigation-drawer> -->
    <!-- </v-navigation-drawer> -->
    <v-navigation-drawer v-model="drawer" app grey dark>
      <div class="pt-5 text-center">
        <v-avatar size="80">
          <img src="./assets/luck.jpeg" alt="">
        </v-avatar>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Vue.js
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t("message.Lista_de_Tarefas") }}
            </v-list-item-subtitle>

            <v-overflow-btn v-model="language" @change="changeLanguage()" class="my-2" :items="dropdown_edit"
            :label="$t('message.Seleciona_a_Linguagem')">
            </v-overflow-btn>

          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t('message.Pessoal') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar app> 
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main class="grey darken-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    language: null,
    drawer: null,
    dropdown_edit: [
      { text: 'pt' },
      { text: 'en' },
    ],
    items: [
      {   icon: 'mdi-account', to: '/' },
    ],
  }),
  methods: {
    changeLanguage() {
      localStorage.setItem("lang", this.language)
      window.location.reload();
    }
  },
  created() {
    if (localStorage.getItem("lang") == null) {
      localStorage.setItem('lang', "pt")
    }
    this.laguage = localStorage.getItem("lang");
  },
};
</script>

<style scoped>
</style>
