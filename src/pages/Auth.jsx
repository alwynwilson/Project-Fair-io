import React from 'react'
import loginImg from "../assets/loginImg.webp"
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Auth = ({insideRegister}) => {
  return (
    <div style={{width:'100%',height:"100vh"}} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75'>
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='w-100' src={loginImg} alt="Login" />
            </div>
            <div className="col-lg-6">
              <h1 className='fw-bolder mt-2'><i className='fa-brands fa-docker'></i>Project Fair</h1>
              <h5 className='fw-bolder mt-2'>
                  Sign {insideRegister?"Up":"in"} to your account
              </h5>
              <Form>
                {
                  insideRegister &&
                  <FloatingLabel
                    controlId="floatingInputname"
                    label="Username"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Username" />
                </FloatingLabel>
                }
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                      <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                {
                  insideRegister ?
                  <div className="mt-3">
                    <button className="btn btn-primary">Register</button>
                    <p className='mt-2'> Already have an account ? Click here to <Link to="/login">Login</Link></p>
                  </div>
                  :
                  <div className="mt-3">
                    <button className="btn btn-primary">Login</button>
                    <p className='mt-2'> New user ? Click here to <Link to="/register">Register</Link></p>
                  </div>
                }
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth