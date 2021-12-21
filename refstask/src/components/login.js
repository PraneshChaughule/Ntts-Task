import React, { useState, useRef } from 'react'
import { Col, Row, Container, Button, Form } from 'react-bootstrap'

function Login() {
    const username = useRef(null);
    const password = useRef(null);
    const [condition, setcondition] = useState(false)

    const submitForm = (e) => {
        e.preventDefault();
        const name = username.current.value;
        const pwd = password.current.value;
        (name === "" && pwd === "") ? alert("please fill the form"): setcondition(true)
    }

    return (
        <div>
            <Container>
                <Form>
                <Row>
                    <label>Username:</label>
                    <Col><input type="text" name="username" className='input' placeholder='enter email id' ref={username} />
                    </Col>
                </Row>
                <Row>
                    <label>Password:</label>
                    <Col><input type="password" name="password" className='input' placeholder='password' ref={password} />
                    </Col>
                </Row>
                <Row>
                    <Col><Button className='sign_in' onClick={submitForm}>Sign In</Button></Col>
                </Row>
                </Form>
            <p>{condition ? `Username: ${username.current.value} and Password: ${password.current.value}`:""}</p>
            </Container>
        </div>
    )
}

export default Login
