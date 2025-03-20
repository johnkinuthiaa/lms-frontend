"use client"
import Image from "next/image";
import {useEffect, useState} from "react";

export default function ProfilePage(){
    const[username,setUsername]=useState<string>("")
    const[email,setEmail]=useState<string>("")
    const[linkedin,setLinkedIn]=useState<string>("")
    const[github,setGithub]=useState<string>("")
    const[mobile,setMobile]=useState<string>("")
    const[description,setDescription]=useState<string>("")
    const[message,setMessage]=useState<string>("")
    const[uploadedProfileImage,setUploadedProfileImage] =useState<Blob|undefined>(undefined)
    const userId =1
    const userUrl =`http://localhost:8080/api/v1/users/${userId}/get`
    const uploadUrl =`http://localhost:8080/api/v1/users/${userId}/upload-profile-photo`
    const[showChangeProfileImageForm,setShowProfileImageForm] =useState(false)
    const [userProfileImage,setUserProfileImage]=useState<string>("https://i.pinimg.com/236x/be/38/78/be3878c34f93d1663a6e5f6af4b78e9c.jpg")
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
                    messageTimeout(data.message)
                    return
                }
                const byteCharacters =atob(data?.user?.profileImage)
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray]);
                const myUrl =URL.createObjectURL(blob)
                setUserProfileImage(myUrl)

            }
        }catch (e) {
            messageTimeout(e+"")
        }
    })
    const uploadProfilePhoto =(async ()=>{
        const formData =new FormData()
        if(typeof (uploadedProfileImage) !="undefined"){
            formData.append("image",uploadedProfileImage)
        }else{
            messageTimeout("Profile photo is undefined")
            return
        }
        try{
            const response =await fetch(uploadUrl,{
                method:"PUT",
                body:formData
            })
            if(response.ok){
                const data =await response.json()
                if(data.statusCode !=200){
                    messageTimeout(data.message)
                }else{
                    messageTimeout(data.message)
                }
            }
        }catch (e){
            messageTimeout(e+"")
        }

    })

    const messageTimeout =(info:string)=>{
        setMessage(info)
        setTimeout(()=>{
            setMessage("")
        },3000)
    }
    return(
        <main className={` flex flex-col mt-4 gap-7 w-[85%] justify-center items-center m-[0 auto]`}>
            <div>{message}</div>
            <div className={`flex flex-col gap-2 ${showChangeProfileImageForm&&"blur-2xl"}`}>
                <p className={"font-bold mb-2"}>Profile picture</p>
                <div className={"flex gap-4 items-center"}>
                    <Image
                        src={userProfileImage}
                        alt={"profile photo"}
                        height={100}
                        width={100}
                        className={"rounded-full h-25 w-25"}
                    ></Image>
                    <div className={"flex gap-3 [&>*]:rounded-xl [&>*]:cursor-pointer" +
                        " [&>*]:w-fit [&>*]:h-fit [&>*]:p-4 [&>*]:font-bold "}>
                        <button className={"bg-blue-500"} onClick={()=>setShowProfileImageForm(true)}>Change Picture</button>
                        <button className={"bg-red-500"}>DeletePicture</button>
                    </div>

                </div>
            </div>
            {showChangeProfileImageForm&&
                <div className={"absolute z-999 bg-gray-600 " +
                    " shadow-xl w-[20%] " +
                    "  border border-gray-600  text-white h-50 p-2 w-72 rounded-xl"}>
                    {message &&<div>{message}</div>}
                    <form className={"flex items-center flex-col p-3"}>
                        <label>Profile image:</label>
                        <div className={"p-2 gap-2 flex flex-col"}>
                            <input type={"file"}
                                   placeholder={"select image..."}
                                   className={"border ] border-gray-700 rounded-xl p-2 cursor-pointer"}
                                   onChange={(e)=> {
                                       if(e.target.files !==null) {
                                           setUploadedProfileImage(e.target.files[0])
                                       }else {
                                           messageTimeout("Profile image should not be blank")
                                       }
                                   }}
                            />
                            <div className={"flex gap-2 justify-center mt-2 [&>*]:font-bold"}>
                                <button
                                    className={"bg-blue-500 cursor-pointer p-2 rounded-xl"}
                                    onClick={(e)=> {
                                        e.preventDefault()
                                        setShowProfileImageForm(false)
                                        uploadProfilePhoto()
                                    }}
                                    type={"button"}>
                                    Submit
                                </button>
                                <button
                                    className={"bg-red-500 cursor-pointer p-2 rounded-xl"}
                                    onClick={()=>setShowProfileImageForm(false)}
                                    type={"button"}>
                                    cancel
                                </button>
                            </div>

                        </div>

                    </form>
                </div>}
            {/*github,email,linkedin,mobile,username,description*/}
            <form className={"flex gap-2 " +
                `${showChangeProfileImageForm&&"blur-2xl"}`
                +" [&>input]:text-gray-400 [&>input]:outline-0 flex-col" +
                " [&>label]:font-bold [&>input]:p-2 [&>input]:border" +
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