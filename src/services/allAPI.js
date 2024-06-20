import SERVERURL from "./serverurl";
import commonAPI from "./commonAPI";

export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

export const addProjectAPI = async (reqBody,reqHeader)=>{   
    //project/add
    return await commonAPI("POST",`${SERVERURL}/project/add`,reqBody,reqHeader)
}

//HOME PROJECT
export const homeProjectAPI = async ()=>{
    //project/add
    return await commonAPI("GET",`${SERVERURL}/get-home-projects`,"")
}

//USER PROJECT
export const userProjectAPI = async (reqHeader)=>{
    //project/add
    return await commonAPI("GET",`${SERVERURL}/user-projects`,"",reqHeader)
}

//ALL PROJECTS
export const allProjectAPI = async (reqHeader)=>{
    //project/add
    return await commonAPI("GET",`${SERVERURL}/all-projects`,"",reqHeader)
}

///project/:id?edit
export const editProjectAPI = async (pid,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/project/${pid}/edit`,reqBody,reqHeader)
}

//project/:pid/remove
export const removeProjectAPI = async (pid,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVERURL}/project/${pid}/remove`,{},reqHeader)
}