import * as React from 'react';

import { Home } from './Home.styled';
import { Icon } from '../../components';

const HomeComponent = () => {
  return (
    <Home>
      <Icon type={'unknown'} />
      Hello, It's me!
    </Home>
  );
};

export default HomeComponent;
