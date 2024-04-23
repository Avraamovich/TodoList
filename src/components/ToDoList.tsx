import { TaskPropsType, filterValueType } from "../App"
import { Button } from "./Button"
import { useRef, useState } from "react"


type ToDoListTypeProps = {
    title: string
    task: Array<TaskPropsType>
    deleteTask: (taskId: string) => void
    changeTodoListTask: (filter: filterValueType) => void
    addTask: (title: string) => void
}

export const ToDoList = ({ title,
    task,
    deleteTask,
    changeTodoListTask,
    addTask }: ToDoListTypeProps) => {
    // const inputRef = useRef<HTMLInputElement>(null)
    const [taskTitle, setTaskTitle] = useState("")
    const addTaskHandler = () => {
        addTask(taskTitle)
        setTaskTitle("")
    }

    return (
        <div className="todoList">
            <h3>{title}</h3>
            <div>
                <input value={taskTitle}
                    onChange={(event) => {
                        setTaskTitle(event.currentTarget.value)
                    }}
                    onKeyUp={event => {
                        if(event.key === "Enter"){
                            addTaskHandler()
                        }
                    }}
                />   {/*ref={inputRef}*/}

                <Button title="+" onClickHandler={() => {
                    addTaskHandler()
                    // if (inputRef.current) {
                    //     addTask(inputRef.current.value)
                    //     inputRef.current.value = ""
                    // }
                }
                } />

            </div>

            {task.length === 0 ? (
                <p>List is Empty</p>
            ) : (
                <ul>
                    {task.map(t => <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} />
                        <span>{t.title}</span>
                        <Button title="x" onClickHandler={() => deleteTask(t.id)} />
                    </li>
                    )}

                </ul>
            )}
            <div className="buttonStile">
                <Button title="All" onClickHandler={() => changeTodoListTask("all")} />
                <Button title="Active" onClickHandler={() => changeTodoListTask("active")} />
                <Button title="Completed" onClickHandler={() => changeTodoListTask("completed")} />
            </div>
        </div>
    )
}

