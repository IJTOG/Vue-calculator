import { mount } from "@vue/test-utils";
import ConfirmModal from "@/components/Modal/ConfirmModal.vue";

describe("Confirm Modal", () => {
  test("displays message", async () => {
    const wrapper = mount(ConfirmModal, {
      propsData: {
        btnTextCancel: "Cancel Test",
        btnTextConfirm: "Confirm Test"
      }
    });

    expect(wrapper.text()).toContain("Cancel Test");
    expect(wrapper.text()).toContain("Confirm Test");
  });

  test("Ok clicked", async () => {
    const wrapper = mount(ConfirmModal);

    expect(wrapper.vm.active).toBe(false);

    await wrapper.find(".btn-ok").trigger("click");

    expect(wrapper.vm.active).toBe(false);
  });

  test("Open Clicked", async () => {
    const wrapper = mount(ConfirmModal);

    expect(wrapper.vm.active).toBe(false);
    wrapper.vm.open();

    expect(wrapper.vm.active).toBe(true);
  });

  test("Cancel Clicked", async () => {
    const wrapper = mount(ConfirmModal);

    await wrapper.setData({ active: true });
    wrapper.vm.onCancel();

    expect(wrapper.vm.active).toBe(false);
  });
});
