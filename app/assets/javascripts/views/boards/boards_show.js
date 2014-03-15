Trellino.Views.BoardsShow = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render);
    var lists = this.model.lists();
    console.log(lists);
  },

  template: JST['boards/show'],

  render: function() {

    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    return this;
  }
})