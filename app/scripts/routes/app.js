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

      // console.log( 'LcboBackboneApp.Views.Products : ', LcboBackboneApp.Views.Products )

      var productsRoute = new LcboBackboneApp.Views.Products();
      $("#content").html(productsRoute.el);
  });

  appRouter.on('route:productRoute', function(param) {
      console.log('hello from single product!', param);
  });

  appRouter.on('route:notFound', function(param) {
      console.log('show a 404 page!');
  });

  Backbone.history.start();
})();
