Trellino.Views.ListsNew = Backbone.View.extend({
  initialize: function(options) {
    this.board = options.board;
  },

  template: JST['lists/new'],

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    'submit form' : 'handleSubmit'
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var params = $(e.currentTarget).serializeJSON()['list'];
    var newList = new Trellino.Models.List(params);
    newList.set('board_id', this.board.get('id'));
    newList.save({}, {
      success: function() {
        this.board.lists().add(newList);
        // redurect to list
        var path = 'boards/' + this.board.get('id') + '/lists/' + newList.get('id');
        Backbone.history.navigate(path, { trigger: true });
      }
    });
  }
})