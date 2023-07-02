import iconSet from "assets/font/selection.json";
import IcoMoon, { IconProps } from "react-icomoon";

const Icon = (props: IconProps) => (
  <IcoMoon
    className="text-primary-light dark:text-primary-dark"
    iconSet={iconSet}
    size={20}
    {...props}
  />
);

export default Icon;
