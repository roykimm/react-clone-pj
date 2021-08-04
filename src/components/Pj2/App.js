import React , { useState , useEffect } from 'react'

const App = () => {

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{text : 'learn hooks'}]);

    // componentDidMount, componentDidUpdate와 비슷
    useEffect(()=> {
        document.title = `You clicked ${count} times!`;
    })

    return (
        <div>
            <p>you clicked { count } times</p>
            <button onClick={() => setCount(count + 1)}>
                click me!
            </button>
        </div>
    )
}

export default App
