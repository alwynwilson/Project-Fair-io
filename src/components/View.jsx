import React, { useEffect, useState } from 'react'
import Add from '../components/Add'
import Edit from '../components/Edit'
import { userProjectAPI } from '../services/allAPI'

const View = () => {
  const [userProjects,setUserProjects] = useState([])

  useEffect(()=>{
    getUserProjects()
  })

  const getUserProjects = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }

      //api-call - reqbody, reqHeader
      try{
        const result = await userProjectAPI(reqHeader)
        console.log(result);
        if(result.status==200){
          setUserProjects(result.data)
        }
      }catch(err){
        console.log(err);
      }
    }
  }
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="text-warning">All Projects</h2>
        <div>
          <Add/>
        </div>
      </div>
      <div className="mt-4">
        {
          userProjects?.length>0?
          userProjects.map(project=>(
            <div key={project?._id} className="border rounded p-2 d-flex justify-content-between mb-3">
            <h3>{project?.title}</h3>
            <div className="d-flex">
              <div><Edit/></div>
              <div className='btn'><a href={project?.github} target='_blank'><i className="fa-brands fa-github"></i></a></div>
              <button className='btn text-danger'><i className='fa-solid fa-trash'></i></button>
            </div>
        </div>
          ))
          :
          <div className='fw-bolder text-warning'>No projects uploaded yet!!</div>
        }
        
      </div>
    </>
  )
}

export default View