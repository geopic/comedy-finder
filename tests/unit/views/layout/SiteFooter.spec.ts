import { shallowMount } from '@vue/test-utils';
import SiteFooter from '@/views/layout/SiteFooter.vue';

const wrapper = shallowMount(SiteFooter);

describe(wrapper.name(), () => {
  test('it is a <footer> element', () => {
    expect(wrapper.element.nodeName).toBe('FOOTER');
  });

  test('it contains an element with id "site-credits"', () => {
    expect(wrapper.contains('#site-credits')).toBe(true);
  });
});
