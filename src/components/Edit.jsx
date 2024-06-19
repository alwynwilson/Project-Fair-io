import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadImg from '../assets/uploadImg.png'
import SERVERURL from '../services/serverurl';


const Edit = ({project}) => {
  
  const [imageFileStatus,setImageFileStatus] = useState(true)

  const [projectDetails,setProjectDetails] = useState({
    id:project?._id,title:project?.title,languages:project?.languages,github:project?.github,websites:project?.websites,overview:project?.overview,projectImg:""
  })

  const [preview,setPreview] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    if(projectDetails.projectImg){
      setPreview(URL.createObjectURL(projectDetails.projectImg))
      setImageFileStatus(true)
    }else{
      setImageFileStatus(false)
      setPreview("")
    }
  },[projectDetails.projectImg])




  return (
    <>

      <button className='btn' onClick={handleShow}><i className="fa-solid fa-edit"></i></button>

      <Modal size='lg' centered show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Project Details !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} 
                onChange={e=>setProjectDetails({...projectDetails,projectImg:e.target.files[0]})}
                />
                <img height ={'200px'} classNameimg-fluid src={`${SERVERURL}/uploads/${project?.projectImg}`} alt="" />
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
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit