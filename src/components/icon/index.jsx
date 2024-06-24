import React from "react";
import IcoMoon from "react-icomoon";
import iconSet from "@/assets/font-icons/selection.json";

const Icon = ({ icon, ...props }) => (
  <IcoMoon
    removeInlineStyle={true}
    viewBox="0 0 24 24"
    fill="currentColor"
    iconSet={iconSet}
    icon={icon}
    size="24px"
    {...props}
  />
);

export default Icon;
