import { mount } from '@vue/test-utils';
import App from './App.vue';
import router from './router';

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
