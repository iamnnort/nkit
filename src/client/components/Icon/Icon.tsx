import * as React from 'react';

import UnknownSvg from './_svg/unknown.svg';

interface IconsInterface {
  [key: string]: { [key: string]: JSX.Element };
}

const icons: IconsInterface = {
  unknown: { default: <UnknownSvg /> },
};

interface Props {
  type: string;
  variant?: string;
}

const IconComponent: React.SFC<Props> = ({ type, variant = 'default' }) => icons[type][variant];

export default IconComponent;
