// import { shallowMount, createLocalVue } from "@vue/test-utils";
// import DisplayResult from "@/components/Calculator/DisplayResult.vue";
// import Vuex from "vuex";

// const localVue = createLocalVue();

// localVue.use(Vuex);

// describe("DisplayResult", () => {
//   let actions;
//   let store;

//   beforeEach(() => {
//     actions = {
//       calculator: jest.fn(),
//       clear: jest.fn(),
//       initialiseStore: jest.fn(),
//       find: jest.fn(),
//       select: jest.fn()
//     };
//     store = new Vuex.Store({
//       actions,
//       state: {
//         filtered: [
//           {
//             name: "Calculator A",
//             result: 637.69,
//             summary: "55.69+582",
//             display:
//               "55<span style='color:#E623CF;'>.</span>69 <span style='color:#E623CF;'>&plus;</span> 582",
//             date: "06/10/2020 23:24.15"
//           }
//         ]
//       }
//     });
//   });

//   test("Display messages", async () => {
//     const wrapper = shallowMount(DisplayResult, { store, localVue });

//     expect(wrapper.text()).toContain("Calculator A");
//     expect(wrapper.text()).toContain("55.69 + 582");
//     expect(wrapper.text()).toContain("637.69");
//   });
// });
