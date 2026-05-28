<template>
  <v-row>
    <v-col cols="6">
      <v-card class="pa-4 text-center">
        <v-icon size="40" color="primary">mdi-music</v-icon>
        <h2>{{ total }}</h2>
        <p>Total de Bandas</p>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="pa-4 text-center">
        <v-icon size="40" color="success">mdi-check-circle</v-icon>
        <h2>{{ ativas }}</h2>
        <p>Em Atividade</p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'EstatisticasBox',
  props: {
    total: {
      type: Number,
      required: true
    },
    ativas: {
      type: Number,
      required: true
    }
  }
}
</script>