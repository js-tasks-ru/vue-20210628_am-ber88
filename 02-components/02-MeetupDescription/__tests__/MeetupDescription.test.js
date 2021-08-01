import { shallowMount } from '@vue/test-utils';
const { default: MeetupDescription } = require(global.getSolutionPath('MeetupDescription'));
import meetups from './__fixtures__/meetups';

jest.mock(global.getSolutionPath('vendor/vue.esm-browser.js'), () => require('vue'));

describe('components/MeetupDescription', () => {
  describe('MeetupDescription', () => {
    it('MeetupDescription должен иметь строковый параметр description', () => {
      const wrapper = shallowMount(MeetupDescription);
      expect(wrapper.vm.$options.props.description).toBeTruthy();
    });

    it('MeetupDescription должен выводить описание митапа', () => {
      const wrapper = shallowMount(MeetupDescription, {
        props: { description: meetups[0].description },
      });
      expect(wrapper.text()).toContain(meetups[0].description);
    });

    it('MeetupDescription должен выводить новое описание митапа при обновлении входного параметра', async () => {
      const wrapper = shallowMount(MeetupDescription, {
        props: { description: meetups[0].description },
      });
      await wrapper.setProps({ description: meetups[1].description });
      expect(wrapper.text()).toContain(meetups[1].description);
    });
  });
});
