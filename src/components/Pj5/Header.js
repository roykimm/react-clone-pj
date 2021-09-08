import React, { useContext } from 'react'
import styled from 'styled-components'
import {TodoContext} from './TodoStore.js';

const Header = () => {
    const {todos} = useContext(TodoContext)
    return (
        <div>
            <h1>Hello todo 애플리케이션</h1>
            <div className="todo-length">해야할일 : {todos.filter(v => v.status === 'todo').length} 개가 있습니다.</div>
        </div>
    )
}

export default Header

