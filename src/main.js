import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ELEMENT from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/style/slider.css";
import axios from "axios";
Vue.use(ELEMENT);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
