Trellino.Collections.Boards = Backbone.Collection.extend({

  model: Trellino.Models.Board,
  url: '/boards',

  getOrFetch: function(id) {
    var model = this.get(id) || new Trellino.Models.Board({ id: id });
    model.fetch();
    return model;
  }

});

Trellino.Collections.boards = new Trellino.Collections.Boards();
