/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'experiment',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 85.159.208.172:35729 85.159.208.172:4200 'unsafe-eval'",
      'font-src': "'self' data: fonts.gstatic.com",
      'connect-src': "'self' ws://85.159.208.172:35729",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' data: fonts.googleapis.com",
      'media-src': "'self'"
    },
    EmberENV: {
      FEATURES: {
        'ember-htmlbars-attribute-syntax': true,
        'ember-htmlbars-component-generation': true
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
