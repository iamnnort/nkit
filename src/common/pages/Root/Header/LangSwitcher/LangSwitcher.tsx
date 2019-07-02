import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { LangSwitcher, LangSwitcherItem } from './LangSwitcher.styled';

const LangSwitcherComponent = () => {
  const { i18n } = useTranslation();
  const handleSwitch = React.useCallback((lang: string) => {
    i18n.changeLanguage(lang);
  }, []);

  return (
    <LangSwitcher>
      <LangSwitcherItem onClick={handleSwitch.bind(this, 'en')} isActive={false}>
        {'en'}
      </LangSwitcherItem>
      <LangSwitcherItem onClick={handleSwitch.bind(this, 'ru')} isActive={true}>
        {'ru'}
      </LangSwitcherItem>
    </LangSwitcher>
  );
};

export default LangSwitcherComponent;
