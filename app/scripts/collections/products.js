/*global LcboBackboneApp, Backbone*/

LcboBackboneApp.Collections = LcboBackboneApp.Collections || {};

(function () {
  'use strict';

  LcboBackboneApp.Collections.Products = Backbone.Collection.extend({
    model: LcboBackboneApp.Models.Product,
    url: '/dummy.json'
  });

})();
