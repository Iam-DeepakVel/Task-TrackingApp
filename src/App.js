import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };
  //Add Task
  const addTask = async ({ text, day, remainder }) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const res = fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id, task: text, date: day, remainder }),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  // Toggle Remainder
  const toggleRemainder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, remainder: !taskToToggle.remainder };

    const res =await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();
    const newRemainder = tasks.map((task) =>
      task.id === id ? { ...task, remainder: data.remainder } : task
    );
    setTasks(newRemainder);
  };

  return (
    <div>
      <Header onAdd={() => setShowAddTask(!showAddTask)} text={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
      ) : (
        <div className="flex relative top-40 font-bold w-full h-full items-center justify-center">
          No Tasks to show
        </div>
      )}
    </div>
  );
}

export default App;
