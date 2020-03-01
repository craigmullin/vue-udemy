import Vue from 'vue';
//import created file with relative path
import App from './App';

new Vue({
  // render function to display instance of 'App'
  render: h => h(App)
}).$mount('#app');
