import React from 'react'
import { Table } from 'react-bootstrap'

function TaskList(props) {
    return(
        <div>
            <Table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                    {props.task && props.task.map((row)=>(
                    <tr key={row.id}>
                        <td align='center'>{row.id}</td>
                        <td align='center'>{row.title}</td>
                        <td align='center'>{row.desc}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TaskList
