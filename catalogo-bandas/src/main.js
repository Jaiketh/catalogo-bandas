import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#E53935',
                    secondary: '#B71C1C',
                    accent: '#FF6F00',
                    success: '#43A047',
                    error: '#E53935',
                }
            },
            dark: {
                colors: {
                    primary: '#E53935',
                    secondary: '#B71C1C',
                    accent: '#FF6F00',
                    success: '#43A047',
                    error: '#E53935',
                }
            }
        }
    }
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')