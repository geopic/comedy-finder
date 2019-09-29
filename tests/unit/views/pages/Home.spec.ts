/**
 * tests/unit/views/pages/Home.spec.ts
 * Unit tests for 'Home' page.
 * © George Pickering 2019, https://github.com/tedjenkins
 */

import { shallowMount } from '@vue/test-utils';
import Home from '@/views/pages/Home.vue';

const wrapper = shallowMount(Home);

describe(wrapper.name(), () => {
  test('its id matches its name in lowercase', () => {
    expect(wrapper.element.id).toBe(wrapper.name().toLowerCase());
  });
});
