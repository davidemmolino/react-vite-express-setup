import React, { useState } from 'react';
import TodoList from './TodoList';
import axios from "axios";

const TodoWrapper = () => {
    // store state at this level
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState("");
    const urlWithProxy = "/api/v1";

    function postDataToServer(todoList) {
        const postTodoList = {
            todoList
        }
        axios
          .post(urlWithProxy, todoList)
          .then((res) => console.log(res))
          .catch((err) => {
            console.error(err);
          });
      }

    // will update the input field controlled component
    const handleInputfield = (e) => {
        setTodo(e.target.value)
    };

    // when clicked it will add the todo obj to the todolist
    const addTodo = () => {
        setTodoList([...todoList, todo]);
        postDataToServer([...todoList, todo])
        setTodo("")
    };

    // when update is clicked I want to update the specified todo item
    const updateTodo = (updatedTodoItem) => {
        // this should check if there were changes to that particular item and if there were then update? or maybe just update regardless.
        alert('clicked')
        // map over the items, find the original and update its value.
        todoList.map(el => {
        });
    };

    // when delete is clicked I want to remove the todo item from todoList array
    // use filter method, find the key and return all values which aren't that key.
    const deleteTodo = (todo) => {
        const updatedList = todoList.filter(el => el !== todo);
        setTodoList(updatedList);
    };

    // hitting enter will add the item to the list.
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTodo()
        }
    };

    return (
        <div>
            <input type="text" value={todo} onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => handleInputfield(e)}/>
            <TodoList todoList={todoList} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        </div>
    )
};

export default TodoWrapper;