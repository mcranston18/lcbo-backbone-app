/*global lcbo-backbone-app, $*/


window.LcboBackboneApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
  }
};

Backbone.$.ajaxSetup({
  headers: {
    'Authorization': 'Token ' + ACCESS_KEY
  }
});

$(document).ready(function () {
  'use strict';
  LcboBackboneApp.init();
});
