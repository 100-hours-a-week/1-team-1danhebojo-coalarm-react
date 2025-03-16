import { Rsi } from ".";

export default {
  title: "Components/Rsi",
  component: Rsi,

  argTypes: {
    property1: {
      options: ["variant-2", "variant-3", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
  },
};
