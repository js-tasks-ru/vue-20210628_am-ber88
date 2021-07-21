import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      butValue: 0,
    };
  },
});

const app = createApp(RootComponentOptions);
app.mount('#app');