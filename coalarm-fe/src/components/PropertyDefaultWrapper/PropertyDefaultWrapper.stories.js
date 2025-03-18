import { PropertyDefaultWrapper } from ".";

export default {
  title: "Components/PropertyDefaultWrapper",
  component: PropertyDefaultWrapper,

  argTypes: {
    property1: {
      options: ["click", "hover", "list-close", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "click",
  },
};
