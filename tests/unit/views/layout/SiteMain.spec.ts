import { shallowMount } from '@vue/test-utils';
import SiteMain from '@/views/layout/SiteMain.vue';

const wrapper = shallowMount(SiteMain, {
  stubs: ['router-view']
});

describe(`${wrapper.name()}`, () => {
  test('it is a <main> element', () => {
    expect(wrapper.element.nodeName).toBe('MAIN');
  });

  test('it contains the <router-view> element', () => {
    expect(wrapper.contains('router-view-stub')).toBe(true);
  });
});
