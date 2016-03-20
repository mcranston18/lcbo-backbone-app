/*global LcboBackboneApp, Backbone, JST*/

LcboBackboneApp.Views = LcboBackboneApp.Views || {};

(function () {
  'use strict';

  LcboBackboneApp.Views.Products = Backbone.View.extend({

    template: JST['app/scripts/templates/products.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      _.bindAll(this, 'render');
      var _this = this;

      this.collection = new LcboBackboneApp.Collections.Products();

      this.collection.fetch({
        success: function (data, response) {
          // console.log('data : ', data);
          console.log('response : ', response);
          _this.render(response);
        },

        error: function(error) {
          console.log('error : ', error);
        }
      });

      // this.render();

      // this.listenTo(this.collection, 'change', this.render);
    },

    render: function (response) {
      // console.log('this.collection : ', this.collection.toJSON() );
      this.$el.html(this.template({products: response}));
    }

  });

})();
