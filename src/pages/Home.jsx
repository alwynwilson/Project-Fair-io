import React from 'react'
import { Link } from 'react-router-dom'
import Landing from '../assets/Landing.gif'

const Home = () => {
  return (
    <>
      <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{fontSize:'80px'}}><i className='fa-brands fa-docker'></i>Project Fair</h1>
              <p style={{textAlign:'justify'}}>Designed and built with all love in the world by the luminar team with the help of our contributors </p>
              <Link to="/login" className="btn btn-warning">START TO EXPLORE</Link>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid rounded-5" src={Landing} alt="Landing" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home