import iconSet from 'assets/font/selection.json';
import IcoMoon, { IconProps } from 'react-icomoon';

const Icon = (props: IconProps) => {
  return <IcoMoon iconSet={iconSet} size={16} {...props} />;
};

export default Icon;
