exports.config = {
  directConnect: true,

  capabilities: {
    browserName: 'chrome',
  },

  framework: 'jasmine',
  specs: ['../tests/*.spec.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
};
