import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card  onClick={handleShow} className='shadow btn'>
        <Card.Img variant="top" src="" height={'200px'}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className="img-fluid" src="" alt="title" />
            </div>
            <div className="col-lg-6">
              <h3>title</h3>
              <h6><span className='fw-bolder'>Language used :</span><span className='text-danger'>React</span></h6>
              <p style={{textAlign:'justify'}}> 
              <span className='fw-bolder'> Project Overview : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi eos voluptatem libero beatae. Minus, totam. Maxime earum, facilis reprehenderit tenetur alias ipsum laudantium minima ducimus eum corrupti. Iste, itaque. 
              </p>
            </div>
          </div>
          <div className='float-start mt-2'>
            <a href="https://github.com/alwynwilson/EKART-website-io" target='_blank' className='btn btn-secondary'><i className='fa-brands fa-github'></i></a>
            <a href="https://counter-app-io.vercel.app/" target='_blank' className='btn btn-secondary ms-2'><i className='fa-brands fa-link'></i></a>
          </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard