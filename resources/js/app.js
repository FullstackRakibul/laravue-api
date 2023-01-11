import "./bootstrap";

import { createApp } from "vue";
import router from "./router/router";
import App from "./layouts/App.vue";
import '../css/app.css';
import 'animate.css';

const app = createApp(App);
app.use(router);
app.mount("#app");

