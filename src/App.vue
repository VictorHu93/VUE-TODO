<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer
      v-model="drawer"
      app
    </v-navigation-drawer> -->
    <!-- </v-navigation-drawer> -->
    <v-navigation-drawer v-model="drawer" app grey dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Collections
          </v-list-item-title>
          <v-list-item-subtitle>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav >
        <v-list-item v-for="item in items" :key="item.title"
        :to="item.to"
         link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar app> 
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->
    <v-app-bar
      app
      dark
      >
      
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      
      <v-btn icon >
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>

      <v-btn icon >
        <v-icon>mdi-folder-open</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
      class="mx-1"
      x-small
      fab
      dark
      color="pink"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

     <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="luck"
      >
    </v-avatar>
    </v-app-bar>

    <v-main class="grey darken-4">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'School', icon: 'mdi-book-open-variant', to:'/School' },
      { title: 'Personal', icon: 'mdi-account', to:'/' },
      { title: 'Design', icon: 'mdi-fountain-pen', to:'/Design' },
    ],
  }),
}
</script>

<style scoped>
</style>
