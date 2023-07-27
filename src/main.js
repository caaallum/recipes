import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import PrimeVue from 'primevue/config'
import PickList from 'primevue/picklist'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import DataTable from 'primevue/datatable'
import Column from 'primevue/column';

app.component('PickList', PickList)
app.component('Button', Button)
app.component('Dialog', Dialog)
app.component('InputText', InputText)
app.component('Listbox', Listbox)
app.component('Toast', Toast)
app.use(ToastService)
app.component('DataTable', DataTable)
app.component('Column', Column)

// Theme
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/md-dark-deeppurple/theme.css'

app.use(PrimeVue, { ripple: true });
app.mount('#app')
