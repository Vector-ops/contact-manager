import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contacts from "../components/Contacts.vue";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts,
    props: true,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
