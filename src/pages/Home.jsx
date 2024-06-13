import React from 'react'
import { Link } from 'react-router-dom'
import Landing from '../assets/Landing.gif'
import ProjectCard from '../components/ProjectCard'
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <>
      <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{fontSize:'80px'}}><i className='fa-brands fa-docker'></i>Project Fair</h1>
              <p style={{textAlign:'justify'}}>Designed and built with all love in the world by the luminar team with the help of our contributors </p>
              {
                sessionStorage.getItem("token")?
                <Link to="/dashboard" className="btn btn-warning">MANAGE YOUR PROJECTS</Link>
                :
                <Link to="/login" className="btn btn-warning">START TO EXPLORE</Link>
                }
            </div>
            <div className="col-lg-6">
              <img className="img-fluid rounded-5" src={Landing} alt="Landing" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <h1 className='mb-5'>Explore Our Projects</h1>
        <marquee behavior="" direction="left">
          <div className="d-flex">
            <div className="me-5">
              <ProjectCard/>
            </div>
          </div>
        </marquee>
        <button className='btn btn-link mt-3'>VIEW MORE PROJECTS...</button>
      </div>
      <div className="d-flex align-items-center mt-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className='d-flex align-items-center justify-content-evenly mt-3 w-100'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' variant="top" src="https://cdn2.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.jpg" />
              <span>Max Miller</span>
            </Card.Title>
            <Card.Text>
              <div className='d-flex justify-content-center'>
                <div className="fa-solid fa-star text-warning"></div>
                <div className="fa-solid fa-star text-warning"></div>
                <div className="fa-solid fa-star text-warning"></div>
                <div className="fa-solid fa-star text-warning"></div>
              </div>
              <p className='mt-3'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' variant="top" src="https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e07f452/_orig/pixomatic_1572877263963.png" />
              <span>Mary Jane</span>
            </Card.Title>
            <Card.Text>
              <div className='d-flex justify-content-center'>
                <div className="fa-solid fa-star text-warning"></div>
                <div className="fa-solid fa-star text-warning"></div>
                <div className="fa-solid fa-star text-warning"></div>
                <div className="fa-solid fa-star text-warning"></div>
              </div>
              <p className='mt-3'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' variant="top" src="https://tse3.mm.bing.net/th?id=OIP.YqcfNom4HbsaJC3W5uCftQHaKX&pid=Api&P=0&h=180" />
              <span>Albert Homes</span>
            </Card.Title>
            <Card.Text>
              <div className='d-flex justify-content-center'>
                <div className="fa-solid fa-star text-warning"></div>
                <div className="fa-solid fa-star text-warning"></div>
                <div className="fa-solid fa-star text-warning"></div>
                <div className="fa-solid fa-star text-warning"></div>
              </div>
              <p className='mt-3'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    </>
  )
}

export default Home