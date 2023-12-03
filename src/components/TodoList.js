
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { useGlobalState } from './GlobalState'; 

function TodoList() {

  const { globals, setGlobals } = useGlobalState();

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    setGlobals({ todos: [...globals.todos, todo] });
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    const updatedTodos = globals.todos.map((item) => (item.id === todoId ? newValue : item));
    setGlobals({ todos: updatedTodos });
  };

  const removeTodo = (id) => {
    const removeArr = globals.todos.filter((todo) => todo.id !== id);
    setGlobals({ todos: removeArr });
  };

  const completeTodo = (id) => {
    const updatedTodos = globals.todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setGlobals({ todos: updatedTodos });
  };

  return (
    <div>
      <h1>What is your plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={globals.todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default TodoList;
