import styled from "styled-components"
import { TaskPropsType } from "../App"
import { Button } from "./Button"


type ToDoListTypeProps = {
    title: string
    task: Array<TaskPropsType>
    deleteTask: (taskId: number) => void
}

export const ToDoList = ({ title, task, deleteTask}: ToDoListTypeProps) => {
    return (
        <Wrap>
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
                            <Button title="x" onClick={() => deleteTask(t.id)} />
                        </li>
                )}

            </ul>
        )}
            <div>
               <Button title="All" />
               <Button title="Active" />
               <Button title="Completed" />
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
background-color: #ff9955;
`