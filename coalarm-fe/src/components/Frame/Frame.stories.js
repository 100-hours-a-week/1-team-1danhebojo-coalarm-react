import { Frame } from ".";

export default {
  title: "Components/Frame",
  component: Frame,

  argTypes: {
    property1: {
      options: ["BTC", "ALGO", "STMX"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "BTC",
    className: {},
  },
};
