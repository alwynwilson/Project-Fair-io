import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadImg from '../assets/uploadImg.png'

const Add = () => {
  const [preview,setPreview] = useState(uploadImg)
  const [imageFileStatus,setImageFileStatus] = useState(false)
  const [projectDetails,setProjectDetails] = useState({
    title:"",languages:"",github:"",websites:"",overview:"",projectImg:""
  })
  const [show, setShow] = useState(false);
  
  console.log(projectDetails);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    if(projectDetails.projectImg.type=="image/jpeg" || projectDetails.projectImg.type=="image/jpg" || projectDetails.projectImg.type=="image/png" ){
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    }else{
      setImageFileStatus(false)
      setProjectDetails({...projectDetails,projectImg:""})
    }
  },[projectDetails.projectImg])
  return (
    <>
      <button onClick={handleShow} className="btn btn-primary"><i className="fa-solid fa-plus"></i>Add Project</button>

      <Modal size='lg' centered show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Project Details !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} 
                onChange={e=>setProjectDetails({...projectDetails,projectImg:e.target.files[0]})}
                />
                <img height ={'200px'} classNameimg-fluid src={preview} alt="" />
              </label>
              { !imageFileStatus && <div className="text-warning fw-bolder my-2">
                *Upload only the following file types (jpeg, jpg, png) here!!
              </div>}
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project tilte' 
                value={projectDetails.title}
                onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}/>
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Languages used in Project'
                value={projectDetails.languages}
                onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})}
                />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Github Link' 
                value={projectDetails.github}
                onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}
                />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Website Link' 
                value={projectDetails.websites}
                onChange={e=>setProjectDetails({...projectDetails,websites:e.target.value})}
                />
              </div>
            </div>
          </div>
          <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Over View' 
                value={projectDetails.overview}
                onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}
                />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add