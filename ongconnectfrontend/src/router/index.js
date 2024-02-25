// IMPORTS
import { createRouter, createWebHistory } from 'vue-router'
import store from '../auth/store'

// VIEWS
import Login from '../views/Login.vue'
import Create from '../views/Create.vue'

// VOLUNTÁRIO
import Profile_volut from '../views/voluntario/Profile.vue'
import Update_volut from '../views/voluntario/Update.vue'
import Voluntariado from '../views/voluntario/Voluntariado.vue'

// ONG
import Profile_ong from '../views/ong/Profile.vue'

// ROUTER
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Create',
      component: Create
    },
    {
      path: '/perfil/voluntario/:id',
      name: 'Profile_volut',
      component: Profile_volut,
      meta: { requiresAuth: true },
      props: true
    },
    {
      path: '/perfil/ong/:id',
      name: 'Profile_ong',
      component: Profile_ong,
      meta: { requiresAuth: true },
      props: true
    },
    {
      path: '/perfil/voluntario/editar/:id',
      name: 'Update_volut',
      component: Update_volut,
      meta: { requiresAuth: true },
      props: true
    },
    {
      path: '/perfil/voluntario/voluntariado/:id',
      name: 'Voluntariado',
      component: Voluntariado,
      meta: { requiresAuth: true },
      props: true
    },
  ]
})

// AUTH REDIRECT
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router