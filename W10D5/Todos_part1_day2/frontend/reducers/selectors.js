
const allTodos = (state) => {
    
    let keys = Object.keys(state.todos)
    let allTodos = keys.map(key => state.todos[key])
    return allTodos
}

export default allTodos;