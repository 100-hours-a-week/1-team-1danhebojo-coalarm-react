import { PropertyWrapper } from ".";

export default {
  title: "Components/PropertyWrapper",
  component: PropertyWrapper,

  argTypes: {
    property1: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "two",
    className: {},
    divClassName: {},
    divClassNameOverride: {},
    rectangleClassName: {},
  },
};
