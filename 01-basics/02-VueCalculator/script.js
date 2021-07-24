// import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      num1: 0,
      num2: 0,
      deist: '',
    };
  },

  computed: {
    setRes() {
      if (this.deist === 'sum') {
        return this.num1 + this.num2;
      } else if (this.deist === 'subtract') {
        return this.num1 - this.num2;
      } else if (this.deist === 'multiply') {
        return this.num1 * this.num2;
      } else if (this.deist === 'divide') {
        return this.num1 / this.num2;
      } else {
        return 0;
      }
    },
  },
});

const app = createApp(RootComponentOptions);
const vm = app.mount('#app');
