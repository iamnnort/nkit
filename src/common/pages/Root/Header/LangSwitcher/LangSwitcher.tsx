import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { LangSwitcher, LangSwitcherItem } from './LangSwitcher.styled';
import config from '../../../../config';

const LangSwitcherComponent = () => {
  const { i18n } = useTranslation();

  const handleSwitch = React.useCallback((lang: string) => {
    i18n.changeLanguage(lang);
  }, []);

  return (
    <LangSwitcher>
      <LangSwitcherItem
        onClick={() => handleSwitch(config.languages.enGb.short)}
        isActive={i18n.language === config.languages.enGb.short}
      >
        {config.languages.enGb.long}
      </LangSwitcherItem>
      <LangSwitcherItem
        onClick={() => handleSwitch(config.languages.ruRu.short)}
        isActive={i18n.language === config.languages.ruRu.short}
      >
        {config.languages.ruRu.long}
      </LangSwitcherItem>
    </LangSwitcher>
  );
};

export default LangSwitcherComponent;
