import React,{useState, useEffect} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { Button } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddStudent from './AddStudent';
import axios from 'axios';

export default function TodoList() {
  const url = "http://localhost:4000/employees"
  const [data, setData] = useState([])

  useEffect(() => {
    async function getStudentdata(){
      await axios.get(url)
      .then(res=>setData(res.data))
      .catch(err=>{
        console.log(err);
      })
    }
    getStudentdata();
    // getData()
  }, [])

  // const getData=()=>{
  //   fetch(url).then(response=>response.json())
  //   .then(response=>setData(response))
  // }

  const handleDelete=(id)=>{
    fetch(url+'/'+id,{
      method:"DELETE",
      headers:{"Content-type":"application/json"}
    })
  }

  const [editdata, setEditdata] = useState("");
  const [types, setTypes] = useState("");
  const handleAddEdit=(type, data)=>{
    setTypes(type);
    setEditdata(data);
    handleOpen()
  }

  // const submitData=(data, type)=>{
  //   if(type === 'add'){
  //     fetch(url, {
  //           method: "POST",
  //           headers: { 'Content-type': "application/json" },
  //           body: JSON.stringify(data)
  //       })
  //   }else if(type === 'edit'){
  //     fetch(url+'/'+data.id,{
  //       method:"PUT",
  //       headers: { 'Content-type': "application/json" },
  //       // body
  //     })
  //   }
  // }
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <h2 align="center">Student Information</h2>
          <TableRow>
            <TableCell>First Name </TableCell>
            <TableCell>Last Name </TableCell>
            <TableCell>Email Id</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Qualification</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.qualification}</TableCell>
              <TableCell>
                <span onClick={()=>{handleAddEdit('edit',row)}} className='actionLink'>Update </span>|
                <span onClick={()=>{handleDelete(row.id)}} className='actionLink'> Delete </span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      <Button variant='outlined' style={{marginLeft:"-60%"}} onClick={()=>{
        handleAddEdit('add')}}>Add</Button>
      </Table>
    </TableContainer>

    <AddStudent
    type={types}
    data={editdata}
    open={open}
    close={handleClose}
    // onsubmit={submitData}
    />
    </>
  );
}

