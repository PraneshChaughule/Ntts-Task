import React, {useState} from 'react'
import './addTask.css'
import TaskList from './taskList'
import PropTypes from 'prop-types'

function AddTask(props) {
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
            <h4>Type Checking with prop-types</h4>
            <h5>Employee Id:{props.id}</h5>
            <h5>Employee Name:{props.name}</h5>
            <h5>Employee Status:{props.condition}</h5>
            <form onSubmit={submitTask}>
            <h2>Add Task</h2>
                <div className="inputField">
                    <label>Id:</label>
                    <input type="text" name="langName" onChange={e=> setId(e.target.value)}/>

                    <label>Task Title:</label>
                    <input type="text" name="title" onChange={e=> setTitle(e.target.value)}/>

                    <label>Description:</label>
                    <textarea name="qaulification" onChange={e=> setDesc(e.target.value)}/>

                    <button name="submit" className="add-btn">Add</button>
                </div>
            </form>
            <TaskList
            task={task}
            />
        </div>
    )
}

AddTask.propTypes={
    id:PropTypes.number,
    name:PropTypes.string,
    condition:PropTypes.bool
}
export default AddTask
