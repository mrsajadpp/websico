'use strict'

var assert = require('assert')
var websico = require('../')

describe('app', function(){
  describe('.locals', function () {
    it('should default object', function () {
      var app = websico()
      assert.ok(app.locals)
      assert.strictEqual(typeof app.locals, 'object')
    })

    describe('.settings', function () {
      it('should contain app settings ', function () {
        var app = websico()
        app.set('title', 'Websico')
        assert.ok(app.locals.settings)
        assert.strictEqual(typeof app.locals.settings, 'object')
        assert.strictEqual(app.locals.settings, app.settings)
        assert.strictEqual(app.locals.settings.title, 'Websico')
      })
    })
  })
})
