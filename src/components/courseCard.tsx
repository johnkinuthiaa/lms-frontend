"use client"
import Image from "next/image";
import TopProfileCard from "@/components/topprofileCard";
import {Person, Star, Timer} from "@mui/icons-material";
import {useRouter} from "next/navigation";

type CourseCardProps ={
    courseImages:string,
    id:string,
    category:string,
    price:number,
    description:string,
    title:string,

}
export default function CourseCard({courseImages,id,category,price,title}:CourseCardProps){
    const router =useRouter()
    return(
        <div className={"flex p-2 flex-col lg:flex-row md:flex-row border  lg:w-[653px]" +
            " cursor-pointer border-gray-600 rounded-2xl md:p-2 lg:p-2 m-2 gap-2 w-fit"}
             onClick={()=>router.push(`/dashboard/aboutCourse/${id}`)}
        >
            <Image
                alt={"course image"}
                height={500}
                width={500}
                className={"rounded-xl h-72 border border-gray-700 w-80 md:w-80 lg:w-96 object-fill"}
                src={courseImages ===""?"https://i.pinimg.com/236x/05/d7/84/05d784805e083785e14d8555d9428c1b.jpg":courseImages}/>
            <div className={"flex lg:justify-between  lg:ml-3 md:ml-3 flex-col gap-2 lg:[&>*]:leading-10 [&>*]:leading-8" +
                "lg:[&>*]:p-2 md:[&>*]:p-1 p-2 md:[&>*]:leading-10 [&>*]:flex [&>*]:justify-between"}>
                <div className={""}>
                    <div className={"bg-green-100 mb-1 lg:font-bold md:font-bold font-medium rounded-xl p-1 text-green-500"}>{category}</div>
                    <div className={"font-bold "}>$14.00 <span className={"font-light text-gray-600"}>${price}.00</span></div>
                </div>
                <h3 className={"font-bold border-b break-words mb-1 border-b-gray-600"}>{title}</h3>
                <div className={"mt-1 mb-1"}>
                    <TopProfileCard/>
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