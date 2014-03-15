window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var rootEl = $('div#content');
    new Trellino.Routers.AppRouter({
      rootEl: rootEl
    });
    Backbone.history.start();

  }
};

$(Trellino.initialize);