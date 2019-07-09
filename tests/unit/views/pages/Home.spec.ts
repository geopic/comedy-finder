import { shallowMount } from '@vue/test-utils';
import Home from '@/views/pages/Home.vue';

const wrapper = shallowMount(Home);

describe(wrapper.name(), () => {
  test('its id matches its name in lowercase', () => {
    expect(wrapper.element.id).toBe(wrapper.name().toLowerCase());
  });

  test('it contains an element with id "map"', () => {
    expect(wrapper.contains('#map')).toBe(true);
  });
});
