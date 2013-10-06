define(['backbone', 'marionette', 'modules/posts/models/post', 'modules/posts/views/post'],
function(Backbone, Marionette, Post, PostView) {
    return Backbone.Marionette.CollectionView.extend({
        tagName: 'ul',
        itemView: PostView,
        events: {
            'click .delete': '_deletePostCallback'
        },

        _deletePostCallback: function(e) {
            e.preventDefault();

            this.collection.get($(e.currentTarget).data('id')).destroy();
        }
    });
});