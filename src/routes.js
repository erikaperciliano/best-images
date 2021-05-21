import Register from './components/register/Register.vue';
import Home from './components/home/Home.vue';

export const routes = [
  {path: '', name: 'home', component: Home, title: 'Home', menu: true},
  {path: '/register', name: 'register', component: Register, title: 'Register', menu: true},
  {path: '*', component: Home, menu: true}
];
