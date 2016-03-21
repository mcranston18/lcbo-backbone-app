/*global LcboBackboneApp, Backbone, JST*/

LcboBackboneApp.Views = LcboBackboneApp.Views || {};

(function () {
  'use strict';

  LcboBackboneApp.Views.Search = Backbone.View.extend({
    template: JST['app/scripts/templates/search.ejs'],

    initialize: function () {
      this.render();
    },

    events: {
      'keydown input': 'onKeyDown'
    },

    onKeyDown: function(e) {
      var search = $(e.currentTarget).val();
      var options = {
        data: {q: search}
      };

      this.collection.fetch(options);
    },

    render: function (data) {
      this.$el.html(this.template());
    }
  });
})();
