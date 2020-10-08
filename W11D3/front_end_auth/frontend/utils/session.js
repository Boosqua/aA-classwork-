export const postUser = user => (
   $.ajax({
      url: '/api/users',
      method: 'POST',
      data: { user },
   })
);

export const postSession = user => (
   $.ajax({
      url: '/api/session',
      method: 'POST',
      date: { user },
   })
);

export const deleteSession = () => (
   $.ajax({
      url: '/api/session',
      method: 'DELETE',
   })
);