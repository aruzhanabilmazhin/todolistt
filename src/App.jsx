import React, { useState, useEffect } from 'react';

function App() {
  // Загружаем задачи из localStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState('');

  // Сохраняем задачи в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Добавление новой задачи
  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  // Удаление задачи
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Переключение состояния completed
  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTask();
  };

  return (
    <div className="app">
      <h1>Todo list</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Write down task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="add-btn" onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li className="task-row" key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button className="delete-btn" onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
