import React from 'React';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  
   const display = currentUser ? (
     <div>
       <p>Hello {currentUser.username}!</p>
       <button onClick={logout}>Log Out</button>
     </div>
   ) : (
     <div>
       <Link className="btn" to="/signup">
         Sign Up  
       </Link>
       <Link className="btn" to="/login">
         Log in
       </Link>
     </div>
   );

   return (
      <div>

         <h1 className="logo">Bench BnB</h1>
         <div>
            {display}
         </div>
      </div>
      
   );
};