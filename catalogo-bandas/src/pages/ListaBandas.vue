<template>
  <v-container>
    <h1>Catálogo de Bandas</h1>
    <v-btn color="primary" to="/criar" class="mb-4">+ Nova Banda</v-btn>

    <v-row v-if="bandas.length > 0">
      <v-col cols="12" md="6" v-for="banda in bandas" :key="banda.id">
        <BandaCard :banda="banda" @excluir="deletar" />
      </v-col>
    </v-row>

    <p v-else>
      Nenhuma banda cadastrada ainda. 
      <router-link to="/criar">Cadastre a primeira!</router-link>
    </p>
  </v-container>
</template>

<script>
import { bandas, excluirBanda } from '../stores/bandas'
import BandaCard from '../components/BandaCard.vue'

export default {
  components: { BandaCard },
  setup() {
    function deletar(id) {
      if (confirm('Tem certeza que deseja excluir esta banda?')) {
        excluirBanda(id)
      }
    }

    return { bandas, deletar }
  }
}
</script>