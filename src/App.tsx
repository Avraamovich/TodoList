import React, { useState } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';

export type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}

function App() {

    const [tasks, setTasks] =  useState<TaskPropsType[]>([
    {id: 1, title: "HTML", isDone: true},
    {id: 2, title: "CSS", isDone: true},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "Redax", isDone: false}
    ])

    const deleteTasks = (taskId: number) => {
        const tasks1 = tasks.filter( task => {
            return task.id !== taskId  
        })
        setTasks(tasks1)
    }
    


    return (
        <div className="App">
            <ToDoList 
                title="Empty List" 
                task={tasks}
                deleteTask={deleteTasks}
                />
        </div>
    );
}

export default App;
