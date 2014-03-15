Trellino.Views.BoardsIndex = Backbone.View.extend({
  initialize: function() {
    var that = this
    this.listenTo(this.collection, 'sync add remove', this.render);
  },

  template: JST['boards/index'],

  render: function() {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    return this;
  },

  events: {
    'click a.show-board' : "handleShow"
  },

  handleShow: function(event) {
    event.preventDefault();

    var id = $(event.currentTarget).data('id')
    Backbone.history.navigate('/boards/' + id, { trigger: true });
  }

});
