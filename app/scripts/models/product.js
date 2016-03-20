/*global LcboBackboneApp, Backbone*/

LcboBackboneApp.Models = LcboBackboneApp.Models || {};

(function () {
  'use strict';
  var url = 'https://lcboapi.com/products';

  LcboBackboneApp.Models.Product = Backbone.Model.extend({
    url: url,
    initialize: function() {},
    defaults: {}
  });

})();
