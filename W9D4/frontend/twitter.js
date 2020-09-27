const FollowToggle = require("./follow_toggle.js");
const APIUtil = require("./api_util.js");
const UsersSearch = require("./users_search.js");

// console.log('hello')

$(() => {
   $('button.follow-toggle').each(function(index){
      // debugger
      new FollowToggle($(this), {});
   })

   $('nav.users-search').each(function(index){
      new UsersSearch($(this), {});
   })
})
