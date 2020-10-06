import { mount } from "@vue/test-utils";
import Calculator from "@/components/Calculator/Calculator.vue";

describe("Calculator", () => {
  test("displays message", () => {
    const wrapper = mount(Calculator, {
      propsData: {
        name: "Calculator_Test_5784"
      }
    });
    expect(wrapper.text()).toContain("Calculator_Test_5784");
  });

  test("Plus operator", async () => {
    const wrapper = mount(Calculator);

    await wrapper.find(".one").trigger("click");
    await wrapper.find(".two").trigger("click");
    await wrapper.find(".three").trigger("click");
    await wrapper.find(".dot").trigger("click");
    await wrapper.find(".five").trigger("click");
    await wrapper.find(".six").trigger("click");
    await wrapper.find(".is-plus").trigger("click");

    await wrapper.find(".four").trigger("click");
    await wrapper.find(".five").trigger("click");
    await wrapper.find(".six").trigger("click");

    expect(wrapper.text()).toContain("123.56 + 456");
  });

  test("Clear Clicked", async () => {
    const wrapper = mount(Calculator);

    await wrapper.setData({
      display: "123.956 - 111.2",
      summary: "123.956 - 111.2",
      result: 12.765
    });
    wrapper.vm.clear();

    expect(wrapper.vm.display).toBe("");
    expect(wrapper.vm.summary).toBe("");
    expect(wrapper.vm.result).toBe(0);
  });
});
