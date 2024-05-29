import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = ({insideDashboard}) => {
  return (
    <>
     <Navbar style={{zIndex:"10"}} className="position-fixed w-100 top-0 border rounded">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{textDecoration:'none',color:"white"}}><i className='fa-brands fa-docker'></i>Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashboard &&
            <div className="ms-auto">
              <button className="btn btn-link fw-bolder">Logout<i className='fa-solid fa-right-from-bracket ms-1'></i></button>
            </div>
          }
        </Container>
      </Navbar></>
  )
}

export default Header