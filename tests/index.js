'use strict'

// 3rd-party modules

var test = require('tape')

// our modules

var isWebComponentsSupported = require('../')

// this module

test('module exports a function', function (t) {
  t.ok(typeof isWebComponentsSupported === 'function')
  t.end()
})

test('function returns a Boolean', function (t) {
  t.ok(typeof isWebComponentsSupported() === 'boolean')
  t.end()
})
