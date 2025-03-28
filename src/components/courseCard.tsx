"use client"
import Image from "next/image";
import {Person, Star, Timer} from "@mui/icons-material";
import {useRouter} from "next/navigation";
import {useEffect,useState} from "react";

type CourseCardProps ={
    courseImages:string,
    id:string,
    category:string,
    price:number,
    description:string,
    title:string,
    instructorDetails:{
        username:string,
        profileImage:string
    }

}
export default function CourseCard({courseImages,id,category,price,title,instructorDetails}:CourseCardProps){
    const router =useRouter()
    const [tutorProfile,setTutorProfile] =useState<string>("")
    useEffect(() => {
        instructorImage()
    }, []);
    const instructorImage =()=>{
        const byteCharacters =atob(instructorDetails?.profileImage)
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray]);
        const myUrl =URL.createObjectURL(blob)
        setTutorProfile(myUrl)
    }

    return(
        <div className={"flex p-2 flex-col lg:flex-row md:flex-row border  lg:w-[653px]" +
            " cursor-pointer border-gray-600 rounded-2xl md:p-2 lg:p-2 m-2 gap-2 w-full"}
             onClick={()=>router.push(`/dashboard/aboutCourse/${id}`)}
        >
            <Image
                alt={"course image"}
                height={500}
                width={500}
                className={"rounded-xl h-72 border border-gray-700 w-full md:w-80 lg:w-96 object-fill"}
                src={courseImages ===""?"https://i.pinimg.com/236x/05/d7/84/05d784805e083785e14d8555d9428c1b.jpg":courseImages}/>
            <div className={"flex lg:justify-between  lg:ml-3 md:ml-3 flex-col gap-2 lg:[&>*]:leading-10 [&>*]:leading-8" +
                "lg:[&>*]:p-2 md:[&>*]:p-1 p-2 md:[&>*]:leading-10 [&>*]:flex [&>*]:justify-between"}>
                <div className={""}>
                    <div className={"bg-green-100 mb-1 lg:font-bold md:font-bold font-medium rounded-xl p-1 text-green-500"}>{category}</div>
                    <div className={"font-bold "}>Free <span className={"font-light text-gray-600"}>${price-price}.00</span></div>
                </div>
                <h3 className={"font-bold border-b break-words mb-1 border-b-gray-600"}>{title}</h3>
                <div className={"mt-1 mb-1"}>
                    <div className={"flex gap-2 items-center"}>
                        <Image src={tutorProfile?tutorProfile:"/defaultProfile.jpeg"}
                               alt={"tutor profile"}
                               height={100}
                               width={100}
                               className={"rounded-full border border-gray-400 h-15 w-15"}
                        />
                        <div className={"font-bold"}>{instructorDetails.username}</div>
                    </div>
                    <div className={"text-yellow-500"} ><Star/>5.0</div>
                </div>
                <div className={"items-center"}>
                    <div className={"flex lg:gap-2 md:gap-2 gap-1 p-2 items-center"}>
                        <Person/>
                        <p>200.7k <span>students</span></p>
                    </div>
                    <div className={"text-green-500"}><Timer/> 6 hour</div>
                </div>
            </div>
        </div>
    )
}