/*global LcboBackboneApp, Backbone*/

LcboBackboneApp.Models = LcboBackboneApp.Models || {};

(function () {
  'use strict';
  var url = 'https://lcboapi.com/products';

  LcboBackboneApp.Models.Search = Backbone.Model.extend({
    defaults: {
      placeholder: 'Search for a product'
    }
  });
})();
