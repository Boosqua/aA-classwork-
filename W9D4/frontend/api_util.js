const APIUtil = {


   followUser: id => APIUtil.changeFollowStatus(id, 'POST'),
   unfollowUser: id => APIUtil.changeFollowStatus(id, 'DELETE'),
   
   
   changeFollowStatus:(id, method) => (
      $.ajax({ 
         url: `/users/${id}/follow`,
         dataType: 'JSON',
         method
      })
   ),

   // unfollowUser: id => (
   //    $.ajax({
   //       url: `/users/${id}/follow`,
   //       method: 'DELETE',
   //       dataType: 'JSON'
   //    })
   // )
};

module.exports = APIUtil;