import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, FormLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    borderRadius: 3
};

export default function AddStudent(props) {
    const url = "http://localhost:4000/employees"
    const [id, setId] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [qualification, setQualification] = useState("");

    useEffect(() => {
        setId(props.data.id);
        setFname(props.data.first_name);
        setLname(props.data.last_name);
        setEmail(props.data.email);
        setGender(props.data.gender);
        setQualification(props.data.qualification);
    }, [])

    const addData = () => {
        const info = { id, first_name: fname, last_name: lname, email, gender, qualification }
        if (props.type === 'add') {
            // props.onsubmit(data, props.types);
            fetch(url, {
                method: "POST",
                headers: { 'Content-type': "application/json" },
                body: JSON.stringify(info)
            })
            props.close()
        }else if (props.type === 'edit') {
            fetch(url+'/'+info.id,{
              method:"PUT",
              headers: { 'Content-type': "application/json" },
              body: JSON.stringify(info)
            })
        }
    }
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3>{props.type === 'add' ? 'Add Student Details' : 'Update Student Details'}</h3>
                    {props.type === 'edit' ?
                        (<><FormLabel> First Name</FormLabel>
                            <TextField id="first_name" variant="outlined" fullWidth value={fname} onChange={e => setFname(e.target.value)} />
                            <FormLabel> Last Name</FormLabel>
                            <TextField id="last_name" variant="outlined" fullWidth value={lname} onChange={e => setLname(e.target.value)} />
                            <FormLabel> Email</FormLabel>
                            <TextField id="email" variant="outlined" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
                            <FormLabel> Gender</FormLabel>
                            <TextField id="gender" variant="outlined" fullWidth value={gender} onChange={e => setGender(e.target.value)} />
                            <FormLabel> Qualification</FormLabel>
                            <TextField id="qualification" variant="outlined" fullWidth value={qualification} onChange={e => setQualification(e.target.value)} /></>
                        ) : (
                            <><FormLabel> First Name</FormLabel>
                                <TextField id="first_name" variant="outlined" fullWidth onChange={(e) => setFname(e.target.value)} />
                                <FormLabel> Last Name</FormLabel>
                                <TextField id="last_name" variant="outlined" fullWidth onChange={e => setLname(e.target.value)} />
                                <FormLabel> Email</FormLabel>
                                <TextField id="email" variant="outlined" fullWidth onChange={e => setEmail(e.target.value)} />
                                <FormLabel> Gender</FormLabel>
                                <TextField id="gender" variant="outlined" fullWidth onChange={e => setGender(e.target.value)} />
                                <FormLabel> Qualification</FormLabel>
                                <TextField id="qualification" variant="outlined" fullWidth onChange={e => setQualification(e.target.value)} />
                            </>)}

                    <Button variant='outlined' onClick={addData}>{props.type === 'add' ? 'Add' : 'Update'}</Button>
                </Box>
            </Modal>
        </div >
    );
}
