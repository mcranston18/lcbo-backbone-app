/*global LcboBackboneApp, Backbone, JST*/

LcboBackboneApp.Views = LcboBackboneApp.Views || {};

(function () {
  'use strict';

  LcboBackboneApp.Views.Products = Backbone.View.extend({

    template: JST['app/scripts/templates/products.ejs'],

    events: {},

    initialize: function () {
      this.collection = new LcboBackboneApp.Collections.Products();
      this.collection.fetch();
      this.listenTo(this.collection, 'sync', this.render);
    },

    render: function (data, products) {
      this.$el.html(this.template({products: products}));
    }
  });
})();
