import { MainIcon } from ".";

export default {
  title: "Components/MainIcon",
  component: MainIcon,

  argTypes: {
    property1: {
      options: ["up", "info", "close", "noti", "search", "down"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "up",
    propertyCloseClassName: {},
  },
};
