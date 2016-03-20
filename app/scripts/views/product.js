/*global LcboBackboneApp, Backbone, JST*/

LcboBackboneApp.Views = LcboBackboneApp.Views || {};

(function () {
  'use strict';

  LcboBackboneApp.Views.Product = Backbone.View.extend({

    template: JST['app/scripts/templates/product.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function (routeParams) {
      console.log('view: product');
      this.listenTo(this.model, 'change', this.render);
      this.render(routeParams);
    },

    render: function (routeParams) {
      console.log('routeParams : ', routeParams);
      this.$el.html(this.template(routeParams));
    }
  });
})();
