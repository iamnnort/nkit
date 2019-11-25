import * as React from 'react';

import { Header } from './Header.styled';
import LangSwitcher from './LangSwitcher/LangSwitcher';

const HeaderComponent = () => {
  return (
    <div>
      <LangSwitcher />
    </div>
  );
};

export default HeaderComponent;
