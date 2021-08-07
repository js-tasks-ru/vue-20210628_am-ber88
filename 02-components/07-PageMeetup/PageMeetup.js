import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from './MeetupView.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      meetup: null,
      error: null,
      load: 'load',
    };
  },

  watch: {
    meetupId() {
      this.updateMeetupPage(this.meetupId);
    },
  },

  mounted() {
    this.updateMeetupPage(this.meetupId);
  },

  methods: {
    updateMeetupPage(meetupId) {
      this.load = 'load';
      fetchMeetupById(meetupId).then(
        (meetup) => {
          this.meetup = meetup;
          this.load = 'success';
        },
        (error) => {
          this.error = error.message;
          this.load = 'fail';
        },
      );
    },
  },

  template: `
    <div class="page-meetup">
      <meetup-view v-if="load === 'success'" :meetup="meetup"></meetup-view> 

      <ui-container v-else-if="load === 'fail'">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>

      <ui-container v-else>
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>
    </div>`,
});
