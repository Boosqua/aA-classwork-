import React from 'react';

export default class SessionForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.errors = this.errors.bind(this);
   }

   handleInput(type) {
      // debugger
      return (e) => {
         this.setState({ [type]: e.target.value })
      }
   }

   handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
      this.setState({
        username: "",
        password: "",
      });
   }
   errors() {
      if ( this.props.errors.session.errors ){
      return (
         <p className="error-messages">
        {this.props.errors.session.errors.responseText}
         </p>
      )
      } else {
         return
      }
   }
   render(){

      return (
         <div>{ this.props.formType }
            <form className="session-form" onSubmit={this.handleSubmit}>
               <label> Username:
                  <input type="text" 
                     value={this.state.username} 
                     onInput={this.handleInput('username')}/>
               </label>
               <label> Password:
                  <input type="password" 
                     value={this.state.password} 
                     onInput={this.handleInput('password')}/>
               </label>
               <br/>
               { this.errors() }
               <br/>
               <button>Submit</button>
            </form>
         </div>
      )
   }
}