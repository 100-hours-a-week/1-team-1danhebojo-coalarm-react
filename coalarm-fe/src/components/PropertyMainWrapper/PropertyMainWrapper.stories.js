import { PropertyMainWrapper } from ".";

export default {
  title: "Components/PropertyMainWrapper",
  component: PropertyMainWrapper,

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
