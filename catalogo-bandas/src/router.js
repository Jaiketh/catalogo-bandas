import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import ListaBandas from './pages/ListaBandas.vue'
import CriarBanda from './pages/CriarBanda.vue'
import EditarBanda from './pages/EditarBanda.vue'
import Sobre from './pages/Sobre.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/bandas', component: ListaBandas },
    { path: '/criar', component: CriarBanda },
    { path: '/editar/:id', component: EditarBanda },
    { path: '/sobre', component: Sobre }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router