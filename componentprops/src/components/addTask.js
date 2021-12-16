import React, {useState} from 'react'
import './addTask.css'
import TaskList from './taskList'

function AddTask() {
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const [task, setTask] = useState("")

    const addtask=(id, title, desc)=>{
        const tasks={id, title, desc}
        setTask([...task, tasks])
    }

    const submitTask=(e)=>{
        e.preventDefault()
        addtask(id, title,desc);
        setId("")
        setTitle("");
        setDesc("");
    }
    return (
        <div>
            <form onSubmit={submitTask}>
            <h2>Add Task</h2>
                <div className="inputField">
                    <label> Id: </label>
                    <input type="text" name="langName" onChange={e=> setId(e.target.value)}/>

                    <label> Task Title: </label>
                    <input type="text" name="title" onChange={e=> setTitle(e.target.value)}/>

                    <label> Description:</label>
                    <textarea name="qaulification" onChange={e=> setDesc(e.target.value)}/>

                    <button name="submit" className="add-btn"  >Add</button>
                </div>
            </form>
            <TaskList
            task={task}
            />
        </div>
    )
}

export default AddTask
