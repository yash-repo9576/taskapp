import React from 'react';

function TaskList({ tasks, loading, error }) {
  if (loading) return <div className="loading">Loading tasks...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={`task-item status-${task.status.toLowerCase().replace(' ', '-')}`}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <span className="task-status">{task.status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;