MainPageController = BaseController.extend({
  template: 'postsList',

  findOptions: function() {
    return { sort: {createdAt: -1}};
  },

  waitOn: function() {
    return Meteor.subscribe('allPosts', this.findOptions());
  },

  data: function(){
    return { posts: Posts.find({ publicize : true }, this.findOptions()) };
  }
});

ProfilePageController = BaseController.extend({
  template: 'postsList',

  findOptions: function() {
    return { sort: {createdAt: -1}};
  },

  waitOn: function() {
    return Meteor.subscribe('allPosts', this.findOptions());
  },

  data: function(){
    return { posts: Posts.find({ userId : Meteor.userId() }, this.findOptions()) };
  }
});