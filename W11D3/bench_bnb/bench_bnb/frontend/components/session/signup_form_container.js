import { signup } from "../../actions/session_actions";
import { connect } from "react-redux";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: "Sign up",
  };
};

const mapDispatchToProps = (state, ownProps) => {
  return {
    processForm: (formUser) => dispatch(signup(formUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
