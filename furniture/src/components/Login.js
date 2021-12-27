import React, { useState } from 'react'
import { Row, Col, Form, Container } from 'react-bootstrap'
import './login.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <Form>
                <Container className='logContainer'>
                    <Row className='row-field'>
                        <label>Username:</label>
                        <Col><input type="text" name="email" className='inputField' placeholder='email id'
                            onChange={e => setEmail(e.target.value)} /></Col>
                        <label>Password:</label>
                        <Col><input type="password" name="password" className='inputField' placeholder='password'
                            onChange={e => setPassword(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><button className='signbtn'>Sign In</button></Col>
                        <div><span className='linktext'>Don't have an account <a href="/registration">Register</a></span></div>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default Login
