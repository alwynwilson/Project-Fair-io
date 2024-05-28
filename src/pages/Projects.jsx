import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import {Col, Row} from 'react-bootstrap'


const Projects = () => {
  return (
    <>
      <Header/>
      <div style={{marginTop:'150px'}} className="container-fluid">
        <div className="d-flex justify-content-between">
          <h1>All Projects</h1>
          <input type="text" className='form-control w-25' placeholder='Search projects by language used'/>
        </div>
        <Row className="mt-3">
          <Col className="mb-3" sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>
          
        </Row>
      </div>
    </>
  )
}

export default Projects