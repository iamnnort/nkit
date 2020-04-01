import 'idempotent-babel-polyfill';

import makeI18n from './makeI18n';
import makeStore from './makeStore';
import makeApp from './makeApp';

makeI18n();
makeApp(makeStore());
