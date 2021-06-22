import React from "react";

const Form = ({
    inputText,
    setInputText,
    todos,
    setTodos,
    setStatus,
    editing,
    setEditing,
    editingTodoId,
}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText === "") return;

        if (editing) {
            setTodos(
                todos.map((item) => {
                    if (item.id === editingTodoId) {
                        return {
                            ...item,
                            text: inputText,
                        };
                    }
                    return item;
                })
            );
            setEditing(false);
        } else {
            setTodos([
                ...todos,
                {
                    text: inputText,
                    completed: false,
                    id: Math.random() * 1000,
                },
            ]);
        }
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <form>
            <div className="input-control">
                <input
                    id="form"
                    value={inputText}
                    onChange={inputTextHandler}
                    type="text"
                    className="todo-input"
                />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
