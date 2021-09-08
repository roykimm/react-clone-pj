import React, { useContext } from 'react'
import { TodoContext } from './TodoStore'

const Item = ({todo}) => {

    const { dispatch } = useContext(TodoContext);

    const toggleItem = (e) => {
        const id = e.target.dataset.id;
        console.log("id : " + id)
        dispatch({type: 'CHANGE_TODO_STATUS', payload : id})
    }

    const itemClassName= todo.status === 'done' ? 'item-done' : 'item-todo';
    return (
        <li data-id={todo.id}
            onClick={toggleItem}
            className={itemClassName}
        >
            {todo.title}
        </li>
    )
}

export default Item
