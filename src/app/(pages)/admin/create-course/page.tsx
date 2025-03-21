"use client"

import { useState } from "react"

export default function CreateCourse(){
    const USER_ID =1
    const CREATE_COURSE_URL=`http://localhost:8080/api/v1/courses/${USER_ID}/create`
    const[title,setTitle] =useState<string>("")
    const[image,setImage] =useState<string>("")
    const[price,setPrice] =useState<string>("")
    const[description,setDescription] =useState<string>("")
    const[category,setCategory] =useState<string>("")

    const[message,setMessage] =useState<string>("")
    const createNewCourse =(async ()=>{
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        try{
            const response =await fetch(CREATE_COURSE_URL,{
                method:"POST",
                headers:myHeaders,
                body:JSON.stringify({
                    title:title,
                    description:description,
                    price:price,
                    category:category,
                    courseImage:image
                })
            })
            if(response.ok){
                const data =await response.json()
                if(data.statusCode !=200){
                    setMessage(data.message)
                }else{
                    setMessage(data.message)
                }
            }
        }catch (e) {
            throw new Error(">"+e)
        }
    })

    return(
        <main className={" flex flex-col w-[80%] m-[0 auto] mt-10 justify-center items-center"}>
            <div className={"font-bold text-2xl"}>Welcome ADMIN! Create a new course</div>
            <div className={" rounded-xl"}>{message}</div>
            <form
                onSubmit={(e)=>{
                    e.preventDefault()
                    createNewCourse()
                }}
                className={"w-7/12 [&>*>*]:w-full flex flex-col mt-10 gap-4 [&>*>*]:flex " +
                    " [&>*>input]:border [&>*>input]:p-2 [&>*>input]:rounded-xl [&>*>input]:outline-0" +
                    "[&>*>label]:font-bold  [&>*>label]:mt-2 [&>*>label]:mb-2" +
                    " [&>*>input]:border-gray-700 "+
                    " [&>*>*]:gap-2"}>
                <fieldset>
                    <label>Course Title:</label>
                    <input
                        type={"text"}
                        placeholder={"Enter course title..."}
                        required={true}
                        onChange={(e)=>setTitle(e.target.value)}
                        min={4}/>
                </fieldset>
                <fieldset>
                    <label>Course Category:</label>
                    <input type={"text"} placeholder={"Enter course category..."}
                           onChange={(e)=>setCategory(e.target.value)}
                           required={true} min={4}/>
                </fieldset>
                <fieldset>
                    <label>Course Url:</label>
                    <input type={"url"}
                           placeholder={"Enter course category..."}
                           onChange={(e)=>setImage(e.target.value)}
                           required={true} min={4}/>
                </fieldset>
                <fieldset>
                    <label>Price:</label>
                    <input type={"number"} placeholder={"Enter price..."}
                           onChange={(e)=>setPrice(e.target.value)}
                           required={true} min={0}/>
                </fieldset>
                <fieldset>
                    <label>Description:</label>
                    <textarea
                        required={true}
                        onChange={(e)=>setDescription(e.target.value)}
                        className={"outline-0 border border-gray-600 p-2 rounded-xl h-72 overflow-scroll resize-none"}
                        placeholder={"enter the course description"}>
                    </textarea>
                </fieldset>
                <button
                    type={"submit"}
                    className={"cursor-pointer font-bold rounded-xl p-2 bg-blue-500 w-fit hover:bg-blue-400 "}>create
                </button>
            </form>

        </main>
    )
}