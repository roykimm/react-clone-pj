import React, { useState , useEffect, useReducer} from 'react'
import List from './List';
import styled from 'styled-components'
import useFetch from './useFetch';
import Header from './Header';
import Form from './Form';
import './Pj5.css'

export const TodoContext = React.createContext();  // 상위 스토어 역활

const todoReducer = (todos, {type, payload}) => {
    switch(type) {
        case "ADD_TODO":

            break;
        case "SET_INIT_DATA":

            return;
        default:
            break;
    }
}

const TodoStore = () => {

    const [todos, dispatch] = useReducer(todoReducer, []);

    //const [todos, setTodos] = useState(['javascript공부하기']);

    //const [newTodo, setNewTodo] = useState();
    
    const loading = useFetch(setTodos, 'http://localhost:8000/leads/api/todos/');

    // const changeInputData = (e) => {

    //     setNewTodo(e.target.value);
    // }

    const addTodo = (newTodo) => {
        setTodos([...todos, {'id' : Math.floor(Math.random() * 1000) + 1 , 'title' : newTodo, 'status' : 'todo'}]);
    }

    // const addTodo = (e) => {
        
    //     e.preventDefault();
    //     setTodos([...todos, {'id' : Math.floor(Math.random() * 1000) + 1 , 'title' : newTodo, 'status' : 'todo'}]);
    // }

    useEffect(() => {
        console.log(todos)
        console.log('새로운 내용이 렌더링 됬음');
    }, [todos])

    const changeTodoStatus = (id) => {
        const updateTodos = todos.map(todo => {
            if(todo.id === +id) {
                if(todo.status === 'done'){ 
                    console.log("tt")
                    todo.status = "todo"
                } else {
                    todo.status = "done";
                }
                
            }
            return todo;
        })
        console.log(todos)
        setTodos(updateTodos);
    }
    

    return (
        <TodoContext.Provider value={{todos, addTodo, loading, changeTodoStatus}} >
            <Wrapper>
                <Header />
                <Form />
                <List />
            </Wrapper>
        </TodoContext.Provider>
    )
}

const Wrapper = styled.div`
    padding : 20px;
`

export default TodoStore
