import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import PrimeVue from 'primevue/config'
import PickList from 'primevue/picklist'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'

app.component('PickList', PickList)
app.component('Button', Button)
app.component('Dialog', Dialog)
app.component('InputText', InputText)
app.component('Listbox', Listbox)

// Theme
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'

app.use(PrimeVue, { ripple: true });
app.mount('#app')
