import React from "react";

import Todo from "./Todo";

const TodoList = ({
    todos,
    setTodos,
    filteredTodos,
    setInputText,
    setEditing,
    setEditingTodoId,
}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        setInputText={setInputText}
                        setEditing={setEditing}
                        setEditingTodoId={setEditingTodoId}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
