import * as React from 'react';

import CheckMark from './_svg/check-mark.svg';
import Tag from './_svg/tag.svg';

interface IconsInterface {
  [key: string]: { [key: string]: JSX.Element };
}

const icons: IconsInterface = {
  checkMark: { default: <CheckMark /> },
  tag: { default: <Tag /> },
};

interface Props {
  type: string;
  variant?: string;
}

const IconComponent: React.SFC<Props> = ({ type, variant = 'default' }) => icons[type][variant];

export default IconComponent;
