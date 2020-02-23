import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import vueSmoothScroll from 'vue2-smooth-scroll';
import Home from './components/Home';
import './styles/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';

Vue.config.productionTip = false
Vue.use(vueSmoothScroll)
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  created() {
    AOS.init({
      once: false,
    }); 
  },
  router,
  render: h => h(App),
}).$mount('#app')
