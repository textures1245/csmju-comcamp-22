import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Particles from "particles.vue3";
import "@/assets/main.css";
import "animate.css";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: "mdi"
  }
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(Particles);

app.mount("#app");
