import React from "react";
import { receiveTodo } from "../../actions/todo_actions"

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           title: "",
           body: "",
           done: false,
           id: Math.floor(Math.random() * 10000) //will refactor for rails :D
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateDone = this.updateDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        event.preventDefault();

        const todo = this.state;

        this.props.receiveTodo(todo);
        this.setState({
            title: "",
            body: "",
            done: false,
            id: Math.floor(Math.random() * 10000) //will refactor for rails :D
        })
    }
    updateTitle(e){
       this.setState({title: e.target.value }) 
    }

    updateBody(e){
        this.setState({body: e.target.value }) 
    }

    updateDone(e){
        debugger
        this.setState({ done: e.target.value === "true" ?
            true :
            false }) 
    }
    
    render() {
       return (
          <form onSubmit={this.handleSubmit}>
                <h3>Add a Goal!</h3>
                <br></br>
                <label>Title
                    <input type="text" onChange={this.updateTitle} value={this.state.title}/>
                </label>
               <br></br>
                <label>Body
                    <input type="text" onChange={this.updateBody} value={this.state.body}/>
                </label>
               <br></br>
                <label>Done?
                  <label>true
                     <input 
                        type="radio" 
                        value="true" 
                        checked={this.state.done ? "checked" : ""}
                        onChange={this.updateDone}/>
                  </label>
                  <label>false
                     <input 
                        type="radio" 
                        value="false" 
                        checked={this.state.done ? "" : "checked"}
                        onChange={this.updateDone}/>
                  </label>

                </label>
                <br></br>
                <button>Submit Goal</button>
          </form>
       
        )
    }
}
export default TodoForm;