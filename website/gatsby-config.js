const colorPresets = require('@commercetools-docs/gatsby-theme-docs/color-presets');

module.exports = {
  // https://www.gatsbyjs.com/docs/reference/release-notes/v2.28/#feature-flags-in-gatsby-configjs
  // https://www.gatsbyjs.com/docs/reference/release-notes/v2.30
  flags: {
    DEV_SSR: false, // good for catching bugs when developing, but too slow for productive content authoring
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  pathPrefix: '/custom-applications/legacy',
  siteMetadata: {
    title: 'Custom Applications',
    description: 'Develop applications for the Merchant Center',
    author: 'commercetools',
    betaLink: '/support-policy',
    repositoryUrl:
      'https://github.com/commercetools/merchant-center-application-kit',
  },
  plugins: [
    // Pages for React components
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: `${__dirname}/../packages/application-components/src/`,
        ignore: ['.js', '.tsx'],
      },
    },
    // Docs theme
    {
      resolve: '@commercetools-docs/gatsby-theme-docs',
      options: {
        websiteKey: 'custom-applications-legacy',
        colorPreset: colorPresets.merchantCenterDeveloperDocs.key,
        beta: true,
        excludeFromSearchIndex: true,
        gaTrackingId: 'UA-38285631-3',
        // Patch the slug creation to get meaningful slugs for the application components
        createNodeSlug: (originalSlug, { node }) => {
          const isNodeForAppComponent =
            node.fileAbsolutePath &&
            node.fileAbsolutePath.includes('packages/application-components');
          if (isNodeForAppComponent) {
            return originalSlug.replace(
              /^\/components\/(.*)\/(.*)\/$/,
              '/components/$2/'
            );
          }
          return originalSlug;
        },
        globalNotification: {
          notificationType: 'warning',
          content:
            'This is the legacy documentation of Project-level Custom Applications, which is in [maintenance mode](https://docs.commercetools.com/custom-applications/migrating-from-project-level-custom-applications). Visit the new documentation for [Org-level Custom Applications](https://docs.commercetools.com/custom-applications).',
        },
      },
    },
  ],
};
