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

      console.log('routeParams : ', routeParams);
      this.model = new LcboBackboneApp.Models.Product({id: routeParams.id});

      this.model.fetch({
        success: function (data, response) {
          console.log('data : ', data);
          console.log('response : ', response);
          _this.render(response);
        },

        error: function(error) {
          console.log('error : ', error);
        }
      });

      // this.listenTo(this.model, 'change', this.render);
    },

    render: function (routeParams) {
      // console.log('routeParams : ', routeParams);
      this.$el.html(this.template(routeParams));
    }
  });
})();
