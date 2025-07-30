import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

// ✅ Import Flowbite Vue components
import * as FlowbiteVue from "flowbite-vue";

const app = createApp(App);
// ✅ Register all Flowbite Vue components globally
for (const [name, component] of Object.entries(FlowbiteVue)) {
  app.component(name, component);
}
app.mount("#app");
