import { Component1605 } from ".";

export default {
  title: "Components/Component1605",
  component: Component1605,

  argTypes: {
    property1: {
      options: [
        "click-active",
        "click-unactive",
        "hover-active",
        "hover-unactive",
        "default-unactive",
        "list",
        "default-active",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "click-active",
    className: {},
  },
};
