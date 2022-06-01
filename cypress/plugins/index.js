/// <reference types="cypress" />

const wp = require('@cypress/webpack-preprocessor')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  const options = {
    webpackOptions: require('../../webpack.config'),
  }

  on('file:preprocessor', wp(options))
}

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};