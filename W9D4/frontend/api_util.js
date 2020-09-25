const APIUtil = {
    followUser: id => {
       console.log('hi')
      $.ajax({
         url: `/users/${id}/follow`,
         method: 'POST',
         dataType: 'JSON'
      })
   },

    unfollowUser: id => {
       $.ajax({
          url: `/users/${id}/follow`,
          method: 'DELETE',
          dataType: 'JSON'
       })
       console.log(1)
    }
}

module.exports = APIUtil;