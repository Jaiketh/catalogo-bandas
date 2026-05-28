<template>
  <v-container>
    <h1>🎸 Catálogo de Bandas</h1>
    <p>Cadastre e gerencie suas bandas favoritas de rock e metal.</p>

    <EstatisticasBox 
      :total="totalBandas" 
      :ativas="bandasAtivas" 
      class="mt-4"
    />

    <v-row class="mt-4">
      <v-col>
        <v-btn color="primary" to="/bandas">Ver Catálogo</v-btn>
        <v-btn color="secondary" to="/criar" class="ml-2">+ Nova Banda</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from 'vue'
import { bandas } from '../stores/bandas'
import EstatisticasBox from '../components/EstatisticasBox.vue'

export default {
  components: { EstatisticasBox },
  setup() {
    const totalBandas = computed(() => bandas.value.length)
    const bandasAtivas = computed(() => bandas.value.filter(b => b.emAtividade).length)

    return { totalBandas, bandasAtivas }
  }
}
</script>