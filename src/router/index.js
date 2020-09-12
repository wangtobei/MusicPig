import Vue from "vue";
import VueRouter from "vue-router";
const home = () => import("@/views/Home.vue");
const search = () => import("@/views/Search.vue");
const about = () => import("@/views/About.vue");
const playlist = () => import("@/components/playlist/list.vue");
const mvpalyer = () => import("@/components/mv/mvdetails.vue");
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: home,
  },
  {
    path: "/about",
    name: "About",
    component: about,
  },
  {
    path: "/search",
    name: "Search",
    component: search,
  },
  {
    path: "/playlist/:id",
    name: "playlist",
    component: playlist,
  },
  {
    path: "/mvplayer/:id",
    name: "mvplayer",
    component: mvpalyer,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
