import React, { useEffect, useReducer} from 'react'
import List from './List';
import styled from 'styled-components'
import useFetch from './useFetch';
import Header from './Header';
import Form from './Form';
import './Pj5.css'
import {todoReducer} from './Reducers';

export const TodoContext = React.createContext();  // 상위 스토어 역활


const TodoStore = () => {

    const [todos, dispatch] = useReducer(todoReducer, []);

    const setInitData = (initData) => {
        dispatch({type:"SET_INIT_DATA", payload: initData})
    }

    //const [todos, setTodos] = useState(['javascript공부하기']);

    //const [newTodo, setNewTodo] = useState();
    
    const loading = useFetch(setInitData, 'http://localhost:8000/leads/api/todos/');

    // const changeInputData = (e) => {

    //     setNewTodo(e.target.value);
    // }

    useEffect(() => {
        console.log(todos)
        console.log('새로운 내용이 렌더링 됬음');
    }, [todos])

    return (
        <TodoContext.Provider value={{todos, loading, dispatch}} >
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
