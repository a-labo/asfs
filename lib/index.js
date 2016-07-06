/**
 * Asyncronous file system utility.
 * @module asfs
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get asfs () { return d(require('./asfs')) }
}
