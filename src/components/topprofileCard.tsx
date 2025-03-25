"use client"
import Image from "next/image";
import { useEffect,useState } from "react";

type UserInfo={
    id:string,
    username:string,
    role:string,
    profileImage:string
    imageBytes:string
}

export default function TopProfileCard(){
    const[id,setId] =useState<string>("")
    const[name,setName] =useState<string>("")
    const[role,setRole] =useState<string>("")
    const[image,setImage] =useState<string>("")
    useEffect(()=>{
        const userInfo:UserInfo =JSON.parse(sessionStorage.getItem("user") as string)
        setName(userInfo.username)
        setId(userInfo.id)
        setRole(userInfo.role)
        if(userInfo.profileImage ===null || userInfo.profileImage ===""){
            setImage("https://i.pinimg.com/236x/77/af/ff/77afff1ec418fba07ca2e9f31e13d6d9.jpg")
        }else{
            const byteCharacters =atob(userInfo.profileImage)
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray]);
            const myUrl =URL.createObjectURL(blob)
            setImage(myUrl)
        }
    },[])
    return(
        <div className={"flex gap-1"} id={id}>
            <Image
                src={image?image:"https://i.pinimg.com/236x/77/af/ff/77afff1ec418fba07ca2e9f31e13d6d9.jpg"}
                alt={name+"profile image"}
                className={"h-15 w-15 rounded-full object-fill border border-gray-400"}
                height={100}
                width={100}
            />
            <div className={"flex flex-col gap-1"}>
                <p className={"font-bold"}>{name}</p>
                <p className={"font-light"}>{role}</p>
            </div>
        </div>
    )
}