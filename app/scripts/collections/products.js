/*global LcboBackboneApp, Backbone*/

LcboBackboneApp.Collections = LcboBackboneApp.Collections || {};

(function () {
  'use strict';
  var url = 'https://lcboapi.com/products';

  LcboBackboneApp.Collections.Products = Backbone.Collection.extend({
    model: LcboBackboneApp.Models.Product,
    url: url
  });

})();
