Trellino.Collections.Lists = Backbone.Collection.extend({

  model: Trellino.Models.List,

  getOrFetch: function(id) {
    var model = this.get(id);
    if (!model) {
      model = new Trellino.Models.List({ id: id });
      model.fetch();
    }
    return model;
  }
});
