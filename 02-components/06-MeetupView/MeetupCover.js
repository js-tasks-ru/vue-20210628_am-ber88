import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
  },

  computed: {
    style_img() {
      return this.image && '--bg-url: url(' + this.image + ')';
    },
  },

  template: `
    <div class="meetup-cover" :style=style_img>
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
