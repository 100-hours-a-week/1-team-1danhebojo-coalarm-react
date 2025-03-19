import { PropertyUnactiveWrapper } from ".";

export default {
  title: "Components/PropertyUnactiveWrapper",
  component: PropertyUnactiveWrapper,

  argTypes: {
    property1: {
      options: ["mini-unactive", "mini-active", "unactive", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "mini-unactive",
    className: {},
  },
};
