import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
   return {
      errors: state.errors,
      formType: 'Log in'
   }
}

const mapDispatchToProps = (state, ownProps) => {
   return {
      processForm: formUser => dispatch(login(formUser)) 
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);