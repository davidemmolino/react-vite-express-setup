import React, { useState } from 'react';
import InputEdit from './InputEdit';

const TodoItem = ({ todo, key, deleteTodo, updateTodo }) => {
    const [edit, setEdit] = useState(false);
    const [updatedTodoItem, setUpdatedTodoItem] = useState("");

    // sets edit bool back to false.
    const doneEdit = () => {
        setEdit(false);
        updateTodo(updatedTodoItem)
    };
    
    return (
        <li key={`${todo}`}>{ todo }
            { edit ? <InputEdit doneEdit={doneEdit} setUpdatedTodoItem={setUpdatedTodoItem} /> : <button onClick={() => setEdit(true)}>edit</button>}
            <button onClick={() => deleteTodo(todo)}>delete</button>
        </li>
    )
};

export default TodoItem;