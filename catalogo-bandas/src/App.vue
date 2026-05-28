<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item to="/" title="Home" prepend-icon="mdi-home" />
        <v-list-item to="/bandas" title="Catálogo" prepend-icon="mdi-music" />
        <v-list-item to="/criar" title="Nova Banda" prepend-icon="mdi-plus" />
        <v-list-item to="/sobre" title="Sobre" prepend-icon="mdi-information" />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>Catálogo de Bandas</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const drawer = ref(false)
    return { drawer }
  }
}
</script>