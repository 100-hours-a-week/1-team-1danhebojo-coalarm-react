import { SidebarIcon } from ".";

export default {
  title: "Components/SidebarIcon",
  component: SidebarIcon,

  argTypes: {
    property1: {
      options: [
        "slack",
        "login",
        "alarm",
        "guide",
        "logout",
        "profile",
        "notice",
        "menu",
        "dash",
        "workspace",
        "down",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "slack",
    propertyDashClassName: {},
    arrowsRightAlignment15Color: "#F8F8F8",
    arrowsRightAlignment13Color: "#F8F8F8",
  },
};
