import { mount } from '@vue/test-utils'
import Counter from '../components/Counter.vue'

test('counter counts', async () => {
  const wrapper = mount(Counter, {})

  expect(wrapper.text()).toContain('Count: 0')

  await wrapper.get('button#increment').trigger('click')

  expect(wrapper.text()).toContain('Count: 1')

  await wrapper.get('button#decrement').trigger('click')
  
  expect(wrapper.text()).toContain('Count: 0')
})
