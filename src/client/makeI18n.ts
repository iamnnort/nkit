import i18n from '../common/i18n';

import env from '../common/lib/helpers/env';

const makeI18n = () => {
  i18n.init();

  if (env.isDevelopment()) {
    if ((module as any).hot) {
      (module as any).hot.accept('../common/i18n', () => {
        require('../common/i18n').default.init();
      });
    }
  }
};

export default makeI18n;
