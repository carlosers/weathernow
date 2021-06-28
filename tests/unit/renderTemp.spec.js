import { describe,expect, it, shallowMount } from "@vue/test-utils";
import CardMix from "@/components/CardMix.vue";

describe("CardMix", () => {
  it("renderiza props.tempCity quando passado", () => {
    const wrapper = shallowMount(CardMix, {
      propsData: { tempCity : "10" }
    });
    expect(wrapper.props().tempCity).toBe("10");
  });
});