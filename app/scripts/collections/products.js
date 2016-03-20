/*global LcboBackboneApp, Backbone*/

LcboBackboneApp.Collections = LcboBackboneApp.Collections || {};

(function () {
  'use strict';
  var url = 'https://lcboapi.com/products';

  LcboBackboneApp.Collections.Products = Backbone.Collection.extend({
    model: LcboBackboneApp.Models.Product,
    url: url,

    getByName:function (name) {
      var _this = this;
      $.ajax({
          url: url + '?q=' + name,
          success:function (data) {
            _this.reset(null, data.result);
            console.log('reset collection');
          },
          error:function (error) {
            console.log('error : ', error)
          },
      });
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
