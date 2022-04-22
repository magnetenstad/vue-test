import { flushPromises, mount } from '@vue/test-utils';
import Suspense from './Suspense.vue';
import axios from 'axios';

test('counter counts', async () => {
  vi.spyOn(axios, 'get').mockResolvedValueOnce({
    data: [{ url: 'https://cdn2.thecatapi.com/images/ajr.jpg' }],
  });
  vi.spyOn(axios, 'get').mockResolvedValueOnce({
    data: [{ url: 'https://cdn2.thecatapi.com/images/73q.jpg' }],
  });
  const wrapper = mount(Suspense, {});
  await flushPromises();

  expect(wrapper.get('h1').text()).toContain('Random cats');
  expect(wrapper.get('img')).toBeTruthy();
  expect(wrapper.get('button#refresh').text()).toContain('Refresh');

  const url1 = wrapper.get('p#url').text();
  await wrapper.get('button#refresh').trigger('click');
  await flushPromises();

  const url2 = wrapper.get('p#url').text();
  expect(url1).not.toBe(url2);
});
