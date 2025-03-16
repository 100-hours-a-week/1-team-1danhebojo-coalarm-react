import { Component1607 } from ".";

export default {
  title: "Components/Component1607",
  component: Component1607,

  argTypes: {
    property1: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "two",
    className: {},
    mainIconPropertyCloseClassName: {},
  },
};
