import enGb from './enGb';
import ruRu from './ruRu';
import config from '../common/config';

const locales = {
  [config.languages.enGb.short]: enGb,
  [config.languages.ruRu.short]: ruRu,
};

export default locales;
