import React, { useState } from 'react'
import { Row, Col, Form, Container } from 'react-bootstrap'
import './login.css'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from './Auth';


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let loginfo = JSON.parse(localStorage.getItem('Credentials'));

    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginfo.email === email && loginfo.password === password) {
            login();
            history.push('/Home');
            toast.success("Logged In successfully");
        } else {
            toast.warning('Invalid Credentials');
        }
    }
    return (
        <div>
            <Container className='logContainer'>
                <h3>Login Page</h3>
                <Form onSubmit={handleLogin}>
                    <Row className='row-field'>
                        <Col><input type="text" name="email" className='inputField' placeholder='email id'
                            onChange={e => setEmail(e.target.value)} /></Col>
                        <Col><input type="password" name="password" className='inputField' placeholder='password'
                            onChange={e => setPassword(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><button className='signbtn'>Sign In</button></Col>
                        <div><span className='linktext'>Don't have an account <a href="/register">Register</a></span></div>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default Login
