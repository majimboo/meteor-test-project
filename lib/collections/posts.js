Posts = new Mongo.Collection('posts');
Posts.attachSchema(PostSchema);

Images = new FS.Collection("images", {
   stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});