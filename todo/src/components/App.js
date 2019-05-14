import React from 'react';
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'


// import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My To do List</h1>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
