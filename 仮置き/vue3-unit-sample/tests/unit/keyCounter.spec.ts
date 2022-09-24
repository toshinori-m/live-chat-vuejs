import { shallowMount } from "@vue/test-utils";
import KeyCounter from "@/components/KeyCounter.vue";

describe('KeyCounter', () => {

  let wrapper: any;
  beforeEach(async () => {
    wrapper = shallowMount(KeyCounter);
  })

  // 初期化
  it('Count is zero by default', () => {
    expect(wrapper.vm.state.count).toBe(0)
  })

  it('Pressing the ArrowUp button, Count by +5', async () => {
    await wrapper.find('[data-testid="inputCount"]').trigger('keydown', { code: 'ArrowUp' });
    expect(wrapper.vm.state.count).toBe(5)
  })

  it('Pressing the ArrowDown button, Count by -5', async () => {
    await wrapper.find('[data-testid="inputCount"]').trigger('keydown', { code: 'ArrowDown' });
    expect(wrapper.vm.state.count).toBe(-5)
  })

  it('Pressing the ArrowRight button, Count by +1', async () => {
    await wrapper.find('[data-testid="inputCount"]').trigger('keydown', { code: 'ArrowRight' });
    expect(wrapper.vm.state.count).toBe(1)
  })

  it('Pressing the ArrowLeft button, Count by -1', async () => {
    await wrapper.find('[data-testid="inputCount"]').trigger('keydown', { code: 'ArrowLeft' });
    expect(wrapper.vm.state.count).toBe(-1)
  })

  it('Pressing the arrows button, Count by 0', async () => {
    wrapper.find('[data-testid="inputCount"]').trigger('keydown', { code: 'ArrowRight' });
    await wrapper.find('[data-testid="inputCount"]').trigger('keydown', { code: 'KeyA' });
    expect(wrapper.vm.state.count).toBe(0)
  })
})