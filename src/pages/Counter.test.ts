import { mount, RouterLinkStub } from '@vue/test-utils';
import Counter from './Counter.vue';

test('counter counts', async () => {
  const wrapper = mount(Counter, {});

  expect(wrapper.text()).toContain('Count: 0');

  await wrapper.get('button#increment').trigger('click');

  expect(wrapper.text()).toContain('Count: 1');

  await wrapper.get('button#decrement').trigger('click');

  expect(wrapper.text()).toContain('Count: 0');
});

test('routes home', async () => {
  const wrapper = mount(Counter, {
    global: {
      stubs: {
        'router-link': RouterLinkStub,
      },
    },
  });

  expect(wrapper.get('a#home').findComponent(RouterLinkStub).props().to).toBe(
    '/'
  );
});
