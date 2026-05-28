<template>
  <v-container>
    <h1>Nova Banda</h1>
    <v-form @submit.prevent="salvar">
      <v-text-field v-model="forma.nome" label="Nome da Banda" required />
      <v-text-field v-model="forma.genero" label="Gênero Musical" required />
      <v-text-field v-model="forma.anoFormacao" label="Ano de Formação" type="number" required />
      <v-text-field v-model="forma.pais" label="País de Origem" required />
      <v-text-field v-model="forma.vocalista" label="Vocalista Principal" required />
      <v-switch v-model="forma.emAtividade" label="Em Atividade":color="forma.emAtividade ? 'success' : 'error'"/>
      <v-btn type="submit" color="primary">Salvar</v-btn>
      <v-btn to="/bandas" color="secondary" class="ml-2">Cancelar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { reactive } from 'vue'
import { salvarBanda } from '../stores/bandas'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const forma = reactive({
      nome: '',
      genero: '',
      anoFormacao: '',
      pais: '',
      vocalista: '',
      emAtividade: true
    })

    function salvar() {
      salvarBanda({ ...forma })
      router.push('/bandas')
    }

    return { forma, salvar }
  }
}
</script>