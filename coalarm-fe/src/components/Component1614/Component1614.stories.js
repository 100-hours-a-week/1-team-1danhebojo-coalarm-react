import { Component1614 } from ".";

export default {
  title: "Components/Component1614",
  component: Component1614,

  argTypes: {
    property1: {
      options: ["variant-5", "variant-2", "variant-3", "variant-4", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-5",
    className: {},
  },
};
