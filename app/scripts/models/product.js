/*global LcboBackboneApp, Backbone*/

LcboBackboneApp.Models = LcboBackboneApp.Models || {};

(function () {
  'use strict';

  LcboBackboneApp.Models.Product = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
