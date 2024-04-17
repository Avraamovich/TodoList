import React, { useState } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';


//Creat
//Read
//Update
//Delete

export type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}

export type filterValueType = "all" | "active" | "completed"


function App() {
    //BLL
    //Global state
    const [tasks, setTasks] = useState<TaskPropsType[]>([
        { id: 1, title: "HTML", isDone: true },
        { id: 2, title: "CSS", isDone: true },
        { id: 3, title: "JS/TS", isDone: true },
        { id: 4, title: "React", isDone: false },
        { id: 5, title: "Redax", isDone: false }
    ])

    const todoListTitle = "What to learn"

    const removeTask = (taskId: number) => {
        const tasks1 = tasks.filter(task => task.id !== taskId)
        setTasks(tasks1)
    }

    //Local state

    
    const [filter, setFilter] = useState<filterValueType>("all")

    const getFilteredTask = (allTask: Array<TaskPropsType>, currentFilter: filterValueType): Array<TaskPropsType> => {
        switch (currentFilter) {
            case "active":
                return allTask.filter(t => t.isDone === false)
            case "completed":
                return allTask.filter(t => t.isDone === true)
            default:
                return allTask;
        }
    }

    const changeTodoListTask = (filter: filterValueType) => {
        setFilter(filter)
    }

    const filterdeTask = getFilteredTask(tasks, filter)



    // UI
    return (
        <div className="App">
            <ToDoList
                title={todoListTitle}
                task={filterdeTask}
                deleteTask={removeTask}
                changeTodoListTask={changeTodoListTask}
            />
        </div>
    );
}

export default App;
