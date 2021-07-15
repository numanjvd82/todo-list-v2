import React from 'react';
import List from './components/List/List';
import Alert from './components/Alert/Alert';
import './App.css';
import { useTodoContext } from './Context/Context';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

const App = () => {
  const { alert, todos, clearTodos } = useTodoContext();

  return (
    <>
      {alert.show && <Alert />}
      <Header />
      <section className="container">
        <h1>Todo List</h1>
        <Form />
        <section className="tasks">
          <span>
            {todos.length > 0 ? `Tasks - ${todos.length}` : 'No Tasks Given'}
          </span>
          <List key={todos.id} />
        </section>
        {todos.length > 0 && (
          <button
            onClick={() => clearTodos()}
            type="button"
            className="btn-big btn-clear"
          >
            Clear All
          </button>
        )}
      </section>
    </>
  );
};

export default App;
