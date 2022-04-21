import { mount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld.vue'

test('mount component', async () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Hi mom!'
    }
  })

  expect(wrapper.text()).toContain('Hi mom!')

})
