import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue"
import CoEarn from "../views/Co-Earn.vue"

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    // meta: {layout: "auth-layout"}
  },
  {
    path: "/co-earn",
    name: "CoEarn",
    component: CoEarn
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
