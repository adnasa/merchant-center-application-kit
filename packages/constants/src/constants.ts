// DOM elements
export const PORTALS_CONTAINER_ID = 'portals-container';

// Links
export const SUPPORT_PORTAL_URL =
  'https://jira.commercetools.com/servicedesk/customer/portal/1/create/167';

// Notification actions
export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';
export const HIDE_ALL_PAGE_NOTIFICATIONS = 'HIDE_ALL_PAGE_NOTIFICATIONS';

// Notifications
export const NOTIFICATION_DOMAINS: {
  GLOBAL: 'global';
  PAGE: 'page';
  SIDE: 'side';
} = {
  GLOBAL: 'global',
  PAGE: 'page',
  SIDE: 'side',
};
export const NOTIFICATION_KINDS_SIDE: {
  error: 'error';
  warning: 'warning';
  info: 'info';
  success: 'success';
} = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
};
export const NOTIFICATION_KINDS_GLOBAL: {
  error: 'error';
  warning: 'warning';
  info: 'info';
  success: 'success';
  'unexpected-error': 'unexpected-error';
} = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
  'unexpected-error': 'unexpected-error',
};
export const NOTIFICATION_KINDS_PAGE: {
  error: 'error';
  warning: 'warning';
  info: 'info';
  success: 'success';
  'unexpected-error': 'unexpected-error';
  'api-error': 'api-error';
} = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
  'unexpected-error': 'unexpected-error',
  'api-error': 'api-error',
};
export type TAppNotificationDomain = (typeof NOTIFICATION_DOMAINS)[keyof typeof NOTIFICATION_DOMAINS];
// Alias to `NOTIFICATION_DOMAINS` for backwards compatibility
export const DOMAINS = NOTIFICATION_DOMAINS;

export type TAppNotificationKindSide = (typeof NOTIFICATION_KINDS_SIDE)[keyof typeof NOTIFICATION_KINDS_SIDE];
export type TAppNotificationKindGlobal = (typeof NOTIFICATION_KINDS_GLOBAL)[keyof typeof NOTIFICATION_KINDS_GLOBAL];
export type TAppNotificationKindPage = (typeof NOTIFICATION_KINDS_PAGE)[keyof typeof NOTIFICATION_KINDS_PAGE];
export type TAppNotificationKind =
  | TAppNotificationKindSide
  | TAppNotificationKindGlobal
  | TAppNotificationKindPage;
export type TAppNotificationOfDomain = { domain: TAppNotificationDomain };
export type TAppNotificationOfKind<
  T extends TAppNotificationOfDomain
> = TAppNotificationOfDomain & {
  // Conditionally check the shape based on other values
  kind: 'global' extends T['domain']
    ? TAppNotificationKindGlobal
    : 'page' extends T['domain']
    ? TAppNotificationKindPage
    : 'side' extends T['domain']
    ? TAppNotificationKindSide
    : never;
};
export type TAppNotificationApiError<ExtraFields extends {} = {}> = {
  message: string;
  code?: string;
} & ExtraFields;
export type TAppNotificationValuesApiError<ExtraFields extends {} = {}> = {
  errors: TAppNotificationApiError<ExtraFields>[];
};
export type TAppNotificationValuesUnexpectedError = { errorId?: string };
export type TAppNotification<
  T extends TAppNotificationOfKind<T>
> = TAppNotificationOfKind<T> & {
  id: number;
  // Conditionally check the shape based on other values
  text?: TAppNotificationKindSide extends T['kind'] ? string : never;
  values?: 'api-error' extends T['kind']
    ? TAppNotificationValuesApiError
    : 'unexpected-error' extends T['kind']
    ? TAppNotificationValuesUnexpectedError
    : never;
};
export type TAppNotificationGlobal = TAppNotification<{
  domain: typeof NOTIFICATION_DOMAINS.GLOBAL;
  kind: TAppNotificationKindGlobal;
}>;
export type TAppNotificationPage = TAppNotification<{
  domain: typeof NOTIFICATION_DOMAINS.PAGE;
  kind: TAppNotificationKindPage;
}>;
export type TAppNotificationSide = TAppNotification<{
  domain: typeof NOTIFICATION_DOMAINS.SIDE;
  kind: TAppNotificationKindSide;
}>;

// Fallback string when there is no localized value
export const NO_VALUE_FALLBACK = '- - - -';

// HTTP requests and responses
export const STATUS_CODES: {
  UNAUTHORIZED: 401;
  FORBIDDEN: 403;
  UNAUTHENTICATED: 299;
  NOT_FOUND: 404;
} = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  UNAUTHENTICATED: 299,
  NOT_FOUND: 404,
};
export type TStatusCode = (typeof STATUS_CODES)[keyof typeof STATUS_CODES];

export const LOGOUT_REASONS: {
  USER: 'user';
  UNAUTHORIZED: 'unauthorized';
  INVALID: 'invalid';
  DELETED: 'deleted';
} = {
  USER: 'user',
  UNAUTHORIZED: 'unauthorized',
  INVALID: 'invalid',
  DELETED: 'deleted',
};
export type TLogoutReason = (typeof LOGOUT_REASONS)[keyof typeof LOGOUT_REASONS];

export const GRAPHQL_TARGETS: {
  MERCHANT_CENTER_BACKEND: 'mc';
  COMMERCETOOLS_PLATFORM: 'ctp';
  DASHBOARD_SERVICE: 'dashboard';
  PIM_INDEXER: 'pim-indexer';
  SETTINGS_SERVICE: 'settings';
  ADMINISTRATION_SERVICE: 'administration';
} = {
  MERCHANT_CENTER_BACKEND: 'mc',
  COMMERCETOOLS_PLATFORM: 'ctp',
  DASHBOARD_SERVICE: 'dashboard',
  PIM_INDEXER: 'pim-indexer',
  SETTINGS_SERVICE: 'settings',
  ADMINISTRATION_SERVICE: 'administration',
};
export type TGraphQLTargets = (typeof GRAPHQL_TARGETS)[keyof typeof GRAPHQL_TARGETS];
