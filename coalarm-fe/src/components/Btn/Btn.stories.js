import { Btn } from ".";

export default {
  title: "Components/Btn",
  component: Btn,

  argTypes: {
    property1: {
      options: ["main", "sub"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "main",
    className: {},
    text: "TEXT",
  },
};
