import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      require: true,
    },
    place: {
      type: String,
      require: true,
    },
    date: {
      type: Number,
      require: true,
    },
  },

  computed: {
    full_date() {
      return new Date(this.date).toLocaleString('eng', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    d_time() {
      let d = new Date(this.date);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      let year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return [year, month, day].join('-');
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="d_time">{{ full_date }}</time>
      </li>
    </ul>`,
});
