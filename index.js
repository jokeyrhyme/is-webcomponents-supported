'use strict'

/**
 * @param {`Document`} [doc] a DOM Document to run tests against
 * @returns {`Boolean`} does this JavaScript environment support WebComponents?
 */
module.exports = function (doc) {
  doc = doc || global.document
  return !!(
    doc &&
    'registerElement' in doc &&
    'import' in doc.createElement('link') &&
    'content' in doc.createElement('template')
  )
}
