import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      meetId: 0,
      meetupTitle: '',
    };
  },

  watch: {
    meetId(newVal, oldVal) {
      fetchMeetupById(newVal).then((result) => (this.meetupTitle = result.title));
    },
  },
});

const app = createApp(RootComponentOptions);
const vm = app.mount('#app');
