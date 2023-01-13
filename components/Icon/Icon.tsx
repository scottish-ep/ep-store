import React from "react";

import IcomoonReact from "icomoon-react";
import iconSet from "../../svg/selection.json";

const Icon: React.FC<{
  color?: string,
  size: string | number,
  icon: string,
  className?: string
  onClick?: any,
}> = props => {
  const { color, size = "100%", icon, className = "" } = props;
  return (
    <IcomoonReact
      onClick={onclick}
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

export default Icon;