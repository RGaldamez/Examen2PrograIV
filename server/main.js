import { Meteor } from 'meteor/meteor';
import { Posts } from '../imports/api/post.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({

});

Meteor.publish("posts", function () {
  return Posts.find({});
});