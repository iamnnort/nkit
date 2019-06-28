import * as React from 'react';

import { Icons, ComponentProps } from './Icon.types';

import CheckMark from './_svg/check-mark.svg';
import Tag from './_svg/tag.svg';

const icons: Icons = {
  checkMark: { default: <CheckMark /> },
  tag: { default: <Tag /> },
};

const IconComponent: React.FC<ComponentProps> = ({ type, variant = 'default' }) => icons[type][variant];

export default IconComponent;
