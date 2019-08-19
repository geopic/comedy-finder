import { shallowMount } from '@vue/test-utils';
import Calendar from '@/views/pages/Calendar.vue';

const wrapper = shallowMount(Calendar);

describe(wrapper.name(), () => {
  test('its id matches its name in lowercase', () => {
    expect(wrapper.element.id).toBe(wrapper.name().toLowerCase());
  });
});
