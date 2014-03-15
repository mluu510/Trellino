Trellino.Views.BoardsNew = Backbone.View.extend({

  template: JST['boards/new'],

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
    var params = $(e.currentTarget).serializeJSON()['board'];
    var newBoard = new Trellino.Models.Board(params);
    newBoard.save({}, {
      success: function() {
        Trellino.Collections.boards.add(newBoard);
        Backbone.history.navigate('boards/' + newBoard.escape('id'), { trigger: true });
      }
    });
  }
})