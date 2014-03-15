Trellino.Routers.AppRouter = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.rootEl;
  },
  routes: {
    '': 'index',
    'boards/new' : 'boardsNew',
    'boards/:id' : 'boardsShow',
    'boards/:board_id/lists/new' : 'listsNew'
  },


  index: function() {
    var boards = Trellino.Collections.boards;
    boards.fetch();
    var boardsIndexView = new Trellino.Views.BoardsIndex({
      collection: boards
    });
    this._swapView(boardsIndexView);
  },

  boardsNew: function() {
    var boardsNewView = new Trellino.Views.BoardsNew();
    this._swapView(boardsNewView);
  },

  boardsShow: function(id) {
    var board = Trellino.Collections.boards.getOrFetch(id);
    var boardsShowView = new Trellino.Views.BoardsShow({
      model: board
    });
    this._swapView(boardsShowView);
  },

  listsNew: function(board_id) {
    var board = Trellino.Collections.boards.get(board_id);
    var listsNewVIew = new Trellino.Views.ListsNew({
      board: board
    });
    this._swapView(listsNewVIew);
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }

});
