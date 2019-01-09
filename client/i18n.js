import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

import resources from './locales/en.json';

console.log(resources);

i18n.use(reactI18nextModule).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
