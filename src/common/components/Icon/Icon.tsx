import * as React from 'react';

import { Icons, ComponentProps } from './Icon.types';

import { ReactComponent as CheckMark } from './__svg__/CheckMark.svg';
import { ReactComponent as Tag } from './__svg__/Tag.svg';

const icons: Icons = {
  checkMark: { default: <CheckMark /> },
  tag: { default: <Tag /> },
};

const IconComponent: React.FC<ComponentProps> = ({ type, variant = 'default' }) =>
  (icons[type] && icons[type][variant]) || <i data-type={type} data-variant={variant} />;

export default IconComponent;
