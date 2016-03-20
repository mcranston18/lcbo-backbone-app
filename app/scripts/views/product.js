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

      this.collection = new LcboBackboneApp.Collections.Products({stupid: routeParams.id});

      this.collection.fetch({
        success: function (data, response) {
          _this.render(response);
        },

        error: function(error) {
          console.log('error : ', error);
        }
      });
    },

    render: function (routeParams) {
      this.$el.html(this.template(routeParams));
    }
  });
})();
