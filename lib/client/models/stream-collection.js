// Generated by CoffeeScript 1.9.3
var ApiHero, Backbone,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

if (typeof window === "undefined" || window === null) {
  Backbone = require('backbone');
  ApiHero = {
    WebSock: {}
  };
  ApiHero.WebSock.StreamModel = require('./stream-model');
}

ApiHero.WebSock.StreamCollection = (function(superClass) {
  extend(StreamCollection, superClass);

  function StreamCollection() {
    return StreamCollection.__super__.constructor.apply(this, arguments);
  }

  StreamCollection.prototype.model = ApiHero.WebSock.StreamModel;

  StreamCollection.prototype.fetch = function() {
    console.log("StreamModel::fetch is not allowed");
    return false;
  };

  StreamCollection.prototype.sync = function() {
    console.log("StreamModel::sync is not allowed");
    return false;
  };

  StreamCollection.prototype._prepareModel = function(attrs, options) {
    var model;
    if (attrs instanceof Backbone.Model) {
      if (!attrs.collection) {
        attrs.collection = this;
      }
      return attrs;
    }
    options = options ? _.clone(options) : {};
    options.collection = this;
    model = new this.model(attrs.body, options);
    model.header = Object.freeze(attrs.header);
    if (!model.validationError) {
      return model;
    }
    this.trigger('invalid', this, model.validationError, options);
    return false;
  };

  StreamCollection.prototype.send = function(data) {
    return this.create(data);
  };

  StreamCollection.prototype.initialize = function() {
    var _client;
    if (arguments[0] instanceof ApiHero.WebSock.Client) {
      return _client = arguments[0];
    }
  };

  StreamCollection.getInstance = function() {
    return this.__instance != null ? this.__instance : this.__instance = new this;
  };

  return StreamCollection;

})(Backbone.Collection);

if (typeof window === "undefined" || window === null) {
  module.exports = ApiHero.WebSock.StreamCollection;
}
