export const todoReducer = (todos, {type, payload}) => {
    switch(type) {
        case "ADD_TODO":
            return [...todos, {'id' : Math.floor(Math.random() * 1000) + 1 , 'title' : payload, 'status' : 'todo'}]
        case "SET_INIT_DATA":
            return payload;
        case "CHANGE-TODO_STATUS":
            const returnValue = todos.map(todo => {
                if(todo.id === +payload) {
                    if(todo.status === 'done'){ 
                        todo.status = "todo"
                    } else {
                        todo.status = "done";
                    }
                    
                }
                return todo;
            });
            console.log(returnValue)
            return returnValue;
        default:
            break;
    }
}