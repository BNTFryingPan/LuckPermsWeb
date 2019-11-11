import Vue from 'vue';
import Vuex from 'vuex';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faSave,
  faUndo,
  faRedo,
  faPlusCircle,
  faTimes,
  faTimesCircle,
  faChevronCircleDown,
  faAsterisk,
  faPlus,
  faSyncAlt,
  faBook,
  faArrowAltCircleDown,
  faArrowLeft,
  faCaretRight,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faDiscord,
  faPatreon,
} from '@fortawesome/free-brands-svg-icons';

import autofocus from 'vue-autofocus-directive';
import store from './store';
import App from './App.vue';
import router from './router';


Vue.use(Vuex);

Vue.directive('autofocus', autofocus);

Vue.config.productionTip = false;

library.add(
  faSave,
  faUndo,
  faRedo,
  faPlusCircle,
  faTimes,
  faTimesCircle,
  faChevronCircleDown,
  faAsterisk,
  faPlus,
  faSyncAlt,
  faBook,
  faArrowAltCircleDown,
  faArrowLeft,
  faCaretRight,
  faEdit,

  faGithub,
  faDiscord,
  faPatreon,
);

Vue.component('font-awesome', FontAwesomeIcon);

Vue.use(require('vue-moment'));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');