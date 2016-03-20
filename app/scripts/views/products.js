/*global LcboBackboneApp, Backbone, JST*/

LcboBackboneApp.Views = LcboBackboneApp.Views || {};

(function () {
  'use strict';

  LcboBackboneApp.Views.Products = Backbone.View.extend({

    template: JST['app/scripts/templates/products.ejs'],
    events: {},
    initialize: function () {
      var _this = this;
      _.bindAll(this, 'render');

      this.collection = new LcboBackboneApp.Collections.Products();

      this.collection.fetch({
        success: function (data, response) {
          _this.render(response);
        },

        error: function(error) {
          console.log('error : ', error);
        }
      });
    },

    render: function (response) {
      this.$el.html(this.template({products: response}));
    }
  });
})();
