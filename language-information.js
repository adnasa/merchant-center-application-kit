import PropTypes from 'prop-types';
import createL10NInjector from './create-l10n-injector';
import getSupportedLocale from './get-supported-locale';

export const languagesShape = PropTypes.objectOf(
  PropTypes.shape({
    country: PropTypes.string,
    language: PropTypes.string.isRequired,
  })
);

/**
 * If running through webpack, code splitting makes `getLanguagesForLocale`
 * a function that asynchronously loads the country data.
 */
const getLanguagesForLocale = (locale, cb) => {
  const supportedLocale = getSupportedLocale(locale);
  // Use lazy once so that subsequent calls to import() will use the same
  // network response. https://webpack.js.org/api/module-methods/#import-
  import(/* webpackChunkName: "language-data", webpackMode: "lazy-once" */
  `./data/languages/${supportedLocale}.json`)
    .then(languages => cb(null, languages.default))
    .catch(error => cb(error));
};
export const withLanguages = createL10NInjector({
  displayName: 'withLanguages',
  propKey: 'languages',
  propLoadingKey: 'isLoadingLanguages',
  loadLocale: getLanguagesForLocale,
});
