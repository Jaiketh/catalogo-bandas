<template>
  <v-card class="ma-2 pa-2">
    <v-card-title>{{ banda.nome }}</v-card-title>
    <v-card-subtitle>{{ banda.genero }} — {{ banda.pais }}</v-card-subtitle>
    <v-card-text>
      <p><strong>Vocalista:</strong> {{ banda.vocalista }}</p>
      <p><strong>Formação:</strong> {{ banda.anoFormacao }}</p>
      <v-chip :color="banda.emAtividade ? 'success' : 'error'">
        {{ banda.emAtividade ? 'Em Atividade' : 'Encerrada' }}
      </v-chip>
    </v-card-text>
    <v-card-actions>
      <v-btn color="warning" :to="'/editar/' + banda.id">Editar</v-btn>
      <v-btn color="error" @click="$emit('excluir', banda.id)">Excluir</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'BandaCard',
  props: {
    banda: {
      type: Object,
      required: true
    }
  },
  emits: ['excluir']
}
</script>