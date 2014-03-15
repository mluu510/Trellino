Trellino.Models.Board = Backbone.Model.extend({
  urlRoot: '/boards',

  lists: function() {
    if (!this._lists) {
      this._lists = new Trellino.Collections.Lists({
        board: this
      });
    }

    return this._lists;
  },


  parse: function(response) {
    if (response.lists) {
      this.lists().set(response.lists);
      delete response.lists;
    }
    return response;
  }
});
