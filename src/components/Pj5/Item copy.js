import React from 'react'

const Item = ({todo, dispatch}) => {
    
    const toggleItem = (e) => {
        const id = e.target.dataset.id;
        changeTodoStatus(id);
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