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
    var searchView = new LcboBackboneApp.Views.Search();
    var productsView = new LcboBackboneApp.Views.Products();
    // console.log('searchView : ', searchView);
    $("#search").html(searchView.el);
    $("#product").html(productsView.el);
  });

  appRouter.on('route:productRoute', function(id) {
    var productRoute = new LcboBackboneApp.Views.Product({id: id});
    $("#product").html(productRoute.el);
  });

  appRouter.on('route:notFound', function(param) {
    console.log('show a 404 page!');
  });

  Backbone.history.start();
})();
