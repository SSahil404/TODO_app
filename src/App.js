import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editingTodoId, setEditingTodoId] = useState();

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let localTodos = JSON.parse(localStorage.getItem("todos"));
            setTodos(localTodos);
        }
    };

    const cancelEditHandler = () => {
        setEditing(false);
        setInputText("");
    };

    return (
        <div className="App">
            <header>
                <h1>My TODO List</h1>
            </header>
            <Form
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
                setStatus={setStatus}
                editing={editing}
                setEditing={setEditing}
                editingTodoId={editingTodoId}
            />
            {editing && (
                <p>
                    Editing A Todo,{" "}
                    <span
                        onClick={cancelEditHandler}
                        style={{ textDecoration: "underline", cursor: "pointer" }}
                    >
                        Cancel Editing
                    </span>
                </p>
            )}
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
                setInputText={setInputText}
                setEditing={setEditing}
                setEditingTodoId={setEditingTodoId}
            />
        </div>
    );
}

export default App;
