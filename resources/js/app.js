import "./bootstrap";

import { createApp } from "vue";
import router from "./router/router";
import App from "./layouts/App.vue";
import '../css/app.css';
import 'animate.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/tailwind-light/theme.css';
 
// PrimeVue setup....................
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar'
import Menu from 'primevue/menu';

import PrimeVue from 'primevue/config';

const app = createApp(App);

//primevue components....................
app.component('InputText', InputText);
app.component('Avatar', Avatar )
app.component('Menu', Menu);

app.use(router);
app.use(PrimeVue);
app.mount("#app");

