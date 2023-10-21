import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, deleteTodo, updateTodo }) => {
    return (
        <ul>
            {todoList.map((el, key) => <TodoItem key={key} todo={el} deleteTodo={deleteTodo} updateTodo={updateTodo} />)}
        </ul>
    )
};

export default TodoList;