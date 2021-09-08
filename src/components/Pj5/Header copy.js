import React from 'react'
import styled from 'styled-components'
import {TodoContext} from './App.js';

const Header = ({todos}) => {
    return (
        <TodoContext.Consumer>
            {
                ({ todos }) => (
                    <div>
                        <h1>Hello todo 애플리케이션</h1>
                        <div className="todo-length">해야할일 : {todos.filter(v => v.status === 'todo').length} 개가 있습니다.</div>
                    </div>
                )
            }
        </TodoContext.Consumer>
    )
}


export default Header

