import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${API_URL}/api/tasks`);
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        setTasks(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

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
