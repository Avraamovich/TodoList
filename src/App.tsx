import React, { useState } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';


//Creat
//Read
//Update
//Delete

export type FilterValueType = {

}


export type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    //BLL
    //Global state
    const [tasks, setTasks] = useState<TaskPropsType[]>([
        { id: 1, title: "HTML", isDone: true },
        { id: 2, title: "", isDone: true },
        { id: 3, title: "React", isDone: false },
        { id: 4, title: "Redax", isDone: false }
    ])

    const deleteTasks = (taskId: number) => {
        const tasks1 = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(tasks1)
    }

    //Local state
    const [filter, setFilter] = useState<FilterValueType>("all")

    let tasksForTodoList = tasks
    if(filter === "active"){
        tasksForTodoList = tasks.filter(task => task.isDone === false)
    }
    if(filter == "completed"){
        tasksForTodoList = tasks.filter(task => task.isDone === false)
    }
    

// UI
    return (
        <div className="App">
            <ToDoList
                title="Empty List"
                task={tasksForTodoList}
                deleteTask={deleteTasks}
            />
        </div>
    );
}

export default App;
