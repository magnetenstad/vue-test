import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld.vue'

test('mount component', async () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Hi mom!'
    }
  })

  expect(wrapper.text()).toContain('Hi mom!')

  expect(wrapper.get('button').text()).toContain('count is: 0')
  await wrapper.get('button').trigger('click')
  expect(wrapper.get('button').text()).toContain('count is: 1')
})
