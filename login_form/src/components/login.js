import React, { useState } from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'

function Login() {
    const [email, setEmail] = useState()
    const [passwd, setPasswd] = useState("")
    const [error, setError] = useState("")
    const submitForm = (e) => {
        alert('User Logged in')
    }
    function changeColor(e){
        e.target.style.background='red'
    }

    const handleKey=(e)=>{
        var regx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        e.preventDefault();
        if(!regx.test(email)){
            alert("Enter Valid Email")
        }
    }
    return (
        <div>
            <Container>
                <Row>
                    <label>Username:</label>
                    <Col><input type="text" name="username" className='input' placeholder='enter email id' value={email}
                        onChange={e => setEmail(e.target.value)} 
                        onKeyPress={(e)=>handleKey(e)}/></Col>
                        {error}
                </Row>
                <Row>
                    <label>Password:</label>
                    <Col><input type="password" name="password" className='input'
                        onChange={e => setPasswd(e.target.value)} /></Col>
                </Row>
                <Row>
                    <Col><Button className='sign_in' onClick={submitForm} onMouseEnter={changeColor}>Sign In</Button></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
