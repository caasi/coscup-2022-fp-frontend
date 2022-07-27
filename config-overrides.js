const { useBabelRc, override, disableEsLint } = require('customize-cra')

module.exports = override(
  useBabelRc(),
  disableEsLint(),
)
