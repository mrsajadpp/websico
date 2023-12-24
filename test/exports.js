'use strict'

var assert = require('assert')
var websico = require('../');
var request = require('supertest');

describe('exports', function(){
  it('should expose Router', function(){
    assert.strictEqual(typeof websico.Router, 'function')
  })

  it('should expose json middleware', function () {
    assert.equal(typeof websico.json, 'function')
    assert.equal(websico.json.length, 1)
  })

  it('should expose raw middleware', function () {
    assert.equal(typeof websico.raw, 'function')
    assert.equal(websico.raw.length, 1)
  })

  it('should expose static middleware', function () {
    assert.equal(typeof websico.static, 'function')
    assert.equal(websico.static.length, 2)
  })

  it('should expose text middleware', function () {
    assert.equal(typeof websico.text, 'function')
    assert.equal(websico.text.length, 1)
  })

  it('should expose urlencoded middleware', function () {
    assert.equal(typeof websico.urlencoded, 'function')
    assert.equal(websico.urlencoded.length, 1)
  })

  it('should expose the application prototype', function(){
    assert.strictEqual(typeof websico.application, 'object')
    assert.strictEqual(typeof websico.application.set, 'function')
  })

  it('should expose the request prototype', function(){
    assert.strictEqual(typeof websico.request, 'object')
    assert.strictEqual(typeof websico.request.accepts, 'function')
  })

  it('should expose the response prototype', function(){
    assert.strictEqual(typeof websico.response, 'object')
    assert.strictEqual(typeof websico.response.send, 'function')
  })

  it('should permit modifying the .application prototype', function(){
    websico.application.foo = function(){ return 'bar'; };
    assert.strictEqual(websico().foo(), 'bar')
  })

  it('should permit modifying the .request prototype', function(done){
    websico.request.foo = function(){ return 'bar'; };
    var app = websico();

    app.use(function(req, res, next){
      res.end(req.foo());
    });

    request(app)
    .get('/')
    .expect('bar', done);
  })

  it('should permit modifying the .response prototype', function(done){
    websico.response.foo = function(){ this.send('bar'); };
    var app = websico();

    app.use(function(req, res, next){
      res.foo();
    });

    request(app)
    .get('/')
    .expect('bar', done);
  })

  it('should throw on old middlewares', function(){
    assert.throws(function () { websico.bodyParser() }, /Error:.*middleware.*bodyParser/)
    assert.throws(function () { websico.limit() }, /Error:.*middleware.*limit/)
  })
})
