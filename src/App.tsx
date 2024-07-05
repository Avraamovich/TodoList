import React, { useState } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { v1 } from 'uuid';


//Creat
//Read
//Update
//Delete

export type TaskPropsType = {
    id: string;
    title: string;
    isDone: boolean;
}

export type filterValueType = "all" | "active" | "completed"


function App() {
    //BLL
    //Global state
    const [tasks, setTasks] = useState<TaskPropsType[]>([
        { id: v1(), title: "HTML", isDone: true },
        { id: v1(), title: "CSS", isDone: true },
        { id: v1(), title: "JS/TS", isDone: true },
        { id: v1(), title: "React", isDone: false },
        { id: v1(), title: "Redax", isDone: false }
    ])

    const todoListTitle = "What to learn"

    const removeTask = (taskId: string) => {
        const tasks1 = tasks.filter(t => t.id !== taskId)
        setTasks(tasks1)
    }

    const addTask = (title: string) => {
        const newTask = {
            id: v1(),
            title,
            isDone: false,
        }
        const newTasks = [ newTask, ...tasks ]
        setTasks(newTasks)
    }

    const changeTodoListTask = (filter: filterValueType) => {
        setFilter(filter)
    }

    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone
        }
        setTasks( [...tasks ] );
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

    const filterdeTask = getFilteredTask(tasks, filter)

    // UI
    return (
        <div className="App">
            <ToDoList
                title={todoListTitle}
                task={filterdeTask}
                deleteTask={removeTask}
                changeTodoListTask={changeTodoListTask}
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}
                filter={filter}
            />
        </div>
    );
}

export default App;
