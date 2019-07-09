import { shallowMount } from '@vue/test-utils';
import SiteHeader from '@/views/layout/SiteHeader.vue';

const wrapper = shallowMount(SiteHeader);

describe(wrapper.name(), () => {
  test('it is a <header> element', () => {
    expect(wrapper.element.nodeName).toBe('HEADER');
  });

  test('it contains an element with id "site-title"', () => {
    expect(wrapper.contains('#site-title')).toBe(true);
  });
});
