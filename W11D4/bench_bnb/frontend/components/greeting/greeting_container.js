import { connect } from 'react-redux';
import Greeting from './greeting';
import react from 'react';
import { logout } from '../../actions/session_actions'


const mapStateToProps = state => {
   let id = state.session.currentUserId;
   let user = state.entities.users[id];
   
   return {
      currentUser: user,
   }
};

const mapDispatchToProps = dispatch => ({
   logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);