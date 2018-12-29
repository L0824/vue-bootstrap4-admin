import Vue from 'vue'
import Hello from 'src/components/Hello'

describe('Hello.vue', () => {
  it(' #myButton', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    const msgHello = vm.msgHello
    expect(vm.$el.querySelector('#myButton').textContent)
      .to.equal(msgHello)
  })

  it('#myButton', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    const msgBye = vm.msgBye
    const myButton = vm.$el.querySelector('#myButton')
    myButton.click()
    vm.$nextTick(() => {
      expect(myButton.textContent).to.equal(msgBye)
    })
    setTimeout(() => {
      expect(myButton.textContent).to.equal(msgHello)
    }, 1000)
  })

  it('clickBtn', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.loading).to.equal(false)
    vm.clickBtn()
    expect(vm.loading).to.equal(true)
    setTimeout(() => {
      expect(vm.loading).to.equal(false)
    }, 1000)
  })
})
