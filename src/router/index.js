import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CLUE Form',
      component: Form,
      props: { gameId: 'zelda', gameName: 'The Legend of Zelda CLUE' }
    }
  ]
});
