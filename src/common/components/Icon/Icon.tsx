import * as React from 'react';

import { Icons, ComponentProps } from './Icon.types';

import { ReactComponent as CheckMark } from './_svg/checkMark.svg';
import { ReactComponent as Tag } from './_svg/tag.svg';

const icons: Icons = {
  checkMark: { default: <CheckMark /> },
  tag: { default: <Tag /> },
};

const IconComponent: React.FC<ComponentProps> = ({ type, variant = 'default' }) => icons[type][variant];

export default IconComponent;
