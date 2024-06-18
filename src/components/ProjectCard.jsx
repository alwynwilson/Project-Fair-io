import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SERVERURL from '../services/serverurl';



const ProjectCard = ({displayData}) => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
      <Card  onClick={handleShow} className='shadow btn'>
        <Card.Img variant="top" src={`${SERVERURL}/uploads/${displayData?.projectImg}`} height={'200px'}/>
        <Card.Body>
          <Card.Title>{displayData?.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className="img-fluid" src={`${SERVERURL}/uploads/${displayData?.projectImg}`} height={'200px'} alt="title" />
            </div>
            <div className="col-lg-6">
              <h3>{displayData?.title}</h3>
              <h6><span className='fw-bolder'>Language used :</span><span className='text-danger'>{displayData?.languages}</span></h6>
              <p style={{textAlign:'justify'}}> 
              <span className='fw-bolder'> Project Overview : </span> {displayData?.overview} 
              </p>
            </div>
          </div>
          <div className='float-start mt-2'>
            <a href={displayData?.github} target='_blank' className='btn btn-secondary'><i className='fa-brands fa-github'></i></a>
            <a href={displayData?.websites} target='_blank' className='btn btn-secondary ms-2'><i className='fa-brands fa-link'></i></a>
          </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard