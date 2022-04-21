import { mount, flushPromises } from '@vue/test-utils';
import App from './App.vue';
import { createRouter, Router } from './router';

let router: Router;
beforeEach(async () => {
  router = createRouter();
});

test('routing', async () => {
  await router.push('/');
  await router.isReady();

  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  expect(wrapper.html()).toContain('Hello Vue 3 + TypeScript + Vite');

  await router.push('/counter');
  await router.isReady();

  expect(wrapper.html()).toContain('Count: 0');
});

test('counter links to home', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  await router.push('/counter');
  await router.isReady();

  expect(wrapper.html()).toContain('Home');

  expect(router.currentRoute.value.path).toBe('/counter');
  await wrapper.get('a#home').trigger('click');
  await flushPromises();
  expect(router.currentRoute.value.path).toBe('/');
});
