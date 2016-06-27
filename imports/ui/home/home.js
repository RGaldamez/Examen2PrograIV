import './home.html';
import {Posts} from '../../api/post.js';

Template.home.events({
    'click #post_add':function () {
        Posts.insert({
            title:$('#post_title').val(),
            description:$('#post_description').val()
        });
    }

});

Template.home.helpers({
   posts:function () {
       return Posts.find({});
   } 
});
