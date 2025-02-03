import { useEffect, useState }from 'react';

import { getTodos, Todo } from '../services/api';


const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    
    useEffect(() => {
        fetchTodos();
    }, 
    []
    );

     const fetchTodos = async () => {
        try {
            const data = await getTodos();
            setTodos(data);
        } catch (error) {
            console.error('Couldn´t get tasks:', error);
        }
    };

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.title}</strong> - {todo.status}
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default TodoList;