/*global LcboBackboneApp, Backbone, JST*/

LcboBackboneApp.Views = LcboBackboneApp.Views || {};

(function () {
  'use strict';

  LcboBackboneApp.Views.Products = Backbone.View.extend({

    template: JST['app/scripts/templates/products.ejs'],

    events: {},

    initialize: function () {
      this.collection.fetch();
      this.listenTo(this.collection, 'sync', this.render);
      this.listenTo(this.collection, 'reset', this.render);
    },

    render: function () {
      var products = this.collection.toJSON();
      this.$el.html(this.template({products: products[0]}));
    }
  });
})();
