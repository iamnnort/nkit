import * as React from 'react';

import { Header } from '@common/pages/Root/Header/Header.styled';
import LangSwitcher from '@common/pages/Root/Header/LangSwitcher/LangSwitcher';

const HeaderComponent = () => {
  return (
    <Header>
      <LangSwitcher />
    </Header>
  );
};

export default HeaderComponent;
