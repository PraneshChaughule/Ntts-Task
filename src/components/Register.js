import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './login.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function Register() {
  const [inputs, setInputs] = useState("");

  localStorage.setItem("Credentials", JSON.stringify(inputs));

  const history = useHistory();
    const handleHistory = () => {
        history.push("/");
    }

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, 'Too Short!')
      .max(10, 'Too Long!')
      .required('First Name is Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Last Name is Required'),
    email: Yup.string()
    .email('Invalid email')
    .required('Email is Required'),
    password: Yup.string()
    .min(8, "Password must be 8 characters at minimum")
    .required('Password is Required')
  });
  return (
    <div className='logContainer'>
      <h3>Registration</h3>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          setInputs(values);
          handleHistory();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" className='inputField' placeholder="first name"/>
            {errors.firstName && touched.firstName ? (
              <div className='errors'>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" className='inputField' placeholder='last name'/>
            {errors.lastName && touched.lastName ? (
              <div className='errors'>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" className='inputField' placeholder='email Id'/>
            {errors.email && touched.email ? <div className='errors'>{errors.email}</div> : null}
            <Field name="password" type="password" className='inputField' placeholder='password'/>
            {errors.password && touched.password ? <div className='errors'>{errors.password}</div> : null}
            <button type="submit" className='signbtn'>Create Account</button>
            <div><span className='linktext'>Already have an account <a href="/">Log In</a></span></div>
          </Form>
        )}
      </Formik>
    </div>

  )
}
export default Register


