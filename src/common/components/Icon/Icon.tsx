import * as React from 'react';

import { Icons, ComponentProps } from '@common/components/Icon/Icon.types';

import { ReactComponent as CheckMark } from '@common/components/Icon/__svg__/CheckMark.svg';
import { ReactComponent as Tag } from '@common/components/Icon/__svg__/Tag.svg';

const icons: Icons = {
  checkMark: { default: <CheckMark /> },
  tag: { default: <Tag /> },
};

const IconComponent: React.FC<ComponentProps> = ({ type, variant = 'default' }) =>
  (icons[type] && icons[type][variant]) || <i data-type={type} data-variant={variant} />;

export default IconComponent;
