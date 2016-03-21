/*global LcboBackboneApp, Backbone*/

LcboBackboneApp.Collections = LcboBackboneApp.Collections || {};

(function () {
  'use strict';
  var url = 'https://lcboapi.com/products';

  LcboBackboneApp.Collections.Products = Backbone.Collection.extend({
    model: LcboBackboneApp.Models.Product,
    url: url,

    fetch: function(options) {
      options = options || {};
      var data = options.data || {};
      options.data = data;

      return Backbone.Collection.prototype.fetch.call(this, options);
    },

    getById:function (id) {
      var _this = this;
      $.ajax({
          url: url + '/' + id,
          success:function (data, response) {
            _this.reset(data.result);
          },
          error:function (data) {
            _this.reset(data);
          },
      });
    }
  });

})();
