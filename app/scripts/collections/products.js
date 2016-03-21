/*global LcboBackboneApp, Backbone*/

LcboBackboneApp.Collections = LcboBackboneApp.Collections || {};

(function () {
  'use strict';
  var url = 'https://lcboapi.com/products';

  LcboBackboneApp.Collections.Products = Backbone.Collection.extend({
    model: LcboBackboneApp.Models.Product,
    url: url,

    // fetch: function(options) {
    //   options = options || {};
    //   var data = options.data || {};
    //   options.data = data;
    //   this.reset = true;

    //   console.log('re-fetching!!!!', this);

    //   return Backbone.Collection.prototype.fetch.call(this, options);
    // },

    getByName:function (name) {
      var _this = this;
      $.ajax({
          url: url + '?q=' + name,
          success:function (data) {
            // this success method gets called,
            // but the reset isn't being listened by the view
            _this.reset(data.result);
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
