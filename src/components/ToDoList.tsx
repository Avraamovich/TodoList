import { TaskPropsType } from "../App"
import { Button } from "./Button"


type ToDoListTypeProps = {
    title: string
    task: Array<TaskPropsType>
    deleteTask: (taskId: number) => void
}

export const ToDoList = ({ title, task, deleteTask }: ToDoListTypeProps) => {
    return (
        <div className="todoList">
            <h3>{title}</h3>
            <div>
                <input />
                <Button title="X" />
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
                <Button title="All" />
                <Button title="Active" />
                <Button title="Completed" />
            </div>
        </div>
    )
}

