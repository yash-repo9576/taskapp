import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task App</h1>
      </header>
      <main>
        <TaskForm />
        <TaskList />
      </main>
      <footer>
        <p>Full-Stack TaskList App</p>
      </footer>
    </div>
  );
}

export default App;

