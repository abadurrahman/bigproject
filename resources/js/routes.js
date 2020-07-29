
let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;



export const routes = [
  { path: 'admin', component: login, name:'admin' },
  { path: '/register', component: register , name:'register' },
]