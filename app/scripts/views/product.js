/*global LcboBackboneApp, Backbone, JST*/

LcboBackboneApp.Views = LcboBackboneApp.Views || {};

(function () {
  'use strict';

  LcboBackboneApp.Views.Product = Backbone.View.extend({
    template: JST['app/scripts/templates/product.ejs'],

    events: {},

    initialize: function (routeParams) {
      _.bindAll(this, 'render');
      var _this = this;

      this.collection = new LcboBackboneApp.Collections.Products();
      this.collection.getById(routeParams.id);
      this.listenTo(this.collection, 'reset', this.render);
    },

    render: function (data) {
      var product = data.toJSON();
      console.log('product : ', product[0]);
      this.$el.html(this.template({product: product[0]}));
    }
  });
})();
