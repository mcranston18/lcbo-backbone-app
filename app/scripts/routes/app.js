/*global LcboBackboneApp, Backbone*/

LcboBackboneApp.Routers = LcboBackboneApp.Routers || {};

(function () {
  'use strict';


  LcboBackboneApp.Routers.App = Backbone.Router.extend({
      routes: {
          'products': 'productsRoute',
          'products/:id': 'productRoute',
          '*notFound': 'notFound'
      }
  });

  // Initiate the router
  var appRouter = new LcboBackboneApp.Routers.App;

  appRouter.on('route:productsRoute', function(actions) {
      console.log('route: products');
      var productsRoute = new LcboBackboneApp.Views.Products();
      $("#content").html(productsRoute.el);
  });

  appRouter.on('route:productRoute', function(id) {
      console.log('route: product ');
      var productRoute = new LcboBackboneApp.Views.Product({id: id});
      $("#content").html(productRoute.el);
  });

  appRouter.on('route:notFound', function(param) {
      console.log('show a 404 page!');
  });

  Backbone.history.start();
})();
