import { serialize } from "v8"
import { TaskPropsType, filterValueType } from "../App"
import { Button } from "./Button"
import { KeyboardEvent, ChangeEvent, useState } from "react"


type ToDoListTypeProps = {
    title: string
    task: TaskPropsType[]
    deleteTask: (taskId: string) => void
    changeTodoListTask: (filter: filterValueType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: filterValueType
}

export const ToDoList = ({
    title,
    task,
    deleteTask,
    changeTodoListTask,
    addTask,
    changeTaskStatus,
    filter }: ToDoListTypeProps) => {

    const [taskTitle, setTaskTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const addTaskHandler = () => {
        if (taskTitle.trim() !== '') {
            addTask(taskTitle)
            setTaskTitle("")
        } else {
            setError("Fild is required")
        }
    }

    const onChangeAddTask = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }

    const onKeyboardHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === "Enter") {
            addTaskHandler()
        }
    }


    return (
        <div className="todoList">
            <h3>{title}</h3>
            <div>
                <input value={taskTitle}
                    onChange={onChangeAddTask}
                    onKeyUp={onKeyboardHandler}
                    className={error ? "error" : ""}
                />
                <Button title="+" onClickHandler={() => {
                    addTaskHandler()
                }} />
                {error && <div className="error-message">Fils is required</div>}
            </div>

            {task.length === 0 ? (
                <p>List is Empty</p>
            ) : (
                <ul>
                    {task.map(t => {
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            changeTaskStatus(t.id, e.currentTarget.checked)
                            console.log(t.id + e.currentTarget.checked)
                        }

                        return (
                            <li key={t.id} className={t.isDone ? "is-done" : ""}>
                                <input type="checkbox"
                                    onChange={onChangeHandler}
                                    checked={t.isDone} />
                                <span>{t.title}</span>
                                <Button title="x" onClickHandler={() => deleteTask(t.id)} />
                            </li>)
                    })}
                </ul>
            )}

            <div className="buttonStile">
                <Button className={filter === "all" ? "active-filter" : ""}
                    title="All"
                    onClickHandler={() => changeTodoListTask("all")} />

                <Button className={filter === "active" ? "active-filter" : ""}
                    title="Active"
                    onClickHandler={() => changeTodoListTask("active")} />

                <Button className={filter === "completed" ? "active-filter" : ""}
                    title="Completed"
                    onClickHandler={() => changeTodoListTask("completed")} />
            </div>
        </div>
    )
}

