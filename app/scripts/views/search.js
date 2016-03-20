/*global LcboBackboneApp, Backbone, JST*/

LcboBackboneApp.Views = LcboBackboneApp.Views || {};

(function () {
  'use strict';

  LcboBackboneApp.Views.Search = Backbone.View.extend({
    template: JST['app/scripts/templates/search.ejs'],

    initialize: function () {
      this.render();
    },

    render: function (data) {
      this.$el.html(this.template());
    }
  });
})();
