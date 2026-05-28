import { ref } from 'vue'

export const bandas = ref([
    {
        id: 1,
        nome: 'Iron Maiden',
        genero: 'Heavy Metal',
        anoFormacao: 1975,
        pais: 'Reino Unido',
        vocalista: 'Bruce Dickinson',
        emAtividade: true
    },
    {
        id: 2,
        nome: 'Nirvana',
        genero: 'Grunge',
        anoFormacao: 1987,
        pais: 'Estados Unidos',
        vocalista: 'Kurt Cobain',
        emAtividade: false
    }
])

export function salvarBanda(banda) {
    if (banda.id) {
        const index = bandas.value.findIndex(b => b.id === banda.id)
        bandas.value[index] = { ...banda }
    } else {
        bandas.value.push({ ...banda, id: Date.now() })
    }
}

export function excluirBanda(id) {
    bandas.value = bandas.value.filter(b => b.id !== id)
}