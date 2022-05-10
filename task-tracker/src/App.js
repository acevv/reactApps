import React from 'react';
import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';



function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([ 
    {
     id: 1,
     text: 'Doctors Appointment',
     day: 'Feb 5th at 2:30pm',
    reminder: true,
   },
   {
     id: 2,
     text: 'Meeting at school',
     day: 'Feb 6th at 1:30pm',
     reminder: true,
   },
   {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
   },
])

// Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ));
}

// Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    console.log(id);
  }

  return (
    <div className="container">
      <About/>
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks added"}
     <Footer/>
    </div>
  );
}



export default App;
