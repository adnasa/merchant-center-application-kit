/* eslint-disable prettier/prettier */
// This file was automatically generated by json-schema-to-typescript.
// DO NOT MODIFY IT BY HAND. Instead, modify the source schema.json file.

export type EnvVariablePlaceholder = string;
export type CspDirective = string[];

export interface JSONSchemaForCustomApplicationConfigurationFilesHttpsDocsCommercetoolsComCustomApplicationsApiReferenceApplicationConfig {
  /**
   * See https://docs.commercetools.com/custom-applications/api-reference/application-config#name
   */
  name: string;
  /**
   * See https://docs.commercetools.com/custom-applications/api-reference/application-config#description
   */
  description?: string;
  /**
   * See https://docs.commercetools.com/custom-applications/api-reference/application-config#entrypointuripath
   */
  entryPointUriPath: string;
  /**
   * See https://docs.commercetools.com/custom-applications/api-reference/application-config#cloudidentifier
   */
  cloudIdentifier: (('gcp-au' | 'gcp-eu' | 'gcp-us' | 'aws-fra' | 'aws-ohio') | EnvVariablePlaceholder) & string;
  /**
   * See https://docs.commercetools.com/custom-applications/api-reference/application-config#mcapiurl
   */
  mcApiUrl?: string;
  /**
   * See https://docs.commercetools.com/custom-applications/api-reference/application-config#oauthscopes
   */
  oAuthScopes: {
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#oauthscopesview
     */
    view: string[];
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#oauthscopesmanage
     */
    manage: string[];
  };
  /**
   * See https://docs.commercetools.com/custom-applications/api-reference/application-config#env
   */
  env: {
    development: {
      /**
       * See https://docs.commercetools.com/custom-applications/api-reference/application-config#envdevelopmentinitialprojectkey
       */
      initialProjectKey: string;
      teamId?: string;
    };
    production: {
      /**
       * See https://docs.commercetools.com/custom-applications/api-reference/application-config#envproductionapplicationid
       */
      applicationId: string;
      /**
       * See https://docs.commercetools.com/custom-applications/api-reference/application-config#envproductionurl
       */
      url: string;
      /**
       * See https://docs.commercetools.com/custom-applications/api-reference/application-config#envproductioncdnurl
       */
      cdnUrl?: string;
    };
  };
  /**
   * See https://docs.commercetools.com/custom-applications/api-reference/application-config#additionalenv
   */
  additionalEnv?: {
    [k: string]: unknown;
  };
  /**
   * See https://docs.commercetools.com/custom-applications/api-reference/application-config#headers
   */
  headers?: {
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#headerscsp
     */
    csp?: {
      'connect-src': CspDirective;
      'font-src'?: CspDirective;
      'img-src'?: CspDirective;
      'script-src'?: CspDirective;
      'style-src'?: CspDirective;
      'frame-src'?: CspDirective;
    };
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#headersfeaturepolicies
     */
    featurePolicies?: {
      [k: string]: unknown;
    };
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#headerspermissionspolicies
     */
    permissionsPolicies?: {
      [k: string]: unknown;
    };
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#headersstricttransportsecurity
     */
    strictTransportSecurity?: ('includeSubDomains' | 'preload')[];
  };
  /**
   * See https://docs.commercetools.com/custom-applications/api-reference/application-config#icon
   */
  icon: string;
  /**
   * See https://docs.commercetools.com/custom-applications/api-reference/application-config#mainmenulink
   */
  mainMenuLink: {
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#mainmenulinkdefaultlabel
     */
    defaultLabel: string;
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#mainmenulinklabelalllocales
     */
    labelAllLocales: {
      locale: 'en' | 'de' | 'es' | 'fr-FR' | 'zh-CN' | 'ja';
      value: string;
    }[];
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#mainmenulinkpermissions
     */
    permissions: string[];
    [k: string]: unknown;
  };
  /**
   * See https://docs.commercetools.com/custom-applications/api-reference/application-config#submenulinks
   */
  submenuLinks: {
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#submenulinksuripath
     */
    uriPath: string;
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#submenulinksdefaultlabel
     */
    defaultLabel: string;
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#submenulinkslabelalllocales
     */
    labelAllLocales: {
      locale: 'en' | 'de' | 'es' | 'fr-FR' | 'zh-CN' | 'ja';
      value: string;
    }[];
    /**
     * See https://docs.commercetools.com/custom-applications/api-reference/application-config#submenulinkspermissions
     */
    permissions: string[];
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
