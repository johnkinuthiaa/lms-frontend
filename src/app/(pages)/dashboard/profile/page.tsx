"use client"
import Image from "next/image";
import {useEffect, useState} from "react";

type User ={
    name:string,
    id:number,
    userEmail:string
}
export default function ProfilePage(){
    const[username,setUsername]=useState<string>("")
    const[email,setEmail]=useState<string>("")
    const[linkedin,setLinkedIn]=useState<string>("")
    const[github,setGithub]=useState<string>("")
    const[mobile,setMobile]=useState<string>("")
    const[description,setDescription]=useState<string>("")
    const[message,setMessage]=useState<string>("")
    const userId =1
    const userUrl =`http://localhost:8080/api/v1/users/${userId}/get`

    useEffect(() => {
        getUserProfile()
    }, []);

    const getUserProfile =(async ()=>{
        try{
            const response =await fetch(userUrl,{
                method:"GET",
                cache:"force-cache"
            })
            if(response.ok){
                const data =await response.json()
                if(data.statusCode !=200){
                    setMessage(data.message)
                    return
                }
                setUserInfo(data?.user)

                // setUsername(data?.user?.username)
                // setLinkedIn(data.user?.linkedin !==null?data.user?.linkedin:"")
                // setGithub(data.user?.githubAccount !==null?data.user?.githubAccount:"add")
                // setDescription(data?.user?.userDescription !==null?data.user?.description:"desc")
                // setMobile(data?.user?.mobileNumber !==null?data.user?.mobileNumber:" number")

            }
        }catch (e) {
            setMessage(">"+e)
        }
    })
    return(
        <main className={"flex flex-col mt-4 gap-7 w-[80%] justify-center items-center m-[0 auto]"}>
            <div>{message}</div>
            <div className={"flex flex-col gap-2"}>
                <p className={"font-bold mb-2"}>Profile picture</p>
                <div className={"flex gap-4 items-center"}>
                    <Image
                        src={"https://i.pinimg.com/236x/be/38/78/be3878c34f93d1663a6e5f6af4b78e9c.jpg"}
                        alt={"profile photo"}
                        height={100}
                        width={100}
                        className={"rounded-full h-25 w-25"}
                    ></Image>
                    <div className={"flex gap-3 [&>*]:rounded-xl [&>*]:cursor-pointer" +
                        " [&>*]:w-fit [&>*]:h-fit [&>*]:p-4 [&>*]:font-bold "}>
                        <button className={"bg-blue-500"}>Change Picture</button>
                        <button className={"bg-red-500"}>DeletePicture</button>
                    </div>

                </div>
            </div>
            {/*github,email,linkedin,mobile,username,description*/}
            <form className={"flex gap-2 [&>input]:text-gray-400 [&>input]:outline-0 flex-col [&>label]:font-bold [&>input]:p-2 [&>input]:border" +
                " [&>input]:border-gray-600 [&>input]:rounded-xl "}>
                <label>Profile name</label>
                <input
                    type={"text"}
                    placeholder={"Enter your username..."}
                    value={username}
                    readOnly={true}
                    className={"cursor-not-allowed"}
                    onChange={(e)=>setUsername(e.target.value)}/>
                <label>Email</label>
                <input
                    type={"email"}
                    placeholder={"Enter your email..."}
                    value={email}
                    readOnly={true}
                    className={"cursor-not-allowed"}
                    onChange={(e)=>setEmail(e.target.value)}/>
                <label>Mobile</label>
                <input
                    type={"tel"}
                    value={mobile}
                    placeholder={"+1..."}
                    onChange={(e)=>setMobile(e.target.value)}/>
                <label>Github</label>
                <input
                    type={"url"}
                    value={github}
                    placeholder={"Enter your github account..."}
                    onChange={(e)=>setGithub(e.target.value)}/>
                <label>Linkedin</label>
                <input
                    type={"url"}
                    value={linkedin}
                    placeholder={"Enter your Linkedin..."}
                    onChange={(e)=>setLinkedIn(e.target.value)}/>
                <label>User description:</label>
                <textarea
                    value={description}
                    className={"resize-none h-96 w-96 border border-gray-600 rounded-xl p-2 outline-0 "}
                    onChange={(e)=>setDescription(e.target.value)}
                    autoFocus={true}>

                </textarea>
                <button
                    className={"bg-blue-500 p-2 w-fit h-fit rounded-xl cursor-pointer"}>
                    update details
                </button>
            </form>
        </main>
    )
}